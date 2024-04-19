import { useState } from "react";
import DefaultAvatar from "../assets/dafault-avatar.svg";
import Input from "./ui/Input";
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

    alert(username.name);
    setUsername({ name: "" });
  };

  return (
    <>
      <img src={DefaultAvatar} width={200} height={200} alt="Main Image" />

      <div className="container mx-auto flex">
        <div className="flex flex-col md:ml-auto w-full gap-5 ">
          <div className="flex flex-col justify-center gap-4 mb-4">
            <form onSubmit={onSubmit}>
              <Input
                title="name"
                type="text"
                name={username.name}
                error={error}
                onChange={onChange}
              />
              <button className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Play
              </button>
            </form>
          </div>
          <hr />
          <Link to={`create`}>
            <button className="py-2 px-6 rounded text-indigo-600 text-lg border border-indigo-600 hover:bg-indigo-600 hover:text-white w-full">
              Create room
            </button>
          </Link>
          <Link to={`join`}>
            <button className="py-2 px-6 rounded text-indigo-600 text-lg border border-indigo-600 hover:bg-indigo-600 hover:text-white w-full">
              Join room
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
