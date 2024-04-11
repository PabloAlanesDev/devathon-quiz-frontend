interface Props {
  title: string;
  type: string;
  name: string;
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ title, type, name, error, onChange }: Props) {
  return (
    <>
      <div className={`relatives ${error ? "" : "mb-4"}`}>
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          {title.toUpperCase()}
        </label>
        <input
          type={type}
          id={title}
          name={title}
          value={name}
          onChange={onChange}
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <span className="text-sm font-semibold text-red-500 my-2">
        {error && "Solo se permiten letras y números"}
      </span>
    </>
  );
}
