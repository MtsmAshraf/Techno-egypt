"use client"
import React from 'react'
import styles from "./page-filter.module.css"
import { FaLightbulb } from 'react-icons/fa'
import { Link } from '@/i18n/routing'
import { usePathname } from 'next/navigation'
import { MdPrecisionManufacturing } from 'react-icons/md'
const PageFilter = () => {
    const pathname = usePathname()
  return (
    <div className={styles.pageFilter} style={{ display:  pathname.split("/").includes("industrial-solutions") ? "none" : "flex" }}>
        <Link className={pathname.split("/").includes("machines-services") === false ? styles.active : ""} href={"/chocolate-machines"}>
            <h4 className={styles.icon}>
                <MdPrecisionManufacturing />
            </h4>
            <span>
                {/* {t('Filter.Body')} */}
                Chocolate Machines
            </span>
        </Link>
        <Link className={pathname.split("/").includes("machines-services") ? styles.active : ""} href={"/chocolate-machines/machines-services"}>
            <h4 className={styles.icon}>
                <FaLightbulb />
            </h4>
            <span>
                {/* {t('Filter.Head')} */}
                Machines Services
            </span>
        </Link>
    </div>
  )
}

export default PageFilter