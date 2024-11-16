'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import i18nConfig from '@/i18nConfig'
import React from 'react'
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectSeparator,
} from '@/app/uikit/select'

export default function LanguageSelector() {
    const { i18n } = useTranslation()
    const currentLocale = i18n.language
    const router = useRouter()
    const currentPathname = usePathname()

    const handleChange = (newLocale: string) => {
        const days = 30
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = date.toUTCString()
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/;SameSite=Lax`

        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname)
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            )
        }
    }

    return (
        <Select value={currentLocale} onValueChange={handleChange}>
            <SelectTrigger>
                <SelectValue placeholder="Выберите язык" />
            </SelectTrigger>
            <SelectContent className="radix-select-content">
                <SelectItem value="ka">
                    <span>Ge</span>
                </SelectItem>
                <SelectSeparator />
                <SelectItem value="en">
                    <span>En</span>
                </SelectItem>
                <SelectSeparator />
                <SelectItem value="ru">
                    <span>Ru</span>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}
