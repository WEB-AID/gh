"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Overlay = ({ onClick }: { onClick: () => void }) => {
    return (
        <div
            className="fixed inset-0 bg-white opacity-90 z-10"
            onClick={onClick}
        />
    );
};

export default function Header() {
    const [isBurgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen((prev) => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isBurgerOpen && !(event.target as HTMLElement).closest(".burger-menu")) {
                setBurgerOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        if (isBurgerOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isBurgerOpen]);

    return (
        <header className="w-screen fixed h-24 lg:h-32 bg-white shadow-inner-orange">
            <div className={`h-full flex md:justify-center ${isBurgerOpen ? 'items-start' : 'items-center'}`}>
                <nav className="relative">
                    <button
                        onClick={toggleBurger} className={`burger-button md:hidden p-4 mr-auto mt-auto mb-auto flex ${isBurgerOpen ? 'hidden' : ''}`}
                    >
                        <pre>  ☰</pre>
                    </button>
                    {isBurgerOpen && (
                        <div className="burger-menu w-60vh absolute top-0 left-0 bg-white shadow-lg">
                            <button onClick={toggleBurger} >
                                <Image
                                    src="/cancel.png"
                                    alt="logo"
                                    width="50"
                                    height="50"
                                    className="absolute -right-16 top-4 z-20"
                                />
                            </button>
                            <ul className="w-60vh absolute left-0 top-0 flex flex-col gap-12 p-8 bg-white shadow-inner-orange z-20">
                                <li>მთავარი</li>
                                <li>გალერია</li>
                                <li>ფასი</li>
                                <li>ჩვენზე</li>
                                <li>სიახლეები</li>
                                <li>კონტაქტები</li>
                            </ul>
                        </div>
                    )}
                </nav>
                <ul className="hidden h-full relative md:flex gap-2 lg:gap-10 justify-center items-center">
                    <li>მთავარი</li>
                    <li>გალერია</li>
                    <li>ფასი</li>
                    <li className="ml-20 mr-20">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width="250"
                            height="250"
                            className="w-48 lg:w-64 absolute -mt-6 -translate-x-1/2 top-1/3 transform"
                        />
                    </li>
                    <li>ჩვენზე</li>
                    <li>სიახლეები</li>
                    <li>კონტაქტები</li>
                </ul>
                <div className="w-1/3 absolute right-1 top-6 md:hidden">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width="350"
                        height="350"
                    />
                </div>
            </div>
            {isBurgerOpen && <Overlay onClick={toggleBurger} />}
        </header>
    );
}