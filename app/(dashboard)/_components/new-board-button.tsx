"use client"

import React from 'react'
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
    const { mutate, pending } = useApiMutation(api.board.create);

    const router = useRouter()

    const onClick = () => {
        mutate({
            orgId, title: "Untitled"
        }).then((id) => {
            toast.success("Board created successfully")
            router.push(`/board/${id}`)
        }).catch(() => {
            toast.success("Failed to create Board")

        })
    }

    return (
        <button disabled={disabled || pending} onClick={onClick} className={cn("col-span-1 aspect-[100/127] bg-[#3B1E55] rounded-lg hover:bg-[#9B7EBD] flex flex-col items-center justify-center py-6", (disabled || pending) && "opacity-75 hover:bg-[#9B7EBD] cursor-not-allowed")}>
            <div />
            <Plus className='h-12 w-12 text-white stroke-1' />
            <p className='text-xs text-white font-light'>New Board</p>
        </button>
    )
}
