import React from 'react'

export default function Card({ title, data, description, icon, unit }: { title?:string, data?:Number, description?:string, icon?:any, unit?:string }) {
  return (
    <span className='w-72 flex flex-col py-4 px-4 rounded-lg shadow-sm border-2 border-gray-200 bg-white'>
        <span className='w-full flex flex-wrap justify-between'> 
            <p>{title}</p>
            <span>
                {icon}
            </span>
        </span>
        <span className='w-full mt-2'>
            <h1 className="text-2xl  font-bold">{unit} {Number(data).toString()} </h1>
            <p className='text-xs text-stone-600'>{description}</p>
        </span> 
    </span>
  )
}
