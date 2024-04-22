import MainImage from "../assets/main-img.svg";

export default function Instruccions() {
  return (
    <>
      <div className="flex flex-col items-center p-5">
        <img src={MainImage} width={300} height={300} alt="Main Image" />
        <h1 className="text-indigo-500 font-semibold text-7xl">QUIZZ APP</h1>
      </div>
      <div className="text-start">
        <ul className="text-xl list-disc">
          <li>Mínimo 2 jugadores y máximo 4 jugadores</li>
          <li>Preguntas con opción múltiple</li>
          <li>Son 4 preguntas aleatorias</li>
          <li>Temas de programación</li>
        </ul>
      </div>
    </>
  );
}
