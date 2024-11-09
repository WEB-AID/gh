import Image from 'next/image'

export const footerMenuItems = [
    { name: '· მთავარი', path: '/' },
    { name: '· გალერია', path: '/galery' },
    { name: '· ჩვენზე', path: '/about' },
    { name: '· სიახლეები', path: '/news' },
    { name: '· კონტაქტები', path: '/contact' },

    { name: '· თანამშრომლობა', path: '/cooperation' },
    { name: '· სწავლება', path: '/learning' },
    { name: '· ვაკანსიები', path: '/vacancies' },
    { name: '· ფასი', path: '/pricing' },
]

export default function Footer() {
    return (
        <footer className="h-96 text-white bg-yellow-950 p-8">
            {/* FOOTER MENU + LOGO\ISO */}
            <div className="w-11/12 lg:w-4/5 h-48 md:h-36 lg:h-48 mx-auto flex justify-center items-center flex-col md:flex-row order-1 md:order-2">
                <ul className="h-full mx-auto grid grid-rows-3 grid-flow-col gap-x-2 md:order-2">
                    {footerMenuItems.map((item) => (
                        <li
                            key={item.name}
                            className="flex justify-start items-center"
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
                <svg
                    width="1"
                    height="200px"
                    viewBox="0 0 1 190"
                    xmlns="http://www.w3.org/2000/svg"
                    className="order-3 max-[1023px]:hidden"
                >
                    <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="190"
                        stroke="white"
                        strokeWidth="2"
                    />
                </svg>
                <div className="mx-auto flex order-3 md:order-1 md:mt-4 max-[767px]:hidden">
                    <Image
                        src="/logo2.png"
                        alt="logo2"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-20 lg:w-24 mx-auto"
                    />
                </div>
                <svg
                    width="1"
                    height="200px"
                    viewBox="0 0 1 190"
                    xmlns="http://www.w3.org/2000/svg"
                    className="order-1 max-[1023px]:hidden"
                >
                    <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="190"
                        stroke="white"
                        strokeWidth="2"
                    />
                </svg>
                <div className="mx-auto mt-4 flex order-2 md:order-3">
                    <Image
                        src="/ISO.png"
                        alt="ISO"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-52 lg:w-64"
                    />
                    <Image
                        src="/logo2.png"
                        alt="logo2"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-16 mx-auto md:hidden max-[767px]:ml-24"
                    />
                </div>
            </div>
            {/* TEXT FIELD */}
            <div className="text-center mt-12">
                111111111111111111111111111111111111111
            </div>
            {/* COPYRIGHT */}
            <div className="text-center">COPYRIGHT 2024</div>
        </footer>
    )
}
