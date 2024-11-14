// app/layout.tsx
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import TranslationsProvider from '@/components/TranslationsProvider'
import initTranslations, { i18nNamespaces } from '../i18n'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Suspense } from 'react'
import Loading from './loading'
import './globals.css'

// const geistSans = localFont({
//     src: './fonts/GeistVF.woff',
//     variable: '--font-geist-sans',
//     weight: '100 900',
// })

const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

const test = localFont({
    src: './fonts/NotoSerifGeorgian-VariableFont_wdth,wght.woff',
    variable: '--test',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Georgian House LLC',
    description:
        'Pigs growing is our way to show - how can food change, depends on technology and professionality',
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    const { locale } = await params
    const { resources } = await initTranslations(locale, i18nNamespaces)

    return (
        <html lang={locale}>
            <body
                className={`${test.variable} ${geistMono.variable} antialiased`}
            >
                <TranslationsProvider
                    locale={locale}
                    namespaces={i18nNamespaces}
                    resources={resources}
                >
                    <Header />
                    <Suspense fallback={<Loading />}>
                        <div className="pt-24 lg:pt-32">{children}</div>
                    </Suspense>
                    <Footer />
                </TranslationsProvider>
            </body>
        </html>
    )
}
