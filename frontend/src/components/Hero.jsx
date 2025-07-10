import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='flex flex-col align-middle justify-center gap-3 my-51'>
        <div className='text-8xl mx-5 text-center text-white'>
            Flash it. Learn it. Own it.
        </div>
        <div className='text-2xl mx-5 text-center text-white'>
            Quickly generate smart flashcards from your notes and study more efficiently with active recall and spaced repetition.
        </div>
        <button className="w-45 mx-auto flex items-center gap-2 px-5 py-2 text-xl font-semibold rounded-2xl bg-white text-pink-800 hover:bg-gray-200 transition">
            Get Started <FaArrowCircleRight />
        </button>
    </div>
  )
}

export default Hero