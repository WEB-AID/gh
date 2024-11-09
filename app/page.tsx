import Image from 'next/image'
import Greetings from './components/Greetings/Greetings'

export default function Home() {
    return (
        <main className="flex flex-col">
            <div className="relative">
                <Image
                    src="/plant1.jpg"
                    alt="Plant logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-35vh md:hidden"
                />
                <p className="md:hidden text-xs absolute w-3/4 top-10 left-10 text-white font-bold text-lg py-2">
                    ფერმის ცხოველების მიწოდების მომსახურება, სპეციალიზირებული
                    მაღალი ხარისხის ღორების გაყიდვაში აგრარული
                    საზოგადოებისათვის.
                </p>
            </div>

            <div className="relative">
                <Image
                    src="/plant1.jpg"
                    alt="Plant logo"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-45vh md:h-70vh max-[767px]:hidden"
                />
                <p className="max-[767px]:hidden text-3xl absolute w-4/5 top-20 lg:top-24 left-10 text-white font-bold text-lg py-2">
                    ფერმის ცხოველების მიწოდების მომსახურება, სპეციალიზირებული
                    მაღალი ხარისხის ღორების გაყიდვაში აგრარული
                    საზოგადოებისათვის.
                </p>
            </div>

            <Greetings />
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </main>
    )
}
