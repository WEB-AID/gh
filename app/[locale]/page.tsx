import Image from 'next/image'
import Greetings from '../../components/Greetings/Greetings'
import initTranslations, { i18nNamespaces } from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'

type HomeProps = { params: Promise<{ locale: string }> }

export default async function Home({ params }: HomeProps) {
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
                        className="w-full h-35vh md:h-70vh"
                    />
                    <p className="absolute w-1/2 left-10 top-4 py-2 md:w-4/5 md:top-10 md:mt-8 lg:mt-4 lg:top-22 text-white font-bold text-xs md:text-lg lg:text-3xl">
                        {t('plantPhotoText')}
                    </p>
                </div>
                <Greetings />
            </main>
        </TranslationsProvider>
    )
}
