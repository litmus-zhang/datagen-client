import React from 'react'

interface IAvatar {
    name: string
    src: string
    size?: "sm" | "md" | "xl" | "2xl"
}
export default function Avatar(props: IAvatar) {
    const NameFormater = (name: string) => {
        const nameArray = name.split("")
        const final = nameArray[0].slice(0, 1) + nameArray[1].slice(0, 1)
        return final.toLocaleUpperCase()
    }

    return (
        <div className='rounded-full  w-10 overflow-hidden h-10 bg-gray-1/20'>
             <span className=' text-gray-1 w-full h-full font-bold flex -z-10 items-center justify-center text-center'>
                {NameFormater(props.name)}
            </span>
            <img
                className='object-cover w-full h-full z-20 -my-10'
                src={props.src} alt={props.name} />


        </div>
    )
}
