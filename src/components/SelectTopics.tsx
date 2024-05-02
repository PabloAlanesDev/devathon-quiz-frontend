import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export const SelectTopics = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["topics"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/api/topics");
      console.log(response);
      console.log(isPending, isError);
      //if (!response.ok) {
      // throw new Error('Network response was not ok')
      //}
      return response.data;
    },
  });

  const [selectedIds, setSelectedId] = useState([]);

  const handleCheckboxChange = (e) => {
    const checkedId = e.target.value;
    if (e.target.checked) {
      setSelectedId([...selectedIds, checkedId]);
    } else {
      setSelectedId(selectedIds.filter((id) => id !== checkedId));
    }
  };

  const handlerSelectTopic = () => {
    const room_id = localStorage.getItem("room_id");
    axios.post(`http://localhost:5000/api/rooms/${room_id}/quizzes`, {
      topics: selectedIds,
    });
  };

  if (data) {
    return (
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div>
                <div>
                  <input
                    type="checkbox"
                    value={item.id}
                    checked={selectedIds.includes(item.id)}
                    onChange={(event) => {
                      handleCheckboxChange(event);
                    }}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>
                    {item.name}
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handlerSelectTopic}>Select Topic</button>
      </div>
    );
  }

  return null;
};
