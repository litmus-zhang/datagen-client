import React from 'react'

interface InputProps {
    label: string
    type: string
    placeholder: string
    disabled?: boolean
    errorMsg?: string
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col gap-1.5 max-w-full">
            <label> {props.label} </label>
            <input
                className="py-2 pl-2 
            rounded focus:outline-primary 
            focus:bg-transparent
            hover:outline 
            hover:outline-4
            hover:outline-primary/30 bg-gray-200"
                placeholder={props.placeholder}
                disabled={props.disabled}
                type={props.type} />
            {props.errorMsg &&
                <span className='text-xs p-2 w-full bg-red-500 text-white -my-1'>{props.errorMsg}</span>}
        </div>
    )
}
