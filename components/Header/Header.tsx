'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Overlay from '@/app/uikit/overlay'
import LanguageSelector from '../LanguageSelector'
import { useTranslation } from 'react-i18next'
import isActivePath from '../helpers/isActivePath'
import { Button } from '@/app/uikit/button'

export const menuItems = [
    { name: 'mainPage', path: '/' },
    { name: 'galery', path: '/galery' },
    { name: 'about', path: '/about', type: 'beforeLogo' },
    { name: 'pricing', path: '/pricing', type: 'afterLogo' },
    { name: 'news', path: '/news' },
    { name: 'contact', path: '/contact' },
]

export default function Header() {
    const [isBurgerOpen, setBurgerOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const { t } = useTranslation()

    const toggleBurger = () => {
        setBurgerOpen((prev) => !prev)
    }

    const handleMenuItemClick = (path: string) => {
        router.push(path)
        setBurgerOpen(false)
    }

    const MenuItem = ({
        name,
        path,
        onClick,
        additionalClass,
    }: {
        name: string
        path: string
        onClick?: () => void
        additionalClass?: string
    }) => (
        <li className={`self-start cursor-pointer ${additionalClass}`}>
            <Link
                href={path}
                onClick={onClick}
                className={`hover:text-orange-600 ${
                    isActivePath(path, pathname)
                        ? 'border-b-2 border-orange-300'
                        : ''
                }`}
            >
                {name}
            </Link>
        </li>
    )

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                isBurgerOpen &&
                !(
                    (event.target as HTMLElement).closest('.burger-menu') ||
                    (event.target as HTMLElement).closest(
                        '.radix-select-content'
                    )
                )
            ) {
                setBurgerOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        if (isBurgerOpen) {
            document.body.style.position = 'fixed'
            document.body.style.overflowY = 'scroll'
        } else {
            document.body.style.position = ''
            document.body.style.overflowY = ''
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isBurgerOpen])

    return (
        <header
            className={`w-full fixed h-24 lg:h-32 bg-white shadow-inner-premium-red z-50 md:mr-10 text-black`}
        >
            <div
                className={`w-full relative h-full flex md:justify-center ${isBurgerOpen ? 'items-start' : 'items-center'}`}
            >
                {/* LOGO */}
                <div className="absolute top-4 lg:top-6 md:mr-5 max-[767px]:right-4">
                    <Link href="/">
                        <Image
                            src="/logo1.png"
                            alt="logo"
                            width="150"
                            height="150"
                            sizes="100vw"
                            className="w-28 lg:w-32"
                        />
                    </Link>
                </div>
                <nav className={`relative w-64 md:w-full z-20 `}>
                    {/* MOBILE BURGER BUTTON */}
                    <button
                        onClick={toggleBurger}
                        className={`ml-7 flex burger-button md:hidden ${isBurgerOpen ? 'hidden' : ''}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 32 32"
                            fill="none"
                            stroke="#ff7b00"
                            strokeWidth="1"
                        >
                            <circle
                                cx="16"
                                cy="16"
                                r="15"
                                stroke="#914307"
                                strokeWidth="2"
                                fill="none"
                            />
                            <line
                                x1="8"
                                y1="10"
                                x2="24"
                                y2="10"
                                stroke="#914307"
                                strokeWidth="1"
                            />
                            <line
                                x1="8"
                                y1="16"
                                x2="24"
                                y2="16"
                                stroke="#914307"
                                strokeWidth="1"
                            />
                            <line
                                x1="8"
                                y1="22"
                                x2="24"
                                y2="22"
                                stroke="#914307"
                                strokeWidth="1"
                            />
                        </svg>
                    </button>
                    {/* MOBILE BURGER MENU */}
                    <div
                        className={`burger-menu absolute w-full h-auto md:hidden  bg-white -translate-x-full opacity-0 
                            transition-transform duration-1000 ${isBurgerOpen ? 'translate-x-0 opacity-100' : ''} flex bg-white shadow-outer-orange`}
                    >
                        <ul className="w-7/12 top-0 left-0 p-8 flex flex-col gap-12">
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.path}
                                    name={t(`headerMenu:${item.name}`)}
                                    path={item.path}
                                    onClick={() => {
                                        handleMenuItemClick(item.path)
                                        setBurgerOpen(false)
                                    }}
                                />
                            ))}
                        </ul>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={toggleBurger}
                            className="absolute -right-14 top-4 z-20"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="3" x2="21" y2="21" />
                                <line x1="21" y1="3" x2="3" y2="21" />
                            </svg>
                        </Button>
                        {/* LANGUAGE SELECTOR */}
                        <div className="absolute bottom-2 right-2 md:hidden md:right-8 font-sans">
                            <LanguageSelector />
                        </div>
                        {/* USER LOGIN */}
                        <Link href="/login" passHref>
                            <Button
                                variant="outline"
                                onClick={toggleBurger}
                                className="absolute top-2 right-2 md:top-2 md:right-12 lg:right-64 bg-orange-800 text-white p-3"
                            >
                                {t('common:login')}
                            </Button>
                        </Link>
                    </div>

                    {/* DESKTOP HEADER MENU */}
                    <ul className="hidden md:flex md:justify-center md:items-center md:gap-2 lg:gap-10">
                        {menuItems.map((item) => (
                            <MenuItem
                                key={item.path}
                                name={t(`headerMenu:${item.name}`)!}
                                path={item.path}
                                additionalClass={`${item.type === 'beforeLogo' ? 'mr-10 lg:mr-24' : item.type === 'afterLogo' ? 'ml-24' : ''}`}
                            />
                        ))}
                    </ul>
                </nav>
                {/* LANGUAGE SELECTOR */}
                <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4 transform max-[767px]:hidden">
                    <LanguageSelector />
                </div>
                {/* USER LOGIN */}
                <Link href="/login" passHref>
                    <Button
                        variant="outline"
                        className="absolute h-6 top-2 lg:top-4 right-2 max-[767px]:hidden lg:right-8 lg:right-64 bg-orange-800 text-white"
                    >
                        {t('common:login')}
                    </Button>
                </Link>
            </div>
            {isBurgerOpen && <Overlay onClick={toggleBurger} />}
        </header>
    )
}
