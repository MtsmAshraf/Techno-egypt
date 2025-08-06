import React from "react"
import styles from "./logo.module.css"
import Image from "next/image"
import logoImg from "../../../public/imgs/logo-img.png"
import logoText from "../../../public/imgs/logo-text.png"


const Logo = ({
    lo,
}: {
    lo?: string,
}) => {

  return (
    <div className={lo === "ar" ? styles.logo + " " + styles.ar : styles.logo}>
        <Image loading='lazy' src={logoImg} alt="Techno Egypt logo"></Image>
        <Image loading='lazy' src={logoText} alt="Techno Egypt"></Image>
    </div>
  )
}

export default Logo