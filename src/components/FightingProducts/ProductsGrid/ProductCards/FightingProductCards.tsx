import React from 'react'
import styles from "./products-cards.module.css"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import FightingProductCard from './ProductCard/FightingProductCard'
import fightingProducts, { FightingProduct } from '../allFightingProducts'
// import MainHeading from '@/components/MainHeading/MainHeading'
// import { useTranslations } from 'next-intl'
const FightingProductCards = () => {
    // const t = useTranslations("HomePage.Products")
  return (
    <>
        <div className={styles.productCards}>
        {
            fightingProducts.map((product: FightingProduct) => {
                return(
                    <FightingProductCard key={product.id}>
                        <div className={styles.productCard}>
                            {
                                product.src  ?                                            
                                <>
                                    <div className={styles.cardImg + ` hexagon`}>
                                    <a href="#contact">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span>
                                            Order
                                        </span>
                                    </a>
                                            <Image loading='lazy' src={product.src} alt={product.name}></Image>
                                    </div>
                                    <p>
                                        {/* {t(`ProductsCards.${product.id}`)} */}
                                        {product.name}
                                    </p>
                                </>
                                :
                                <div>
                                        
                                    <a className={styles.nameLink} href="#contact">
                                        {product.name}
                                    </a>
                                </div>
                                }
                        </div>
                    </FightingProductCard>
                )
            })
            }
        </div>
    </>
  )
}

export default FightingProductCards