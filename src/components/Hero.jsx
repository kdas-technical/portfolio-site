import React from 'react'
import { portfolioData } from '../data/PortfolioData'
import personImg from "../../src/assets/images/img1.jpg"
const Hero = () => {
  return (
    <section id="home" className="bg-slate-50 px-5 py-20">
    <div className="mx-auto grid grid-cols-1 max-w-lg items-center gap-10">
    <div className='text-center'>
    <img src={personImg} alt='' className='mb-10 md:w-[200px] md:h-[200px] h-[180px] w-[50%] rounded-full  mx-auto' />
          <p className="mb-3 font-semibold">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold md:text-3xl">
            {portfolioData.Name}
          </h1>

          <h2 className="mt-4 text-2xl">
            {portfolioData.Technical}
          </h2>

          <p className="mt-5 max-w-xl text-gray-600">
            Create responsive and modern websites using React.Tailwind css and Javascript.
          </p>
      </div>
    </div>
    </section>
  )
}

export default Hero