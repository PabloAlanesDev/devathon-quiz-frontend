import SliderContainer from "@/components/SliderContainer";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <main className="min-h-screen grid place-content-center gap-8">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>
      <h1 className="text-7xl text-teal-600 font-bold text-center mx-4 uppercase">
        TriCode
      </h1>
      <h2 className="text-center font-semibold text-teal-600 text-xl">
        Plataforma de preguntas <br /> sobre programación
      </h2>
      <article className="max-w-3xl mx-4">
        <SliderContainer />
      </article>

      <Link to={"/home"} className="mx-4">
        <button className="bg-transparent w-full hover:bg-teal-600 text-teal-600 font-semibold hover:text-white py-2 px-4 border-2 border-teal-600 hover:border-transparent rounded">
          Empezar a jugar
        </button>
      </Link>
    </main>
  );
};

export default WelcomePage;
