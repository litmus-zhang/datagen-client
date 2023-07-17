import React from 'react'
import { cn } from '../../utils/class'

interface ILink {
    content: React.ReactNode
    disabled?: boolean
}

export default function Link(props: ILink) {
    const className = cn("fill-primary text-primary text-sm w-fit p-1 cursor-pointer hover:bg-primary hover:text-white", props.disabled ? "text-gray-1/30 cursor-not-allowed": "")
    return (
        <div aria-disabled={props.disabled} className={className}>{props.content}</div>
    )
}
