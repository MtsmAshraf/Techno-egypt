import React from 'react'
import styles from "./products.module.css"
import MainHeading from '../MainHeading/MainHeading'
import FightingProductsGrid from './ProductsGrid/FightingProductsGrid'
const FightingProducts = ({
  lo
}: {
  lo: string
}) => {
  return (
    <section className={lo === "ar" ? styles.products + " " + styles.ar : styles.products}>
        <div className="container">
            <MainHeading>
                <h2>
                  {/* {t("Products.MainHeading.H2")} */}
                  Fire Fighting Systems
                </h2>
                {/* <p>
                  {t("Products.MainHeading.P")}
                </p> */}
                <p>
                  We provide high-quality fire fighting systems products
                </p>
            </MainHeading>
        <FightingProductsGrid lo={lo}></FightingProductsGrid>
        </div>
    </section>
  )
}

export default FightingProducts