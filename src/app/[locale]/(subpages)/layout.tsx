import Header from '@/components/Header/Header'
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function SubPagesLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {

  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  return (
    <>
        <Header lo={locale}></Header>
        <main>
            {children}
        </main>
    </>
  )
}
