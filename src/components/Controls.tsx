import React from 'react'
import { cn } from '../../utils/class'

interface IControls {
    variant: "solid" | "ghost"
    content: React.ReactNode
    disabled? : boolean
}

export default function Controls(props: IControls) {
    const className = props.variant === "solid" ? cn("bg-primary text-white rounded-full w-fit outline hover:outline-4 p-2 text-xs cursor-pointer hover:outline-primary/50" , props.disabled ? "bg-gray-1/20 text-gray-1": "") : cn("bg-transparent border  p-2 text-black rounded-full w-fit text-xs hover:outline hover:outline-gray-1/50 cursor-pointer", props.disabled ? "text-gray-1/50 border-gray-1/50": "")
    return (
        <div aria-disabled={props.disabled} className={className} >Controls</div>
    )
}
