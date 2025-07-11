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
        <div className='p-2 md:px-10 text-lg md:text-xl mx-0 md:mx-10  text-white/60'>Our Flashgen is designed to make learning faster, smarter, and more engaging. Whether you're a student preparing for exams, a professional brushing up on new skills, or simply someone who loves to learn — this tool helps you turn plain notes into powerful study material.

        With just a few clicks, you can generate interactive flashcards that promote active recall and spaced repetition — two scientifically proven techniques for improving memory retention. The intuitive interface allows you to create, organize, and review your flashcards with ease.

        No more manually writing cards or struggling to stay organized. Our generator streamlines your study process so you can focus on what truly matters: understanding and remembering the content. Whether you're studying on your laptop or revising on the go, this tool adapts to your workflow and helps you stay consistent.

        Start creating smarter flashcards today — and take control of your learning journey.</div>
        </motion.div>
        </div>
  )
}

export default About