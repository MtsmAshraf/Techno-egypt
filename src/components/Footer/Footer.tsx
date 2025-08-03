import Image from 'next/image'
import React from 'react'
import bgLogo from "../../../public/imgs/favicon.ico"
import styles from "./footer.module.css"
import { useTranslations } from 'next-intl'
const Footer = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("Footer")
  return (
    <footer className={lo === "ar" ? styles.footer + " " + styles.ar : styles.footer}>
        <div className={styles.bgImg}>
            <Image loading='lazy' src={bgLogo} alt='logo bg'></Image>
        </div>
        <div className={styles.footerContainer}>

            <p>
                &copy; {t("P")}
                <br />
                {t("P2")}
            </p>
            <div className={styles.devFooter}>
                by: <a target='_blank' href="https://moatasim-ashraf.netlify.app">
                    {t("DevFooter")}
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer