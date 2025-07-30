import React from 'react'
import styles from "./products-grid.module.css"
import FightingProductCards from './ProductCards/FightingProductCards'

const FightingProductsGrid = ({
    lo
}: {
    lo: string
}) => {
  return (
    <section className={lo === "ar" ? styles.productsGrid + " " + styles.ar : styles.productsGrid}>
        <FightingProductCards></FightingProductCards>
    </section>
  )
}

export default FightingProductsGrid