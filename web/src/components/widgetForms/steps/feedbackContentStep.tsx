import { AppWindow, ArrowArcLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import api from "../../../libs/api";
import { CloseButton } from "../../closeButton";
import { ScreenshotButton } from "../screenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequest: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequest, onFeedbackSent }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    console.log(screenshot)
    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()
        await screenshot
        try {
            await api.post('/feedbacks', {
                type: feedbackType,
                comment,
                screenshot: `${screenshot}`,
            })
            onFeedbackSent()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <header>
                <button
                    type='button'
                    className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequest}>
                    <ArrowArcLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className='text-xl leading-6 flex items-center gap-2'>
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form className='my-4 w-full' onSubmit={handleSubmitFeedback}>
                <textarea
                    className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1-500 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Descreva o que está acontecendo.."
                    onChange={(event) => { setComment(event.target.value) }}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        onScreenshotTook={setScreenshot}
                        screenshot={screenshot}
                    />
                    <button
                        disabled={comment.length <= 0}
                        type='submit'
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500">
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
}