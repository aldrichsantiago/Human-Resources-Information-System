import React from 'react'

export default function Input({ label, label_id, type, icon, placeholder  }: any) {
  return (
    <div>
        <label htmlFor={label_id} className="block text-sm font-medium leading-6 text-gray-900">
             {label}
        </label>
        <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">{icon}</span>
            </div>
            <input
            id={label_id}
            name={label_id}
            type={type}
            placeholder={placeholder}
            className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>
    </div>
  )
}

export function Button({ title, onClick  }: any) {
    return (
        <button
        onClick={onClick}
         type="button"
         className="w-[140px] h-[50px] bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium">
            {title}
        </button>

    )
  }
  