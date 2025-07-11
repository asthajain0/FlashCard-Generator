import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-150 gap-6 px-4 text-center">
      <h1 className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
        Flash it. Learn it. Own it.
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl">
        Quickly generate smart flashcards from your notes and study more efficiently with active recall and spaced repetition.
      </p>

      <NavLink
        to="/generate"
        className="mt-4 flex items-center gap-2 px-6 py-3 text-lg sm:text-xl font-semibold rounded-2xl bg-white text-black/80 hover:bg-gray-200 transition"
      >
        Get Started <FaArrowCircleRight />
      </NavLink>
    </div>
  );
};

export default Hero;
