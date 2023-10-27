'use client'

import * as TooltipUI from '@radix-ui/react-tooltip';
import { ReactNode, useState } from 'react';

interface TooltipProps {
    children: ReactNode
    title?: string
    description?: string
    text: string
}

export function DefaultTooltip({ children, text, title, description }: TooltipProps) {
    const [inFocus, setInFocus] = useState(false)

    return (
        <TooltipUI.Provider delayDuration={100}>
            <TooltipUI.Root open={inFocus}>
                <TooltipUI.Trigger asChild onClick={() => setInFocus(true)} onMouseEnter={() => setInFocus(true)} onMouseLeave={() => setInFocus(false)}>
                    {children}
                </TooltipUI.Trigger>

                <TooltipUI.Portal>
                    <TooltipUI.Content className="max-w-xs sm:max-w-md bg-brand-gray-800 p-3 rounded-md shadow-lg flex flex-col gap-1" sideOffset={5}>
                        <header>
                            <h2 className="text-xl text-brand-white-200" >{title}</h2>
                            <span className='text-sm text-brand-white-500' >{description}</span>
                        </header>

                        <main>
                            <p className='text-brand-white-300' >{text}</p>
                        </main>

                        <TooltipUI.Arrow className="text-brand-gray-800" />
                    </TooltipUI.Content>
                </TooltipUI.Portal>
            </TooltipUI.Root>
        </TooltipUI.Provider>
    )
}