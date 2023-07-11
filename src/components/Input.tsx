import React from 'react'

interface InputProps {
    label: string
    type: string
    placeholder: string
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label> {props.label} </label>
            <input
            className="py-2 pl-2 focus:outline-primary bg-gray-200"
             placeholder={props.placeholder} 
             type={props.type} />
        </div>
    )
}
