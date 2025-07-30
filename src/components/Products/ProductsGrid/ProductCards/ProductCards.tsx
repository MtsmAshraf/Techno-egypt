import React from 'react'
import styles from "./products-cards.module.css"
import ProductCard from './ProductCard/ProductCard'
import allProducts, { Product } from "../allProducts"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
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
        {
            !category && 
            <>
                {/* cat-all conventional - imgs */}
                <div className={styles.subHeading}>
                    <h3>
                        Conventional Fire Alarm Systems
                    </h3>
                    <span>ATS</span>
                </div>
                <div className={styles.productCards}>
                    {
                        allProducts.map((product: Product) => {
                            return(
                                product.category === "conventional" && product.brand === "ATS" &&
                                <ProductCard key={product.id}>
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
                                                        <Image loading='lazy' src={product.src} alt='Product Image'></Image>
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
                                </ProductCard>
                            )
                        })
                    }
                </div>

                <div className={styles.subHeading}>
                    <h3>
                        Conventional Fire Alarm Systems
                    </h3>
                    <span>Codesc</span>
                </div>
                <div className={styles.productCards}>   
                    {
                        allProducts.map((product: Product) => {
                            return(
                                product.category === "conventional" && product.brand === "Codesec" &&
                                <ProductCard key={product.id}>
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
                                                        <Image loading='lazy' src={product.src} alt='Product Image'></Image>
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
                                </ProductCard>
                            )
                        })
                    }
                </div>

                {/* cat-all conventional - no imgs */}
                <div className={styles.productCards}>   
                    {
                        allProducts.map((product: Product) => {
                            return(
                                product.category === "conventional" && !product.brand &&
                                <ProductCard key={product.id}>
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
                                                        <Image loading='lazy' src={product.src} alt='Product Image'></Image>
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
                                </ProductCard>
                            )
                        })
                    }
                </div>

                {/* cat-all addressable - imgs */}

                <div className={styles.subHeading}>
                    <h3>
                        Addressable Fire Alarm Systems
                    </h3>
                    <span>TNA</span>
                </div>
                <div className={styles.productCards}>
                    {
                        allProducts.map((product: Product) => {
                            return(
                                product.category === "addressable" && product.brand === "TNA" &&
                                <ProductCard key={product.id}>
                                    <div className={styles.productCard}>
                                            {
                                                product.src ?
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
                                </ProductCard>
                            )
                        })
                    }
                </div>

                {/* cat-all addressable - no imgs */}
                <div className={styles.productCards}>   
                    {
                        allProducts.map((product: Product) => {
                            return(
                                product.category === "addressable" && !product.brand &&
                                <ProductCard key={product.id}>
                                    <div className={styles.productCard}>
                                        {
                                            product.src  ?                                            <>
                                                <div className={styles.cardImg + ` hexagon`}>
                                                <a href="#contact">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                    <span>
                                                        Order
                                                    </span>
                                                </a>
                                                        <Image loading='lazy' src={product.src} alt='Product Image'></Image>
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
                                </ProductCard>
                            )
                        })
                    }
                </div>
            </> 
        }
        {
            category && 
            <>
                {
                    category === "conventional" &&
                    <>
                        <div className={styles.subHeading}>
                            <h3>
                                {category} Fire Alarm Systems
                            </h3>
                            <span>
                                ATS
                            </span>
                        </div>
                        <div className={styles.productCards}>
                            {
                                allProducts.map((product: Product) => {
                                    return(
                                        product.category === category && product.brand === "ATS" &&
                                        <ProductCard key={product.id}>
                                            <div className={styles.productCard}>
                                            <div className={styles.cardImg + ` hexagon`}>
                                                <a href="#contact">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                    <span>
                                                        Order
                                                    </span>
                                                </a>
                                                    {
                                                        product.src &&
                                                        <Image loading='lazy' src={product.src} alt='Product Image'></Image>
                                                    }
                                                </div>
                                                <p>
                                                    {/* {t(`ProductsCards.${product.id}`)} */}
                                                    {product.name}
                                                </p>
                                            </div>
                                        </ProductCard>
                                    )
                                })
                            }
                        </div>
                        
                    </>
                }

                {
                    category === "conventional" && 
                    <>
                        <div className={styles.subHeading}>
                            <h3>
                                {category} Fire Alarm Systems
                            </h3>
                            <span>
                                Codesec
                            </span>
                        </div>
                        <div className={styles.productCards}>
                            {
                                allProducts.map((product: Product) => {
                                    return(
                                        product.category === category && product.brand === "Codesec" &&
                                        <ProductCard key={product.id}>
                                            <div className={styles.productCard}>
                                            <div className={styles.cardImg + ` hexagon`}>
                                                <a href="#contact">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                    <span>
                                                        Order
                                                    </span>
                                                </a>
                                                    {
                                                        product.src &&
                                                        <Image loading='lazy' src={product.src} alt='Product Image'></Image>
                                                    }
                                                </div>
                                                <p>
                                                    {/* {t(`ProductsCards.${product.id}`)} */}
                                                    {product.name}
                                                </p>
                                            </div>
                                        </ProductCard>
                                    )
                                })
                            }
                        </div>

                    </>
                }
                
                {
                    category === "addressable" && 
                    <>
                        <div className={styles.subHeading}>
                            <h3>
                                {category} Fire Alarm Systems
                            </h3>
                            <span>
                                TNA
                            </span>
                        </div>
                        <div className={styles.productCards}>
                            {
                                allProducts.map((product: Product) => {
                                    return(
                                        product.category === category && product.brand === "TNA" &&
                                        <ProductCard key={product.id}>
                                            <div className={styles.productCard}>
                                            <div className={styles.cardImg + ` hexagon`}>
                                                <a href="#contact">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                    <span>
                                                        Order
                                                    </span>
                                                </a>
                                                    {
                                                        product.src &&
                                                        <Image loading='lazy' src={product.src} alt='Product Image'></Image>
                                                    }
                                                </div>
                                                <p>
                                                    {/* {t(`ProductsCards.${product.id}`)} */}
                                                    {product.name}
                                                </p>
                                            </div>
                                        </ProductCard>
                                    )
                                })
                            }
                        </div>
                        
                    </>
                }
                
                {/* cat - no imgs */}
                <div className={styles.productCards}>   
                    {
                        allProducts.map((product: Product) => {
                            return(
                                product.category === "conventional" && !product.brand &&
                                <ProductCard key={product.id}>
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
                                                        <Image loading='lazy' src={product.src} alt='Product Image'></Image>
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
                                </ProductCard>
                            )
                        })
                    }
                </div>

            </>
        }
    </>
  )
}

export default ProductCards