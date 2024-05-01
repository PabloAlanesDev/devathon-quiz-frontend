import { useEffect, useState } from "react";
import Input from "./ui/Input";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

export default function MainForm() {
  const [username, setUsername] = useState({ name: "" });
  const [error, setError] = useState(false);

  const pattern = new RegExp("^[A-Za-z0-9]+$");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setUsername({ name: "" });
      setError(false);
      return;
    }

    if (!pattern.test(e.target.value)) {
      setError(true);
      return;
    } else {
      setError(false);
      setUsername({ name: e.target.value });
      return;
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name: string | null = localStorage.getItem("username");
    name === null && localStorage.setItem("username", username.name);
    name !== username.name && localStorage.setItem("username", username.name);

    alert(username.name);
    setUsername({ name: "" });
  };

  useEffect(() => {
    const name: string | null = localStorage.getItem("username");

    if (name !== null) {
      setUsername({ name });
    }
  }, []);

  return (
    <>
      <Avatar />

      <div className="container mx-auto flex">
        <div className="flex flex-col md:ml-auto w-full gap-5 ">
          <div className="flex flex-col justify-center gap-4 mb-4">
            <form onSubmit={onSubmit}>
              <Input
                title="Nombre"
                type="text"
                name={username.name}
                error={error}
                onChange={onChange}
              />
              <button className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Jugar
              </button>
            </form>
          </div>
          <hr />
          <Link to={`create`}>
            <button className="py-2 px-6 rounded text-indigo-600 text-lg border border-indigo-600 hover:bg-indigo-600 hover:text-white w-full">
              Crear sala
            </button>
          </Link>
          <Link to={`join`}>
            <button className="py-2 px-6 rounded text-indigo-600 text-lg border border-indigo-600 hover:bg-indigo-600 hover:text-white w-full">
              Unirme a una sala
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
