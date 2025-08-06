"use client"
import React, { useState } from 'react'
import styles from "./products-grid.module.css"
import ProductCards from './ProductCards/ProductCards'
import { BsBoxes } from 'react-icons/bs'
import { MdOutlineScience } from 'react-icons/md'
import { GiChocolateBar } from 'react-icons/gi'
import { FaGears } from 'react-icons/fa6'

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
                    <div className={styles.icon}>
                        <BsBoxes />
                    </div>
                    <span>
                        {/* {t('Filter.All')} */}
                        All
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} defaultChecked type="radio" id='all' name='grid-filter' value={""}/>
            </div>
            <div>
                <label htmlFor="cat-1">
                    <div className={styles.icon}>
                        <MdOutlineScience />
                    </div>
                    <span>
                        {/* {t('Filter.Body')} */}
                        Lab
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='cat-1' name='grid-filter' value={"lab"}/>
            </div>
            <div>
                <label htmlFor="cat-2">
                    <div className={styles.icon}>
                        <FaGears />
                    </div>
                    <span>
                        {/* {t('Filter.Head')} */}
                        Process
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='cat-2' name='grid-filter' value={"process"}/>
            </div>
            <div>
                <label htmlFor="cat-3">
                    <div className={styles.icon}>
                        <GiChocolateBar />
                    </div>
                    <span>
                        {/* {t('Filter.Head')} */}
                        Wrapping
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='cat-3' name='grid-filter' value={"wrapping"}/>
            </div>
        </div>
        <ProductCards ></ProductCards>
    </section>
  )
}

export default ProductsGrid