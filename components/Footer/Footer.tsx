'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export const footerMenuItems = [
    { name: 'mainPage', path: '/' },
    { name: 'galery', path: '/galery' },
    { name: 'pricing', path: '/pricing' },
    { name: 'news', path: '/news' },
    { name: 'contact', path: '/contact' },
    { name: 'about', path: '/about' },
    { name: 'learning', path: '/learning' },
    { name: 'vacancies', path: '/vacancies' },
    { name: 'cooperation', path: '/cooperation' },
]

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="h-min p-4 text-white bg-yellow-950">
            {/* MENU AND LOGO\ISO */}
            <div className="w-11/12 lg:w-4/5 mt-4 mx-auto flex justify-center items-center flex-col md:flex-row order-1 md:order-2">
                <ul className="mx-auto grid grid-rows-5 grid-flow-col gap-y-8 gap-x-2 md:grid-rows-3 max-[767px]:grid-cols-2 md:order-2 text-left">
                    {footerMenuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className="before:content-['·'] before:mr-1"
                            >
                                <span className="hover:underline">
                                    {t(`footerMenu:${item.name}`)}
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
                <div className="mx-auto flex order-2 md:order-3 max-[767px]:mt-8">
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
            <div className="mt-8 text-center text-gray-300 text-sm">
                {t('common:footerFirstText')}
            </div>
            <div className="mt-2 text-center text-gray-300 text-sm">
                {t('common:footerSecondText')}
            </div>
            {/* COPYRIGHT */}
            <div className="mt-8 text-center text-gray-400">
                Copyright © 2024 Georgian House LLC
            </div>
        </footer>
    )
}
