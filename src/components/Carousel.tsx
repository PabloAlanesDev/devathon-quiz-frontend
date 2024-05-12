import { useState } from "react";

const Carousel = ({ slides }) => {
  const [curr, setCurrent] = useState(0);

  const nextSlide = () => setCurrent(curr === slides.length - 1 ? 0 : curr + 1);

  const prevSlide = () => setCurrent(curr === 0 ? slides.length - 1 : curr - 1);

  return (
    <div className="w-full h-full p-8 relative">
      <div className="flex flex-col items-center justify-center">
        <img
          src={slides[curr].img}
          className="object-cover w-full h-full block"
        />
        <p className="text-center text-2xl">{slides[curr].txt}</p>
      </div>
      <div
        className="absolute flex items-center justify-between w-full
      inset-0 p-2"
      >
        <button onClick={prevSlide}>
          <img src="/chevron-left.svg" alt="Left chevron" />
        </button>
        <button onClick={nextSlide}>
          <img src="/chevron-right.svg" alt="Right chevron" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
