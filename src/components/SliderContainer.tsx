import { useState } from "react";
import slides from "../data/slides.js";

const SliderContainer = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSlider = (id: number) => {
    setActiveSlide(id === 1 ? slides.length : activeSlide - 1);
  };

  const nextSlider = (id: number) => {
    setActiveSlide(id === slides.length ? 1 : activeSlide + 1);
  };

  return (
    <div>
      {slides.map((slide) => {
        const { id, image, title, text } = slide;

        return (
          <div
            key={id}
            className={
              activeSlide === id
                ? "flex justify-between items-center"
                : "hidden"
            }
          >
            <button onClick={() => prevSlider(id)}>
              <img src="/chevron-left.svg" alt="Left chevron" className="h-12 w-12" />
            </button>

            <div className="flex flex-col items-center">
              <img src={image} alt={title} className="w-64 h-64" />
              <h2 className="text-2xl font-bold my-6 ">{title}</h2>
              <p className="text-sm text-center">{text}</p>
            </div>

            <button onClick={() => nextSlider(id)}>
              <img src="/chevron-right.svg" alt="Right chevron" className="h-12 w-12" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SliderContainer;
