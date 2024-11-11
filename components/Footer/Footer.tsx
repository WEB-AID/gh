import Link from 'next/link'
import Image from 'next/image'

export const footerMenuItems = [
    { name: 'მთავარი', path: '/' },
    { name: 'გალერია', path: '/galery' },
    { name: 'ფასი', path: '/pricing' },
    { name: 'სიახლეები', path: '/news' },
    { name: 'კონტაქტები', path: '/contact' },
    { name: 'ჩვენზე', path: '/about' },
    { name: 'სწავლება', path: '/learning' },
    { name: 'ვაკანსიები', path: '/vacancies' },
    { name: 'თანამშრომლობა', path: '/cooperation' },
]

export default function Footer() {
    return (
        <footer className="h-min text-white bg-yellow-950 p-4">
            {/* MENU AND LOGO\ISO */}
            <div className="w-11/12 lg:w-4/5 mt-4 mx-auto flex justify-center items-center flex-col order-1 md:flex-row md:order-2">
                <ul className="h-full mx-auto grid grid-rows-5 grid-flow-col gap-y-8 md:grid-rows-3 max-[767px]:grid-cols-2 md:gap-x-2 md:order-2 text-left">
                    {footerMenuItems.map((item) => (
                        <li key={item.name} className="flex items-center">
                            <Link
                                href={item.path}
                                className="before:content-['·'] before:mr-1"
                            >
                                <span className="hover:underline">
                                    {item.name}
                                </span>
                            </Link>
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
                        stroke="gray"
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
                        stroke="gray"
                        strokeWidth="2"
                    />
                </svg>
                <div className="mx-auto mt-4 flex order-2 md:order-3">
                    <Image
                        src="/logo2.png"
                        alt="logo2"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-16 mx-auto md:hidden"
                    />
                    <Image
                        src="/ISO.png"
                        alt="ISO"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-52 lg:w-64 max-[767px]:ml-12"
                    />
                </div>
            </div>
            {/* TEXT FIELD */}
            <div className="text-center mt-8 text-gray-300 text-sm">
                ჩვენთვის უმნიშვნელოვანესია ჩვენი პროდუქციის ხარისხი და
                უსაფრთხოება. საიტზე მოცემული ინფორმაცია განკუთვნილია საყოველთაო
                გაცნობისთვის.
            </div>
            <div className="text-center mt-2 text-gray-300 text-sm">
                გთხოვთ, დაგვიკავშირდეთ დამატებითი ინფორმაციისთვის და კომერციული
                შეთავაზებების მისაღებად.
            </div>
            {/* COPYRIGHT */}
            <div className="text-center mt-8 text-gray-400">
                Copyright © 2024 Georgian House LLC
            </div>
        </footer>
    )
}
