'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Overlay from '@/app/uikit/overlay'
import LanguageSelector from '../LanguageSelector'
import { useTranslation } from 'react-i18next'

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

    const handleMenuItemClick = (path: string) => {
        router.push(path)
        setBurgerOpen(false)
    }

    const toggleBurger = () => {
        setBurgerOpen((prev) => !prev)
    }

    const isActivePath = (path: string) => {
        const localePrefixes = ['/ru', '/en']
        const normalizePath = (p: string) => p.replace(/\/$/, '')

        if (path === '/') {
            return (
                pathname === '/' ||
                localePrefixes.some((prefix) => pathname === prefix)
            )
        }

        if (!localePrefixes.some((prefix) => pathname.startsWith(prefix))) {
            return pathname === path
        }

        return localePrefixes.some((prefix) =>
            normalizePath(pathname).startsWith(
                normalizePath(`${prefix}${path}`)
            )
        )
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
        <li
            onClick={onClick}
            className={`self-start cursor-pointer hover:text-orange-600 ${
                isActivePath(path) ? 'border-b-2 border-orange-300' : ''
            } ${additionalClass}`}
        >
            <Link href={path}>{name}</Link>
        </li>
    )

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                isBurgerOpen &&
                !(event.target as HTMLElement).closest('.burger-menu')
            ) {
                setBurgerOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        if (isBurgerOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isBurgerOpen])

    return (
        <header
            className={`fixed w-screen h-24 lg:h-32 bg-white shadow-inner-orange z-50 md:mr-10 text-black`}
        >
            <div
                className={`relative h-full flex md:justify-center ${isBurgerOpen ? 'items-start' : 'items-center'}`}
            >
                {/* LOGO */}
                <div className="absolute top-4 md:mr-5 max-[767px]:right-4">
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
                        className={`burger-button p-4 mr-auto mt-auto mb-auto md:hidden ${isBurgerOpen ? 'hidden' : ''}`}
                    >
                        <Image
                            src="/burger.png"
                            alt="burger"
                            width="50"
                            height="50"
                        />
                    </button>
                    {/* MOBILE BURGER MENU */}
                    <div
                        className={`burger-menu absolute w-full h-auto md:hidden  bg-white -translate-x-full opacity-0 
                            transition-transform duration-1000 ${isBurgerOpen ? 'translate-x-0 opacity-100' : ''} flex bg-white shadow-inner-orange`}
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
                        <button onClick={toggleBurger}>
                            <Image
                                src="/cancel.png"
                                alt="close"
                                width="50"
                                height="50"
                                className="absolute -right-16 top-4 z-20"
                            />
                        </button>
                        {/* LANGUAGE SELECTOR */}
                        <div className="absolute bottom-2 right-2 md:hidden md:right-8">
                            <LanguageSelector />
                        </div>
                        {/* USER LOGIN */}
                        <button
                            className={`absolute top-2 right-2 md:top-2 md:right-12 lg:right-64 flex justify-center items-center h-6 w-24 bg-orange-950 text-white`}
                            onClick={toggleBurger}
                        >
                            <Link href="/login">შესვლა</Link>
                        </button>
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
                <div className="absolute top-4 right-4 md:top-1/2 md:right-8 transform max-[767px]:hidden">
                    <LanguageSelector />
                </div>
                {/* USER LOGIN */}
                <button
                    className={`absolute top-4 right-4 md:top-2 md:right-12 lg:right-64 flex items-center justify-center h-6 w-24 bg-orange-950 text-white max-[767px]:hidden`}
                >
                    <Link href="/login">{t('common:login')}</Link>
                </button>
            </div>
            {isBurgerOpen && <Overlay onClick={toggleBurger} />}
        </header>
    )
}
