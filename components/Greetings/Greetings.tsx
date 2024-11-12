'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Greetings() {
    const { t } = useTranslation()

    return (
        <div className="md:overflow-hidden text-black">
            <div className="flex flex-col md:flex-row md:w-full md:items-center">
                <article className="flex flex-center items-center flex-col max-[767px]:px-12 md:px-0 max-[767px]:mx-auto md:pl-24 md:w-1/2">
                    <h1 className="text-xl mb-5">
                        {t('common:georgianHouse')}
                    </h1>
                    {t('greetingsText')}
                </article>
                <div className="md:w-1/2 max-[767px]:mx-auto max-[767px]:px-12">
                    <Image
                        src="/translucent-image.png"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto -mt-4 md:-mt-10"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:w-full md:items-center">
                <article className="flex flex-center items-center flex-col max-[767px]:px-12 md:px-0 max-[767px]:mx-auto md:pl-24 md:w-1/2">
                    <h1 className="text-xl mb-5">
                        {t('common:georgianHouse')}
                    </h1>
                    {t('greetingsText')}
                </article>
                <div className="md:w-1/2 max-[767px]:mx-auto max-[767px]:px-12">
                    <Image
                        src="/translucent-image.png"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto -mt-4 md:-mt-10"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:w-full md:items-center">
                <article className="flex flex-center items-center flex-col max-[767px]:px-12 md:px-0 max-[767px]:mx-auto md:pl-24 md:w-1/2">
                    <h1 className="text-xl mb-5">
                        {t('common:georgianHouse')}
                    </h1>
                    {t('greetingsText')}
                </article>
                <div className="md:w-1/2 max-[767px]:mx-auto max-[767px]:px-12">
                    <Image
                        src="/translucent-image.png"
                        alt="Plant logo"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-auto -mt-4 md:-mt-10"
                    />
                </div>
            </div>
        </div>
    )
}
