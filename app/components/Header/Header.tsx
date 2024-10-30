'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Overlay from '@/app/uikit/overlay'
import Link from 'next/link'

const menuItems = [
    { name: 'მთავარი', path: '/' },
    { name: 'გალერია', path: '/galery' },
    { name: 'ფასი', path: '/pricing' },
    { type: 'logo' },
    { name: 'ჩვენზე', path: '/about' },
    { name: 'სიახლეები', path: '/news' },
    { name: 'კონტაქტები', path: '/contact' },
]

const MenuItem = ({
    name,
    isActive,
    onClick,
}: {
    name: string
    path: string
    isActive: boolean
    onClick?: () => void
}) => (
    <li
        onClick={onClick}
        className={`self-start cursor-pointer hover:text-orange-600 ${isActive ? 'border-b-2 border-orange-300' : ''}`}
    >
        {name}
    </li>
)

export default function Header() {
    const [isBurgerOpen, setBurgerOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const toggleBurger = () => {
        setBurgerOpen((prev) => !prev)
    }

    const handleMenuItemClick = (path: string) => {
        router.push(path)
        setBurgerOpen(false)
    }

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
        <header className="fixed w-screen h-24 lg:h-32 bg-white shadow-inner-orange">
            <div
                className={`h-full flex md:justify-center ${isBurgerOpen ? 'items-start' : 'items-center'}`}
            >
                <nav className={`relative w-64 md:w-full z-20 `}>
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
                    <div
                        className={`burger-menu absolute md:hidden w-full bg-white shadow-lg -translate-x-full opacity-0 
                            transition-transform duration-1000 ${isBurgerOpen ? 'translate-x-0 opacity-100' : ''}`}
                    >
                        <button onClick={toggleBurger}>
                            <Image
                                src="/cancel.png"
                                alt="close"
                                width="50"
                                height="50"
                                className="absolute -right-16 top-4 z-20"
                            />
                        </button>
                        <ul className="absolute w-full top-0 left-0 p-8 flex flex-col gap-12 bg-white shadow-inner-orange">
                            {menuItems
                                .filter((item) => item.name)
                                .map((item) => (
                                    <MenuItem
                                        key={item.path}
                                        name={item.name!}
                                        path={item.path!}
                                        isActive={pathname === item.path}
                                        onClick={() =>
                                            handleMenuItemClick(item.path!)
                                        }
                                    />
                                ))}
                        </ul>
                    </div>
                    <ul className="hidden md:flex md:justify-center md:items-center md:gap-2 lg:gap-10">
                        {menuItems.map((item) => {
                            if (item.type === 'logo') {
                                return (
                                    <li key={item.type} className="ml-20 mr-20">
                                        <Link href="/">
                                            <Image
                                                src="/logo1.png"
                                                alt="logo"
                                                width="250"
                                                height="250"
                                                className="absolute w-24 lg:w-40 -mt-8 lg:-mt-10 -translate-x-1/2"
                                            />
                                        </Link>
                                    </li>
                                )
                            }
                            return (
                                <MenuItem
                                    key={item.path}
                                    name={item.name!}
                                    path={item.path!}
                                    isActive={pathname === item.path}
                                    onClick={() =>
                                        handleMenuItemClick(item.path!)
                                    }
                                />
                            )
                        })}
                    </ul>
                </nav>
                <div className="absolute md:hidden right-10 top-6">
                    <Link href="/">
                        <Image
                            src="/logo1.png"
                            alt="logo"
                            width="150"
                            height="150"
                        />
                    </Link>
                </div>
            </div>
            {isBurgerOpen && <Overlay onClick={toggleBurger} />}
        </header>
    )
}

// path не ведет куда надо в боковом меню или его нет ваще
