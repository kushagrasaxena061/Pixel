import Image from "next/image"

export const Loading = () => {
    return (
        <main className="flex flex-col gap-y-4 w-full h-full items-center justify-center ">
            <Image
                src={"/logo.jpeg"}
                alt="Logo"
                width={120}
                height={120}
                className="animate-pulse duration-700"
            />
        </main>
    )
}