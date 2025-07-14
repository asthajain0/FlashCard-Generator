import React from 'react'
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className=' bg-gradient-to-b from-blue-900 to-black flex align-middle justify-center p-10 h-full' id='about'>
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.25 }}
          >
        <div className='text-center p-2 md:p-5 text-3xl md:text-6xl md:mt-30 text-white/70'>About</div>
        <div className='p-2 md:px-10 text-lg md:text-xl mx-0 md:mx-10  text-white/60'>
          Flashgen makes learning faster, smarter, and more effective. Whether you're a student, professional, or lifelong learner, it helps you turn notes into interactive flashcards using active recall and spaced repetition. With an easy-to-use interface, you can create, organize, and review cards effortlessly — no more manual work or clutter. Study anywhere, anytime, and stay consistent. Start building smarter flashcards and take charge of your learning.
        </div>
        </motion.div>
        </div>
  )
}

export default About