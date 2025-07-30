import React from 'react'
import styles from "./products.module.css"
import MainHeading from '../MainHeading/MainHeading'
import ProductsGrid from './ProductsGrid/ProductsGrid'
const Products = ({
  lo
}: {
  lo: string
}) => {
  return (
    <section id='products' className={lo === "ar" ? styles.products + " " + styles.ar : styles.products}>
        <div className="container">
            <MainHeading>
                <h2>
                  {/* {t("Products.MainHeading.H2")} */}
                  Fire Alarm Systems
                </h2>
                {/* <p>
                  {t("Products.MainHeading.P")}
                </p> */}
                <p>
                  We provide high-quality AST, Codesec and TNA fire alarm systems products
                </p>
            </MainHeading>
        <ProductsGrid lo={lo}></ProductsGrid>
        </div>
    </section>
  )
}

export default Products