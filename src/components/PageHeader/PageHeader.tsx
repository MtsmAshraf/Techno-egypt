"use client"
import React from 'react'
import styles from "./page-header.module.css"
import { usePathname } from 'next/navigation'
const PageHeader = ({
  children
} : {
  children?: React.ReactNode
}) => {
  const pathname = usePathname()
  if(children){
    return (
      <div className={styles.pageHeader}>
        {children}
      </div>
    ) 
  }else{
    return(
      <div className={styles.pageHeader}>
        {
          pathname.split("/")[pathname.split("/").length - 1] === "machines-services" ?
          "Machines Services"
          :
          pathname.split("/")[pathname.split("/").length - 1] === "chocolate-machines" ?
          "Chocolate Machines" : "Techno Egypt"
        }
      </div>
    )
  }
}

export default PageHeader