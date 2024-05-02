import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [fname, setFname] = useState(localStorage.getItem('user_name') ?? '')
    const [froom, setFroom] = useState("")

    const navigate = useNavigate();
  
    const handleChange = e => setFname(e.target.value)
    const handleChangeRoom = e => setFroom(e.target.value)
  
    const handlerCreateRoom = () => {
      axios.post('http://localhost:5000/api/rooms', {
        users: [
          {
            name: fname,
            role: 'owner'
          }
        ]
      }).then((r) =>{
        console.log(r.data)
        localStorage.setItem('user_id',r.data.users[0].id);
        localStorage.setItem('user_name', fname);
        localStorage.setItem('user_role',r.data.users[0].role);
        localStorage.setItem('room_id',r.data.id);
        navigate("/room")
      })
    }
  
    const handlerJoinRoom = () => {
      axios.post(`http://localhost:5000/api/rooms/${froom}/users/`, {
          name: fname,
          role: 'invited'
      }).then((r) =>{
        console.log(r.data)
        localStorage.setItem('user_id',r.data.id);
        localStorage.setItem('user_name', fname);
        localStorage.setItem('user_role',r.data.role);
        localStorage.setItem('room_id',froom);
        navigate("/room")
      })
    }
  
    return (
      <div>
        <form>
          <label>
            First Name:
            <input type="text" value={fname} onChange={handleChange} />
          </label>
        </form>
  
        <form>
          <label>
            Room ID:
            <input type="text" value={froom} onChange={handleChangeRoom} />
          </label>
        </form>
  
        <button onClick={handlerJoinRoom}>Join room</button>
        <button onClick={handlerCreateRoom}>Create room</button>
  
      </div>
    )
}