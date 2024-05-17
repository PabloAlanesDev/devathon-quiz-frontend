import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [fname, setFname] = useState(localStorage.getItem("user_name") ?? "");
  const [froom, setFroom] = useState("");

  const navigate = useNavigate();

  const handleChange = (event : React.ChangeEvent<HTMLInputElement> ) => setFname(event.target.value);
  const handleChangeRoom = (event: React.ChangeEvent<HTMLInputElement>) => setFroom(event.target.value);

  const handlerCreateRoom = () => {
    axios
      .post("http://localhost:5000/api/rooms", {
        users: [
          {
            name: fname,
            role: "owner",
          },
        ],
      })
      .then((r) => {
        console.log("Petición a : api/room", r.data);
        localStorage.setItem("user_id", r.data.users[0].id);
        localStorage.setItem("user_name", fname);
        localStorage.setItem("user_role", r.data.users[0].role);
        localStorage.setItem("room_id", r.data.id);
        navigate("/room");
      });
  };

  const handlerJoinRoom = () => {
    axios
      .post(`http://localhost:5000/api/rooms/${froom}/users/`, {
        name: fname,
        role: "invited",
      })
      .then((r) => {
        console.log(r.data);
        localStorage.setItem("user_id", r.data.id);
        localStorage.setItem("user_name", fname);
        localStorage.setItem("user_role", r.data.role);
        localStorage.setItem("room_id", froom);
        navigate("/room");
      });
  };

  return (
    <main className="grid place-content-center min-h-screen ">
      <article>
        <h1 className="text-7xl text-center font-semibold text-teal-600">
          TRICODE
        </h1>
      </article>
      <article className="*:my-4 flex flex-col">
        <form className="flex flex-col">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre de usuario:
          </label>
          <input
            id="username"
            type="text"
            value={fname}
            onChange={handleChange}
            className="bg-transparent focus:bg-teal-600 text-teal-600 font-semibold focus:text-white py-2 px-4 border border-teal-600 focus:border-transparent rounded"
          />
        </form>

        <button
          onClick={handlerCreateRoom}
          className="bg-transparent hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-600 hover:border-transparent rounded"
        >
          Crear sala de juego
        </button>

        <hr />

        <form className="flex flex-col">
          <label
            htmlFor="coderoom"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Código sala de juego:
          </label>
          <input
            id="coderoom"
            type="text"
            value={froom}
            onChange={handleChangeRoom}
            className="bg-transparent hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-600 hover:border-transparent rounded"
          />
        </form>

        <button
          onClick={handlerJoinRoom}
          className="bg-transparent hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-600 hover:border-transparent rounded"
        >
          Unirse a sala de juego
        </button>
      </article>
    </main>
  );
};
