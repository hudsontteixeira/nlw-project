import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'



export function Button() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toogleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <Popover className='bottom-4 right-4 absolute'>
            <Popover.Panel>HelloWord</Popover.Panel>
            <Popover.Button onClick={toogleWidgetVisibility} className="bg-brand-500 px-3 h-12 rounded-full hover:bg-violet-800 transition-colors text-white flex items-center group">
                <ChatTeardropDots className='h-6 w-6' />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-900 ease-linear'>
                    <span>Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    )
}