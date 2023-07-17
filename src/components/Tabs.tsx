import React, {ReactNode, useState} from 'react'

interface TabsProps {
    tabs: ReactNode[]
    defaultActive: number
    tabContent?: ReactNode[]
}

export default function Tabs(props: TabsProps) {
    const tabStyle = "p-2 w-full bg-white cursor-pointer text-center"
    const [active, setActive] = useState(props.defaultActive)

    const toggleActive = (tab : number)=> {
console.log("Clicked")
setActive(tab)

    }

    return (
        <div className="flex flex-col p-3 gap-2">
        <div className='flex gap-1 w-full p-1 bg-gray-300'>
            {
                props.tabs.map((t, i) => <>
                    <div onClick={() => toggleActive(i)} className={i === active ? tabStyle : "bg-none p-2 w-full text-center hover:bg-gray-200 cursor-pointer"}>{t}</div>
                </>)
            }
            
        </div>
        <div className="">
             {
                props.tabContent!.map((t, i) => <>
                    <div className={i === active ? "flex flex-col gap-2" : "hidden"}>{t}</div>
                </>)
            }

        </div>
        </div>
       
    )
}
