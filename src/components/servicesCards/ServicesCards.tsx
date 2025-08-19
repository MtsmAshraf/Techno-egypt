import React from 'react'
import styles from "./services-cards.module.css"
import Card from './card/card'
import MainHeading from '../MainHeading/MainHeading'
import { FaTools } from 'react-icons/fa'

const ServicesCards = ({
    lo
}: {
    lo: string
}) => {
  return (
    <section id='services' className={lo === "en" ? styles.servicesCards + " " + styles.en : styles.servicesCards}>
        <div className="container">
            <MainHeading>
                {/* <span>
                    {t('SubHeading')}
                </span>
                <h1>
                    {t('Heading')}
                </h1> */}
                <h2>
                    Services
                </h2>
                <p>
                    We provide a turn key industrial solution.
                </p>
            </MainHeading>
            <div className={styles.cards}>
                <Card href={"/industrial-solutions"}>
                    <div>
                        {/* <Image loading='lazy' src={design} alt='design'></Image> */}
                        <FaTools />
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            Design
                        </h2>
                        <p>
                            DESIGN ALL FIREFIGHTING AND FIRE ALARM SYSTEM
                        </p>
                    </div>
                </Card>
                <Card href={"/industrial-solutions"}>
                    <div>
                        {/* <Image loading='lazy' src={supply} alt='supply'></Image> */}
                        <FaTools />
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            SUPPLY
                        </h2>
                        <p>
                            SUPPLY ALL SYSTEMS COMPONENTS
                        </p>
                    </div>
                </Card>
                <Card href={"/industrial-solutions"}>
                    <div>
                        {/* <Image loading='lazy' src={international} alt='international'></Image> */}
                        <FaTools />
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            International
                        </h2>
                        <p>
                            AGENTS FOR SOME OF
                            INTERNATIONAL BRANDS
                        </p>
                    </div>
                </Card>
                <Card href={"/industrial-solutions"}>
                    <div>
                        {/* <Image loading='lazy' src={installation} alt='installation'></Image> */}
                        <FaTools />
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            INSTALLATION
                        </h2>
                        <p>
                            INSTALLATION USING ALL NECESSARY TOOLS
                        </p>
                    </div>
                </Card>
                <Card href={"/industrial-solutions"}>
                    <div>
                        {/* <Image loading='lazy' src={testing} alt='testing'></Image> */}
                        <FaTools />
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            TESTING
                        </h2>
                        <p>
                            TESTING & COMMISSIONING
                        </p>
                    </div>
                </Card>
                <Card href={"/industrial-solutions"}>
                    <div>
                        {/* <Image loading='lazy' src={maintainance} alt='maintainance'></Image> */}
                        <FaTools />
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            MAINTENANCE
                        </h2>
                        <p>
                            MAINTENANing ALL FIREFIGHTING
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default ServicesCards