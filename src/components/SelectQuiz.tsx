import React from "react";

export const SelectQuiz = ({ quiz, handlerQuizSelect }) => {
  const [selectResponse, setSelectResponse] = React.useState(null);

  const handlerSelectChange = (e) => {
    setSelectResponse(e.currentTarget.value);
  };
  return (
    <div className="max-w-3xl *:my-4">
      <h3 className="text-4xl text-blue-500 font-semibold mb-2">
        {quiz.question}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {quiz.responses.map((item, index) => (
          <div
            key={index}
            className="bg-transparent border border-blue-500 rounded py-2 px-4"
          >
            <input
              id={item.id}
              type="radio"
              name={item.text}
              value={item.id}
              checked={selectResponse === item.id}
              onChange={handlerSelectChange}
              className="mr-2"
            />
            <label htmlFor={item.id}>{item.text}</label>
          </div>
        ))}
      </div>

      <button
        onClick={() => handlerQuizSelect(quiz.id, selectResponse)}
        className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Seleccionar respuesta
      </button>
    </div>
  );
};
