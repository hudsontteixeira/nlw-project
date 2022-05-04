import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { CloseButton } from '../closeButton'
import bugImageUrl from '../../assets/images/bug.svg'
import ideaImageUrl from '../../assets/images/idea.svg'
import thoughtImageUrl from '../../assets/images/thought.svg'
import { FeedbackContentStep } from './steps/feedbackContentStep'
import { FeedbackTypeStep } from './steps/feedbackTypeStep'
import { FeedbackSuccessStep } from './steps/feedbackSuccessStep'

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <>
            <div className='bg-zinc-900 relative p-4 rounded-2xl mb-4 items-center flex flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
                {feedbackSent ?
                    (<FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback} />)
                    :
                    (
                        <>
                            {!feedbackType ?
                                (<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />)
                                :
                                (<FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequest={handleRestartFeedback} onFeedbackSent={() => setFeedbackSent(true)} />)
                            }
                        </>
                    )
                }
                <footer className='text-xs text-neutral-400'>
                    Feito com amor por <a className='underline underline-offset-2' href='#'>hudson</a>
                </footer>
            </div>
        </>
    )
}