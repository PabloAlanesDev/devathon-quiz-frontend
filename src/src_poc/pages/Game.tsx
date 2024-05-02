import { useEffect, useState } from "react";
import { SocketProvider, useSocket } from "../contexts/socketContext"
import { useNavigate } from "react-router-dom";
import { SelectTopics } from "../sections/SelectTopics";
import { UsersList } from "../sections/UsersList";
import { SummaryList } from "../sections/Summary";
import { SelectQuiz } from "../sections/SelectQuiz";


export const Game = () => {
    return (
    <SocketProvider>
      <Room />   
    </SocketProvider>
    )
  }


export const Room = () => {
  const socket = useSocket();
  const navigate = useNavigate()

  const role = localStorage.getItem('user_role')

  const [users, setUsers] = useState([])
  const [quiz, setQuiz] = useState(null)
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(true)

  const handlerLeaveRoom = () => {
    socket.emit('leave_room')
    exitRoom()
  }

  const exitRoom = () => {
    localStorage.removeItem('room_id')
    localStorage.removeItem('user_id')
    localStorage.removeItem('user_role')
    navigate('/')
  }

  const handlerStarGame = () => {
    socket.emit('start_game')
    setLoading(true)
  }

  const handlerQuizSelect = (quiz_id, response_id) => {
    socket.emit('quiz_response', {
      quiz_id: quiz_id,
      response_id: response_id
    })
    setLoading(true)
  }

  useEffect(() => {
    socket.on('room_users', (data) => setUsers(data));
    socket.on('quiz_room', (data) => {
      setLoading(false)
      setQuiz(data)
    });
    socket.on('end_game', (data) => setSummary(data));
    socket.on('disconnect', () => exitRoom())
  }, []);

  return (
    <div>
      {!quiz && (
        <>
        <h2>Lobby {localStorage.getItem('room_id')}</h2>
        <UsersList users={users}/>
        {role === 'owner' && (
          <>
            <SelectTopics/>
            <button onClick={(e) => handlerStarGame()}>Start game</button>
          </>
        )}
        </>
      )
      }
      {!summary && quiz && (
        <>
        <h2>Quiz</h2>
        {!loading ? <SelectQuiz quiz={quiz} handlerQuizSelect={handlerQuizSelect}/> : <p>Loading...</p>}
        </>
      )}

      {summary &&(
        <>
          <h2>Summary</h2>
          <SummaryList users={summary}/>
        </>
      )}

      <button onClick={(e) => handlerLeaveRoom()}>Leave room</button>

    </div>
  );
};






