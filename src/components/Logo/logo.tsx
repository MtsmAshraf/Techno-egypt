import React from "react"
import styles from "./logo.module.css"
import Image from "next/image"
import logo1 from "../../../public/imgs/logo-1.png"


const Logo = ({
    lo,
}: {
    lo?: string,
}) => {

  return (
    <div className={lo === "ar" ? styles.logo + " " + styles.ar : styles.logo}>
        <Image loading='lazy' src={logo1} alt="ICSF logo"></Image>
    </div>
  )
}

export default Logo