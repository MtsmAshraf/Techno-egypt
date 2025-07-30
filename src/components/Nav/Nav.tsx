import React from 'react'
import styles from "./nav.module.css"
// import { useTranslations } from 'next-intl'
// import { Link } from '@/i18n/routing'

const Nav = ({
    lo
}: {
    lo: string
}) => {
    // const t = useTranslations("Header")
  return (
    <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
        <ul className={styles.links}>
            <li>
                <a href={'#'}>
                {/* {t("Nav.Home")} */}
                Home
                </a>
            </li>
            <li>
                <a href={'#about'}>
                    {/* {t("Nav.Manufacturing")} */}
                    About Us
                </a>
            </li>
            <li>
                <a href={'#services'}>
                    {/* {t("Nav.Manufacturing")} */}
                    Services
                </a>
            </li>
            <li>
                <a href={'#products'}>
                    {/* {t("Nav.Products")} */}
                    Products
                </a>
            </li>
            <li>
                <a href={'#projects'}>
                    {/* {t("Nav.Products")} */}
                    Projects
                </a>
            </li>
            <li>
                <a href={'#contact'}>
                    {/* {t("Nav.ContactUs")} */}
                    Contact Us
                </a>
            </li>
        </ul>
        {/* <LangSwitch lo={lo}></LangSwitch> */}
    </nav>
  )
}

export default Nav