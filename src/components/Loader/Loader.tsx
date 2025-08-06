"use client"
import React, { useEffect, useState } from 'react'
import "./loader.css"
import fullLogo from "../../../public/imgs/logo-1.png"
import Image from 'next/image'
const Loader = () => {
    const [loaded, setLoaded] = useState(false)
    const [hide, setHide] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 300);
        setTimeout(() => {
            setHide(true)
        }, 700);
    },[])
    const classNames = [
        "loading",
        loaded ? "loaded" : "",
        hide ? "hide" : "",
    ]
    return (
        <div className={classNames.join(" ")}>
            <div className="loader">
                <div>
                    <Image src={fullLogo} alt='Techno Egypt Logo'></Image>
                </div>
                {/* <Image src={loaderImg} alt='Loader'></Image> */}
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Loader