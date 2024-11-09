import Image from 'next/image'

export default function Login() {
    return (
        <div>
            <div className="flex items-center justify-center h-96">
                <span className="text-2xl mx-auto">PAGE IN PROCESS!</span>
                <Image
                    src="/spin.svg"
                    alt="Plant logo"
                    width={300}
                    height={300}
                    className="animate-spin-pause mx-auto"
                />
            </div>
        </div>
    )
}
