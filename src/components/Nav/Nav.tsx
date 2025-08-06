import React from 'react'
import styles from "./nav.module.css"
import { Link } from '@/i18n/routing'
import { usePathname } from 'next/navigation'
// import { useTranslations } from 'next-intl'
// import { Link } from '@/i18n/routing'

const Nav = ({
    lo
}: {
    lo: string
}) => {
    // const t = useTranslations("Header")
    const pathname = usePathname()
  return (
    <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
        <ul className={styles.links}>
            <li>
                <Link className={pathname === "/" ? styles.active : ''} href={'/'}>
                    Home
                </Link>
            </li>
            <li>
                <Link className={pathname.includes('/chocolate-machines') ? styles.active : ""} href={'/chocolate-machines'}>
                    Chocolate Machines
                </Link>
            </li>
            <li>
                <Link className={pathname.includes('/engineering-solutions') ? styles.active : ""} href={'/engineering-solutions'}>
                    Engineering Solutions
                </Link>
            </li>
        </ul>
        {/* <LangSwitch lo={lo}></LangSwitch> */}
    </nav>
  )
}

export default Nav