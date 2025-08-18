import Header from '@/components/Header/Header'
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import React from 'react'
import styles from "./subpages-layout.module.css"
import PageFilter from '@/components/PageFilter/PageFilter';



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
    <div className={styles.subpagesLayout}>
        <Header lo={locale}></Header>
        <PageFilter />
        <main>
            {children}
        </main>
    </div>
  )
}
