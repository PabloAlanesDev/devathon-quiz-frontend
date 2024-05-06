export const UsersList = ({ users }) => {

  return (
    <div>
      <h3 className="text-blue-500 font-semibold mb-2">Participantes:</h3>
      <ul className="flex justify-around gap-4">
        {" "}
        {users.map((user) => (
          <div
            key={user.id}
            className="relative inline-flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full "
          >
            <span className="font-semibold text-white">
              {user.name.slice(0, 2).toUpperCase()}
            </span>
            <span
              className={`top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full ${
                user.status === "connect" ? "bg-green-400" : "bg-red-400"
              }`}
            ></span>
          </div>
        ))}
      </ul>
    </div>
  );
};
