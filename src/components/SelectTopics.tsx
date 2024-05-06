import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const SelectTopics = ({ topicsId, setTopicsId, showQuizzes }) => {
  const { data } = useQuery({
    queryKey: ["topics"],
    queryFn: async () => {
      const url = "http://localhost:5000/api/topics";

      const response = await axios.get(url);

      return response.data;
    },
  });

  const handleChange = (event) => {
    if (event.target.checked) {
      setTopicsId([...topicsId, event.target.value]);
    } else {
      setTopicsId(topicsId.filter((topic) => topic !== event.target.value));
    }
  };

  if (data) {
    return (
      <div>
        <h3 className="text-blue-500 font-semibold mb-2">Temática</h3>
        <ul className="bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded mb-4">
          {data.map((topic, index) => (
            <li key={index} className="flex items-center">
              <input
                id={topic.id}
                type="checkbox"
                value={topic.id}
                onChange={handleChange}
                className="mr-2 w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor={topic.id}>{topic.name}</label>
            </li>
          ))}
        </ul>

        <button
          onClick={showQuizzes}
          className="bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Confirmar selección
        </button>
      </div>
    );
  }

  return null;
};
