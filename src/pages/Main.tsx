import MainImage from "../assets/main-img.svg";
import DefaultAvatar from "../assets/dafault-avatar.svg";

export default function Main() {
  return (
    <main className="flex justify-content items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-screen">
        <div className="flex flex-col justify-content items-center gap-4 p-5">
          <div className="flex flex-col justify-content items-center gap-4 p-5">
            <img src={MainImage} width={300} height={300} alt="Main Image" />
            <h1 className="text-indigo-500 font-semibold text-7xl text-center">
              QUIZZ APP
            </h1>
          </div>
          <h2 className="text-3xl font-semibold  ">Instructions</h2>
          <ul className="text-xl text-center">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Eligendi harum unde aliquam eum?</li>
            <li>Adipisci itaque quos totam maiores?</li>
            <li>Atque illum ad officia corrupti?</li>
            <li>Iusto recusandae quas cumque consequuntur.</li>
          </ul>
        </div>
        <div className="flex flex-col justify-content items-center gap-4 p-5">
          <img src={DefaultAvatar} width={200} height={200} alt="Main Image" />
          <div className="container mx-auto flex">
            <div className="p-8 flex flex-col md:ml-auto w-full gap-5 ">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Create room
              </button>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Join room
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
