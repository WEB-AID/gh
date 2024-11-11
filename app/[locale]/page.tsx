import Image from 'next/image'
import Greetings from '../../components/Greetings/Greetings'
import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'

const i18nNamespaces = ['mainPage', 'common']

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }> // Типизируем params как Promise
}) {
    // Обрабатываем params с await
    const { locale } = await params
    const { t, resources } = await initTranslations(locale, i18nNamespaces)

    return (
        <TranslationsProvider
            locale={locale}
            namespaces={i18nNamespaces}
            resources={resources}
        >
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
                    <p className="md:hidden text-xs absolute w-3/4 max-[767px]:top-3 max-[767px]:w-3/5 top-10 max-[767px]:left-6 left-10 text-white font-bold text-lg py-2">
                        {t('plantPhotoText')}
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
                    <p className="max-[767px]:hidden text-3xl absolute w-4/5 top-16 mt-8 lg:mt-4 lg:top-22 lg:text-3xl left-10 text-white font-bold text-lg py-2">
                        {t('plantPhotoText')}
                    </p>
                </div>
                <Greetings />
            </main>
        </TranslationsProvider>
    )
}
