'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Overlay from '@/app/uikit/overlay'

const menuItems = [
    { name: 'მთავარი', path: '/' },
    { name: 'გალერია', path: '/galery' },
    { name: 'ფასი', path: '/pricing' },
    { type: 'logo' },
    { name: 'ჩვენზე', path: '/about' },
    { name: 'სიახლეები', path: '/news' },
    { name: 'კონტაქტები', path: '/contact' },
]

export default function Header() {
    const [isBurgerOpen, setBurgerOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

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

    const toggleBurger = () => {
        setBurgerOpen((prev) => !prev)
    }

    const handleMenuItemClick = (path: string) => {
        router.push(path)
        setBurgerOpen(false)
    }

    return (
        <header
            className={`fixed w-screen h-24 lg:h-32 bg-white shadow-inner-orange flex md:justify-center ${isBurgerOpen ? 'items-start' : 'items-center'}`}
        >
            {/* MOBILE LOGO */}
            <div className="absolute md:hidden right-8 top-6">
                <Link href="/">
                    <Image
                        src="/logo1.png"
                        alt="logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-28"
                    />
                </Link>
            </div>
            <nav className={`relative w-64 md:w-full z-20 `}>
                {/* MOBILE BURGER BUTTON */}
                <button
                    onClick={toggleBurger}
                    className={`burger-button md:hidden p-4 mr-auto mt-auto mb-auto ${isBurgerOpen ? 'hidden' : ''}`}
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
                    className={`burger-menu absolute md:hidden w-full bg-white shadow-lg -translate-x-full opacity-0 
                            transition-transform duration-1000 ${isBurgerOpen ? 'translate-x-0 opacity-100' : ''}`}
                >
                    <ul className="absolute w-full top-0 left-0 p-8 flex flex-col gap-12 bg-white shadow-inner-orange">
                        {menuItems
                            .filter((item) => item.name)
                            .map((item) => (
                                <li
                                    key={item.path}
                                    onClick={() =>
                                        handleMenuItemClick(item.path!)
                                    }
                                    className={`self-start cursor-pointer hover:text-orange-600 ${
                                        pathname === item.path
                                            ? 'border-b-2 border-orange-300'
                                            : ''
                                    }`}
                                >
                                    {item.name}
                                </li>
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
                </div>
                {/* DESKTOP MENU */}
                <ul className="hidden md:flex md:justify-center md:items-center md:gap-2 lg:gap-10">
                    {menuItems.map((item) => {
                        if (item.type === 'logo') {
                            return (
                                <li key={item.type} className="ml-20 mr-20">
                                    <Link href="/">
                                        <Image
                                            src="/logo1.png"
                                            alt="logo"
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            className="absolute w-24 lg:w-40 -mt-8 lg:-mt-10 -translate-x-1/2"
                                        />
                                    </Link>
                                </li>
                            )
                        }
                        return (
                            <li
                                key={item.path}
                                onClick={() => handleMenuItemClick(item.path!)}
                                className={`self-start cursor-pointer hover:text-orange-600 ${
                                    pathname === item.path
                                        ? 'border-b-2 border-orange-300'
                                        : ''
                                }`}
                            >
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            </nav>
            {/* BLUR WHEN BURGER OPENED */}
            {isBurgerOpen && <Overlay onClick={toggleBurger} />}
        </header>
    )
}
