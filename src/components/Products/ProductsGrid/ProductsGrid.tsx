"use client"
import React, { useState } from 'react'
import styles from "./products-grid.module.css"
import ProductCards from './ProductCards/ProductCards'

const ProductsGrid = ({
    lo
}: {
    lo: string
}) => {
    const [selectedCategory, setSelectedCategory] = useState("")
  return (
    <section className={lo === "ar" ? styles.productsGrid + " " + styles.ar : styles.productsGrid}>
        <div className={styles.filter}>
            <div>
                <label htmlFor="all">
                    {/* <div className={styles.icon}>
                        <FaBoxesStacked />
                    </div> */}
                    <span>
                        {/* {t('Filter.All')} */}
                        All
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} defaultChecked type="radio" id='all' name='grid-filter' value={""}/>
            </div>
            <div>
                <label htmlFor="cat-1">
                    {/* <div className={styles.icon}>
                        <FaFireExtinguisher />
                    </div> */}
                    <span>
                        {/* {t('Filter.Body')} */}
                        Conventional
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='cat-1' name='grid-filter' value={"conventional"}/>
            </div>
            <div>
                <label htmlFor="cat-2">
                    {/* <div className={styles.icon}>
                        <AiFillAlert />
                    </div> */}
                    <span>
                        {/* {t('Filter.Head')} */}
                        Addressable
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='cat-2' name='grid-filter' value={"addressable"}/>
            </div>
        </div>
        <ProductCards category={selectedCategory}></ProductCards>
    </section>
  )
}

export default ProductsGrid