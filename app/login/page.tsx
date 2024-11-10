import Image from 'next/image'

export default function Login() {
    return (
        <div>
            <div className="flex items-center justify-center h-96 mx-auto">
                <span className="text-2xl ml-2">PAGE IN PROCESS!</span>
                <Image
                    src="/spin.svg"
                    alt="Plant logo"
                    width={200}
                    height={200}
                    className="animate-spin-pause"
                />
            </div>
        </div>
    )
}
