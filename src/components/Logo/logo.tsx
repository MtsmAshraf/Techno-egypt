import React from "react"
import styles from "./logo.module.css"
import Image from "next/image"
import logoImg from "../../../public/imgs/logo-img.png"
import logoText from "../../../public/imgs/logo-text.png"

import fullLogo from "../../../public/imgs/logo-1.png"

const Logo = ({
    lo,
    text
}: {
    lo?: string,
    text?: boolean
}) => {

  return (
    <div className={lo === "ar" ? styles.logo + " " + styles.ar : styles.logo}>
        {
          text ?
          <>
            <Image loading='lazy' src={logoImg} alt="Techno Egypt logo img"></Image>
            <Image loading='lazy' src={logoText} alt="Techno Egypt logo text"></Image>
          </>
          :
            <Image loading='lazy' src={fullLogo} alt="Techno Egypt logo"></Image>
        }
    </div>
  )
}

export default Logo