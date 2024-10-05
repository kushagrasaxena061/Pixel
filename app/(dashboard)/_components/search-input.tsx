"use client"

import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from "usehooks-ts"
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { stringifyUrl } from 'query-string';  // Use query-string, not qs


export const SearchInput = () => {
    const router = useRouter()
    const [value, setValue] = useState("")

    const debouncedValue = useDebounce(value, 500)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    // useEffect(() => {
    //     const url = qs.stringifyUrl({
    //         url: "/",
    //         query: {
    //             search: debouncedValue,
    //         },
    //     }, { skipEmptyString: true, skipNull: true });

    //     router.push(url)
    // }, [debouncedValue, router])


    useEffect(() => {
        const url = stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue,
            },
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }, [debouncedValue, router]);
    return (
        <div className='w-full relative'>
            <Search className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
            <Input onChange={handleChange} value={value} placeholder='Search boards' className='w-full max-w-[516px] pl-9' />
        </div>
    )
}
