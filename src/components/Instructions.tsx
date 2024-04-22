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
          <li>MÍNIMO 4 JUGADORES Y MÁXIMO 2 JUGADORES</li>
          <li>PREGUNTAS CON OPCIÓN MÚLTIPLE</li>
          <li>4 PREGUNTAS ALEATORIAS</li>
          <li>TEMAS DE PROGRAMACIÓN</li>
        </ul>
      </div>
    </>
  );
}
