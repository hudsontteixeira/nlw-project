import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div className="h-6 w-6 items-center flex justify-center overflow-hidden animate-spin">
            <CircleNotch weight="bold" className='h-4 w-4' />
        </div>
    )
}