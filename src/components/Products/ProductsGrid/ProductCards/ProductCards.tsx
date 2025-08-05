import React from 'react'
import styles from "./products-cards.module.css"
import ProductCard from './ProductCard/ProductCard'
import allProducts, { Product } from "../allProducts"
import Image from 'next/image'
import { FaBox } from 'react-icons/fa6'
// import MainHeading from '@/components/MainHeading/MainHeading'
// import { useTranslations } from 'next-intl'
const ProductCards = ({
    category
} : {
    category: string
}) => {
    // const t = useTranslations("HomePage.Products")
  return (
    <>
        <div className={styles.productCards}>
            {
                allProducts.map((product: Product) => {
                    return(
                        product.category === "conventional" && product.brand === "ATS" &&
                        <ProductCard key={product.id}>
                            <div className={styles.productCard}>
                                {
                                    <>
                                        <div className={styles.cardImg}>
                                            {/* <a href="#contact">
                                                <FontAwesomeIcon icon={faPhone} />
                                                <span>
                                                    Order
                                                </span>
                                            </a> */}
                                                <Image loading='lazy' src={product.src} alt='Product Image'></Image>
                                        </div>
                                        <p>
                                            {/* {t(`ProductsCards.${product.id}`)} */}
                                            {product.name}
                                        </p>
                                        <div className={styles.productDetails}>
                                            <ul>
                                                <li>
                                                    <FaBox />
                                                    <span>Spec</span>
                                                </li>
                                                <li>
                                                    <FaBox />
                                                    <span>Spec</span>
                                                </li>
                                                <li>
                                                    <FaBox />
                                                    <span>Spec</span>
                                                </li>
                                                <li>
                                                    <FaBox />
                                                    <span>Spec</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                    }
                            </div>
                        </ProductCard>
                    )
                })
            }
        </div>
    </>
  )
}

export default ProductCards