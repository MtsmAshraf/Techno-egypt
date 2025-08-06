import React from 'react'
import styles from "./page-header.module.css"
const PageHeader = ({
  children
} : {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.pageHeader}>
        {children}
    </div>
  )
}

export default PageHeader