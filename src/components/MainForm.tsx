import { useState } from "react";
import Input from "./ui/Input";
import { Link } from "react-router-dom";
import DefaultAvatar from "../assets/dafault-avatar.svg";

export default function MainForm() {
  const [form, setForm] = useState({ name: "", code: "" });
  const [error, setError] = useState(false);

  const pattern = new RegExp("^[A-Za-z0-9]+$");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!pattern.test(form.name) || !pattern.test(form.code)) {
      setError(true);
      return;
    }

    //Logic to join a room
    setForm({ name: "", code: "" });
    setError(false);
  };

  return (
    <>
      <img src={DefaultAvatar} width={200} height={200} alt="Main Image" />
      <span className="text-sm font-semibold text-red-500">
        {error && "Solo se permiten letras y números"}
      </span>
      <div className="container mx-auto flex">
        <div className="flex flex-col md:ml-auto w-full gap-3 ">
          <div className="flex flex-col justify-center gap-4 mb-4">
            <form onSubmit={onSubmit}>
              <Input
                title="Nombre"
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
              />
              <Input
                title="Código de sala"
                type="text"
                name="code"
                value={form.code}
                onChange={onChange}
              />
              <button className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Unirse a una sala
              </button>
            </form>
          </div>
          <hr />
          <Link to={`create`}>
            <button className="py-2 px-6 rounded text-indigo-600 text-lg border border-indigo-600 hover:bg-indigo-600 hover:text-white w-full">
              Crear sala
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
