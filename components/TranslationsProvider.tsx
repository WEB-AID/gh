'use client'

import { I18nextProvider } from 'react-i18next'
import initTranslations from '@/app/i18n'
import { createInstance } from 'i18next'
import { ReactNode } from 'react'

interface TranslationsProviderProps {
    children: ReactNode
    locale: string
    namespaces: string[]
    resources?: {
        [language: string]: {
            [namespace: string]: Record<string, string>
        }
    }
}

export default function TranslationsProvider({
    children,
    locale,
    namespaces,
    resources,
}: TranslationsProviderProps) {
    const i18n = createInstance()

    initTranslations(locale, namespaces, i18n, resources)

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
