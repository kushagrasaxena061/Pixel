import React from 'react'
import Image from "next/image"

export const EmptyFavorites = () => {
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            {/* //change upper emoji */}
            <Image src="/logo.jpeg" alt="empty favorites Logo" height={140} width={140} />
            <h2 className='text-2xl font-semibold mt-6'>No Favorites found</h2>
            <p className='text-muted-foreground text-sm mt-2'>Try searching for something else</p>
        </div>
    )
}
