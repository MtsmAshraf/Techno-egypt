import Header from '@/components/Header/Header'
import { Link, routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import React from 'react'
import styles from "./subpages-layout.module.css"
import { GiFactoryArm } from 'react-icons/gi';
import { FaLightbulb } from 'react-icons/fa';



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
        <div className={styles.pageFilter}>
              <Link href={"/chocolate-machines"}>
                      <h4 className={styles.icon}>
                          <GiFactoryArm  />
                      </h4>
                      <span>
                          {/* {t('Filter.Body')} */}
                          Chocolate Machines
                      </span>
              </Link>
              <Link href={"/chocolate-machines/machines-services"}>
                      <h4 className={styles.icon}>
                          <FaLightbulb />
                      </h4>
                      <span>
                          {/* {t('Filter.Head')} */}
                          Machines Services
                      </span>
              </Link>
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}
