import React from 'react'
import Skillslevel from './Skillslevel.jsx';
const Skills = () => {
  const skillsItems = ["JavaScript", "React", "Node.js", "Tailwind CSS", "TypeScript", "Git & GitHub", "REST APIs", "SQL / NoSQL"];
  return (
    <>
    <section id='skills' className='bg-white text-slate-700 dark:bg-slate-700 dark:text-white'>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
       <div className='relative font-bold  md:order-2'> 
       <div className='text-center text-6xl xl:text-8xl font-bold dark:text-white text-black/5'>Skills
       </div> 
        <h1 className='absolute top-1/2 left-1/2 text-3xl'>Skills </h1>
      
       </div>
       <div className='text-slate-500 md:order-1'>
        <Skillslevel skillName="HTML" percentage="90%" />
        <Skillslevel skillName="CSS" percentage="90%" />
        <Skillslevel skillName="BOOTSTRAP" percentage="90%" />
        <Skillslevel skillName="WORDPRESS" percentage="80%" />
        <Skillslevel skillName="TAILWIND" percentage="70%" />
        <Skillslevel skillName="JAVASCRIPT" percentage="70%" />
        <Skillslevel skillName="REACT" percentage="60%" />
        </div>
      </div>
    </div>
    </section>

     </>
  )
}

export default Skills