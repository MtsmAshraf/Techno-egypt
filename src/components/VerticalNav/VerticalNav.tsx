"use client"
import React from 'react'
import styles from "./vertical-nav.module.css"
// import SocialUl from '../SocialUl/SocialUl'
// import LangSwitch from '../Nav/LangSwitch/LangSwitch'
// import { Link } from '@/i18n/routing'
// import { usePathname } from 'next/navigation'
import Logo from '../Logo/logo'
import { Link } from '@/i18n/routing'
import { FaHome, FaLightbulb } from 'react-icons/fa'
import { GiChocolateBar } from 'react-icons/gi'
import { usePathname } from 'next/navigation'
const VerticalNav = ({
    shown,
    // lo
} : {
    shown: boolean,
    // lo: string
}) => {
    const pathname = usePathname()
    const closeVerticalNav = () => {
        const closeBtn: any = document.querySelector("#close-vertical-nav") 
        if(closeBtn){
            closeBtn.click();
        }
    }
    return (
    <div className={shown ? styles.verticalNav + " " + styles.shown : styles.verticalNav}>
        <div className={styles.logo}>
            <Logo text={false}></Logo>
        </div>
        <ul className={styles.links}>
            <li onClick={() => {closeVerticalNav()}}>
                <Link className={pathname.split("/").includes("/") ? styles.active : ""} href={'/'}>
                    <FaHome />
                    <span>
                        Home
                    </span>
                </Link>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <Link className={pathname.split("/").includes("chocolate-machines") ? styles.active : ""} href={'/chocolate-machines'}>
                    <GiChocolateBar />
                    <span>
                        Chocolate Machines
                    </span>
                </Link>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <Link className={pathname.split("/").includes("industrial-solutions") ? styles.active : ""} href={'/industrial-solutions'}>
                    <FaLightbulb />
                    <span>
                        Industrial Solutions
                    </span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default VerticalNav