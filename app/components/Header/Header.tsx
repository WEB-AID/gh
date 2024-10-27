import Image from "next/image";

export default function Header() {
    return (
        <header className="w-screen fixed h-24 lg:h-32 bg-white z-20 shadow-inner-orange">
            <div className="h-full flex items-center relative md:justify-center">
                <button
                    className="md:hidden p-4 flex mr-auto mt-auto mb-auto"
                >
                    <pre>  ☰</pre>
                </button>
                <ul className="h-full relative hidden md:flex gap-2 lg:gap-10 justify-center items-center">
                    <li className="border-black border-2">Пункт 1</li>
                    <li className="border-black border-2">Пункт 2</li>
                    <li className="border-black border-2">Пункт 3</li>
                    <li className="ml-20 mr-20">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width="250"
                            height="250"
                            className="w-48 lg:w-64 absolute -translate-x-1/2 top-1/3 transform -mt-6"
                        />
                    </li>
                    <li className="border-black border-2">Пункт 4</li>
                    <li className="border-black border-2">Пункт 5</li>
                    <li className="border-black border-2">Пункт 6</li>
                </ul>
                <div className="absolute right-1 top-6 md:hidden w-1/3">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width="350"
                        height="350"
                    />
                </div>
            </div>
        </header >
    )
}