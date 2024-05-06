import { useEffect, useState } from "react";
import { SocketProvider } from "../context/socketContext";
import { useSocket } from "../hooks/useSocket";
import { useNavigate } from "react-router-dom";
import { SelectTopics } from "../components/SelectTopics";
import { UsersList } from "../components/UsersList";
import { SummaryList } from "../components/SummaryList";
import { SelectQuiz } from "../components/SelectQuiz";
import Loader from "@/components/Loader";

import axios from "axios";

export const Game = () => {
  return (
    <SocketProvider>
      <Room />
    </SocketProvider>
  );
};

export const Room = () => {
  const socket = useSocket();
  const navigate = useNavigate();

  const role = localStorage.getItem("user_role");

  const [users, setUsers] = useState([]);
  const [topicsId, setTopicsId] = useState([]);
  const [quiz, setQuiz] = useState(null);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  const handlerLeaveRoom = () => {
    socket.emit("leave_room");
    exitRoom();
  };

  const exitRoom = () => {
    localStorage.removeItem("room_id");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_role");
    navigate("/");
  };

  const getRandomQuiz = (quizzes) => {
    return quizzes[Math.floor(Math.random() * quizzes.length)];
  };

  const showQuizzes = () => {
    axios.get(`http://localhost:5000/api/quizzes/`).then(({ data }) => {
      const quizzes = data;
      const filteredQuizzes = [];

      quizzes.filter((quiz) => {
        topicsId.map((topicsId) => {
          if (quiz.topic_id === topicsId) filteredQuizzes.push(quiz);
        });
      });

      setQuiz(getRandomQuiz(filteredQuizzes));

      handlerStarGame();
    });
  };

  const handlerStarGame = () => {
    socket.emit("start_game");

    setLoading(true);
  };

  const handlerQuizSelect = (quiz_id, response_id) => {
    socket.emit("quiz_response", {
      quiz_id: quiz_id,
      response_id: response_id,
    });
    setLoading(true);
  };

  useEffect(() => {
    const room_id = localStorage.getItem("room_id");

    axios.post(`http://localhost:5000/api/rooms/${room_id}/quizzes`, {
      topics: topicsId,
    });
  }, [topicsId]);

  useEffect(() => {
    socket.on("room_users", (data) => setUsers(data));
    socket.on("quiz_room", (data) => {
      setLoading(false);
      setQuiz(data);
    });
    socket.on("end_game", (data) => setSummary(data));
    socket.on("disconnect", () => exitRoom());
  });

  return (
    <main className="grid place-content-center min-h-screen *:my-4">
      {!quiz && (
        <>
          <h2 className="flex items-center gap-4 bg-blue-500 font-semibold text-white py-2 px-4 border border-blue-500 rounded">
            Código de sala:
            <span className="font-bold text-2xl">
              {localStorage.getItem("room_id")}
            </span>
          </h2>
          <UsersList users={users} />
          {role === "owner" && (
            <>
              <SelectTopics
                topicsId={topicsId}
                setTopicsId={setTopicsId}
                showQuizzes={showQuizzes}
              />
              {/* <button
                onClick={() => handlerStarGame()}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Empezar partida
              </button> */}
            </>
          )}
        </>
      )}

      {!summary && quiz && (
        <>
          {!loading ? (
            <SelectQuiz quiz={quiz} handlerQuizSelect={handlerQuizSelect} />
          ) : (
            <Loader />
          )}
        </>
      )}

      {summary && (
        <>
          <h2 className="text-blue-500 font-semibold mb-2 text-3xl">
            Resultados
          </h2>
          <SummaryList users={summary} />
        </>
      )}

      <button
        onClick={() => handlerLeaveRoom()}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Dejar la sala
      </button>
    </main>
  );
};
