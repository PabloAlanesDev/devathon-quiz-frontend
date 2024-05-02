import React from "react";

export const SelectQuiz = ({ quiz, handlerQuizSelect }) => {
  const [selectResponse, setSelectResponse] = React.useState(null);

  const handlerSelectChange = (e) => {
    setSelectResponse(e.currentTarget.value);
  };
  return (
    <div>
      <h1>{quiz.question}</h1>
      {quiz.responses.map((item, index) => (
        <div key={index}>
          <input
            type="radio"
            name={item.text}
            value={item.id}
            checked={selectResponse === item.id}
            onChange={handlerSelectChange}
          />
          <label>{item.text}</label>
        </div>
      ))}

      <button onClick={() => handlerQuizSelect(quiz.id, selectResponse)}>
        Select Response
      </button>
    </div>
  );
};
