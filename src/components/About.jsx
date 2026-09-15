import React from 'react'

const About = () => {
  return (
    <section id='about' className='bg-white dark:bg-slate-700 dark:text-white'>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
       <div className='relative font-bold'> 
       <div className='text-center text-6xl xl:text-8xl font-bold dark:text-white text-black/5'>ABOUT
       </div> 
        <h1 className='absolute top-1/2 left-1/2 text-3xl'>About Me </h1>
      
       </div>
       <div className='text-slate-500 '>
        <p> lorem ipsum lorem ipsum lorem psum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p> <br />
        <p>lorem ipsum lorem ipsum lorem psum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
        
        <a href='#' className='mx-5 bg-blue-500 text-white inline-block cursor-pointer rounded-lg px-4 py-2 mt-4'>
       Download Resume </a>
       <a href='mailto:abc@gmail.com' className='bg-transparent border-2 border-blue-600 text-blue-600 font-semibold inline-block cursor-pointer rounded-lg px-4 py-2 mt-4'>
       Contact </a>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About