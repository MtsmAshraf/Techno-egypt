import React from 'react'
import styles from "./card.module.css"
import { Link } from '@/i18n/routing'
const Card = ({
    children,
    href
}: {
    children: React.ReactNode,
    href: string
}) => {
  return (
    <Link href={href} className={styles.card}>
        {children}
    </Link>
  )
}

export default Card