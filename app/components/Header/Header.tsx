'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Overlay from '@/app/uikit/overlay'

const menuItems = [
    { name: 'მთავარი', path: '/' },
    { name: 'გალერია', path: '/galery' },
    { name: 'ჩვენზე', path: '/about', type: 'beforeLogo' },
    { name: 'ფასი', path: '/pricing', type: 'afterLogo' },
    { name: 'სიახლეები', path: '/news' },
    { name: 'კონტაქტები', path: '/contact' },
]

export default function Header() {
    const [isBurgerOpen, setBurgerOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const handleMenuItemClick = (path: string) => {
        router.push(path)
        setBurgerOpen(false)
    }

    const toggleBurger = () => {
        setBurgerOpen((prev) => !prev)
    }

    const MenuItem = ({
        name,
        isActive,
        onClick,
        additionalClass,
    }: {
        name: string
        isActive: boolean
        onClick?: () => void
        additionalClass?: string
    }) => (
        <li
            onClick={onClick}
            className={`self-start cursor-pointer hover:text-orange-600 ${isActive ? 'border-b-2 border-orange-300' : ''} ${additionalClass}`}
        >
            {name}
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
            className={`fixed w-screen h-24 lg:h-32 bg-white shadow-inner-orange'}`}
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
                            width="0"
                            height="0"
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
                        className={`burger-menu absolute w-full md:hidden bg-white shadow-lg -translate-x-full opacity-0 
                            transition-transform duration-1000 ${isBurgerOpen ? 'translate-x-0 opacity-100' : ''}`}
                    >
                        <ul className="absolute w-full top-0 left-0 p-8 flex flex-col gap-12 bg-white shadow-inner-orange">
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.path}
                                    name={item.name!}
                                    isActive={pathname === item.path}
                                    onClick={() =>
                                        handleMenuItemClick(item.path!)
                                    }
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
                    </div>
                    {/* DESKTOP HEADER MENU */}
                    <ul className="hidden md:flex md:justify-center md:items-center md:gap-2 lg:gap-10">
                        {menuItems.map((item) => {
                            return (
                                <MenuItem
                                    key={item.path}
                                    name={item.name!}
                                    isActive={pathname === item.path}
                                    onClick={() =>
                                        handleMenuItemClick(item.path!)
                                    }
                                    additionalClass={`${item.type === 'beforeLogo' ? 'mr-10' : item.type === 'afterLogo' ? 'ml-24' : ''}`}
                                />
                            )
                        })}
                    </ul>
                </nav>
            </div>
            {isBurgerOpen && <Overlay onClick={toggleBurger} />}
        </header>
    )
}
