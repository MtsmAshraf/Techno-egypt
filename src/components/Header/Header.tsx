"use client"
import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import Nav from '../Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import VerticalNav from '../VerticalNav/VerticalNav'
import { Link } from '@/i18n/routing'
// import LangSwitch from '../Nav/LangSwitch/LangSwitch'
// import { usePathname } from 'next/navigation'
import Logo from '../Logo/logo'
import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { usePathname } from 'next/navigation'

const Header = ({
    lo
  }: {
    lo: string
  }) => {
    const [showVNav, setShowVNav] = useState(false)
    const pathname = usePathname()
    const [showLogoTag, setShowLogoTag] = useState(false)
    useEffect(() => {
      if(pathname.split("/").includes("chocolate-machines")){
      setShowLogoTag(true)
      }else{
        setShowLogoTag(false)
      }
    })
  return (
    <header className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
        <div className="container">
            <Link className={styles.logo} href={"/"}>
              <Logo text lo={lo}></Logo>
              {
                showLogoTag && <span className={styles.logoTag}>Saed</span>
              }
            </Link>
            <Nav lo={lo}></Nav>
            <div className={styles.smCtrl}>
              {/* <LangSwitch lo={lo}></LangSwitch> */}
              <button className={styles.bars} onClick={() => {setShowVNav(true)}}>
                  <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <button id="close-vertical-nav" className={showVNav ? styles.close + " " + styles.shown : styles.close} onClick={() => {setShowVNav(!showVNav)}}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <VerticalNav shown={showVNav}></VerticalNav>
            {/* <SocialUl></SocialUl> */}
            <LangSwitch lo={lo}></LangSwitch>

        </div>
    </header>
  )
}

export default Header