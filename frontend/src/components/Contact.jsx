import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-[linear-gradient(to_top,#01194e_20%,#000)] py-20 px-4 h-full'>
        <div className='text-center text-4xl md:text-6xl text-white font-bold'>Contact Us</div>

        <div className='bg-white/5 p-10 m-10  rounded-2xl max-w-[550px] mx-auto'>
            <form className='space-y-8' action="https://getform.io/f/ajjolxma" method='POST'>
                <div className='grid md:grid-cols-2 gap-5'>
                    <input type='text' name='name'  className='bg-white/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400' placeholder='First Name'/>
                    <input type='text' name='name' className='bg-white/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400' placeholder='Last Name'/>
                    <input type='email' name='email' className='bg-white/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400' placeholder='Email'/>
                    <input type='phone' name='phone' className='bg-white/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400' placeholder='Phone'/>

                </div>
                <textarea className='bg-white/70 w-full rounded-xl p-8 focus:outline-none focus:ring-2 focus:ring-pink-400' placeholder='Type your Message here...' />
                <button className='bg-pink-700 hover:bg-pink-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>
            </form>
        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2025 © FlashGen - All Right Reserved.</p>
    </div>
  )
}

export default Contact