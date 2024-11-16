"use client"

import React from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useOrganization } from '@clerk/nextjs'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const EmptyBoards = () => {
    const { organization } = useOrganization()
    const { mutate, pending } = useApiMutation(api.board.create);

    const router = useRouter()

    if (!organization) {
        return;
    }

    const onClick = () => {
        mutate({
            orgId: organization.id,
            title: "Untitled"
        }).then((id) => {
            toast.success("Board created")
            router.push(`/board/${id}`)
        }).catch(() => toast.error("Failed to create board in empty-boards.tsx"))
    }

    return (
        <div className='h-full flex flex-col items-center justify-center'>
            {/* //change upper emoji */}
            <Image src="/logo.jpeg" alt="empty Boards Logo" height={140} width={140} />
            <h2 className='text-2xl font-semibold mt-6'>Create your first board</h2>
            <p className='text-muted-foreground text-sm mt-2'>Start by creating a board for your organisation</p>
            <div className='mt-6'>
                <Button disabled={pending} onClick={onClick} variant="default" size="lg">
                    Create board
                </Button>
            </div>
        </div>
    )
}
