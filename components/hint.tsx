"use client"

import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left",
    align?: "start" | "center" | "end"
    sideOffset?: number;
    alignOffset?: number
}

export const Hint = ({ label, children, side, align, sideOffset, alignOffset }: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset} className='bg-black text-white border border-white/5 '>
                    <p className='font-medium text-xs capitalize'>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
