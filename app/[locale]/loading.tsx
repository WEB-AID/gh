import Image from 'next/image'

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image
                src="/spin.svg"
                alt="Plant logo"
                width={300}
                height={300}
                className="animate-spin-pause mx-auto"
            />
        </div>
    )
}
