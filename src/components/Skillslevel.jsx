import React from 'react'

const Skillslevel = ({skillName,percentage}) => {
  return (
    <>
    <div className='mt-4 space-y-2'>
    <div className='flex justify-between items-center'>
     <p className='font-bold text-xl'> {skillName}</p>
     <p className='font-sm'>{percentage} </p>
    </div>
    <div className='w-full bg-slate-200 h-2 rounded-full'>
    <div className='bg-blue-500 h-2 rounded-full'>


    </div>

    </div>
    </div>
    </>
  )
}

export default Skillslevel