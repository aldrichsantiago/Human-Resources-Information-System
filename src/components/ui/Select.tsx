import React from 'react'
import ReactSelect from 'react-select'

export default function Select({ label, label_id, placeholder, className, options }:any) {
  return (
    <div>
        <label htmlFor={label_id} className='text-sm'>{label}</label>
        <ReactSelect 
        name={label_id}
        id={label_id}
        placeholder={placeholder} 
        className={`my-2 w-[300px] ${className}`} 
        options={options}/>
    </div>
  )
}

export function MultiSelect({ label, label_id, placeholder, className, options }:any) {
    return (
        <>
            <label htmlFor={label_id} className='text-sm'>{label}</label>
            <ReactSelect 
            closeMenuOnSelect={false}
            isMulti
            name={label_id}
            id={label_id}
            placeholder={placeholder} 
            className={`my-2 w-[300px] ${className}`} 
            options={options}/>
        </>
    )
  }
  