import React from 'react'
import styles from "./products.module.css"
import ProductsGrid from './ProductsGrid/ProductsGrid'
const Products = ({
  lo
}: {
  lo: string
}) => {
  return (
    <section id='products' className={lo === "ar" ? styles.products + " " + styles.ar : styles.products}>
        <ProductsGrid lo={lo}></ProductsGrid>
    </section>
  )
}

export default Products