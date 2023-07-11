import React from 'react'

interface TabsProps {
    tabs: string[]
    defaultActive: number
}

export default function Tabs(props: TabsProps) {
    const tabStyle = "p-2 w-full bg-white cursor-pointer text-center"
    const activeTab = props.defaultActive


    return (
        <div className='flex gap-1 w-full p-1 bg-gray-300'>
            {
                props.tabs.map((t, i) => <>
                    <div className={i === activeTab ? tabStyle : "bg-none p-2 w-full text-center hover:bg-gray-200 cursor-pointer"}>{t}</div>
                </>)
            }
        </div>
    )
}
