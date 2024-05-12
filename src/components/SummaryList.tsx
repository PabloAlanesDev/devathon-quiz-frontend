export const SummaryList = ({ users }) => {
  return (
    <div>
      {users
        .sort((a, b) => b.score - a.score)
        .map((item, index) => (
          <div
            key={index}
            className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded mb-2"
          >
            <h3 className="flex items-center justify-between gap-4">
              <span>{item.name}</span>
              <span>{item.score}pts.</span>
            </h3>
          </div>
        ))}
    </div>
  );
};
