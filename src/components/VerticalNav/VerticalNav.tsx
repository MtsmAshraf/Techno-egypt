import React from 'react'
import styles from "./vertical-nav.module.css"
// import SocialUl from '../SocialUl/SocialUl'
// import LangSwitch from '../Nav/LangSwitch/LangSwitch'
// import { Link } from '@/i18n/routing'
// import { usePathname } from 'next/navigation'
import Logo from '../Logo/logo'
const VerticalNav = ({
    shown,
    // lo
} : {
    shown: boolean,
    // lo: string
}) => {
    // const pathname = usePathname()
    const closeVerticalNav = () => {
        const closeBtn: any = document.querySelector("#close-vertical-nav") 
        if(closeBtn){
            closeBtn.click();
        }
    }
    return (
    <div className={shown ? styles.verticalNav + " " + styles.shown : styles.verticalNav}>
        {/* <h3>{t("VerticalNav.Language")}</h3>
        <LangSwitch lo={lo}></LangSwitch> */}
        {/* <h3>{t("VerticalNav.Sections")}</h3> */}
        <div className={styles.logo}>
            <Logo text={false}></Logo>
        </div>
        <ul className={styles.links}>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#about'}>
                    About Us
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#partners'}>
                    Partners
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#services'}>
                    Services
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#fields'}>
                    Our Fields
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#clients'}>
                    Clients
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#products'}>
                    Products
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#projects'}>
                    Projects
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#where'}>
                    Our Location
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#contact'}>
                    Contact Us
                </a>
            </li>
        </ul>
    </div>
  )
}

export default VerticalNav