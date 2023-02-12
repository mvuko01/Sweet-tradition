import Image from 'next/image'
import styles from '../styles/ShoppingCart.module.css'
import loginStyle from '../styles/Login.module.css'
import { useState } from 'react'
import ShoppingCartProduct from './ShoppingCartProduct'

const ShoppingCart = ({stateChanger, state}) => {
    

    return (
        <>
            <div className={state ? styles.mainDivActive : styles.mainDiv}>
                <div className={styles.titleAndCloseContainer}>
                    <h1 className={styles.heading}>BAG</h1>
                    <div onClick={() => stateChanger(false)} className={styles.mainXWrapper}>
                        <Image
                            src={'/close.svg'}
                            alt="close"
                            width={30}
                            height={30}
                            className={styles.mainXImage}
                        />

                    </div>
                </div>
                <div className={styles.productsSection}>
                    <ShoppingCartProduct/>
                    <ShoppingCartProduct/>
                    <ShoppingCartProduct/>
                    <ShoppingCartProduct/>
                    <ShoppingCartProduct/>
                    <ShoppingCartProduct/>
                    <ShoppingCartProduct/>
                </div>
                <div className={styles.totalAndCheckoutContainer}>
                    <div className={styles.totalArea}>
                        <span className={styles.totalText}>TOTAL</span>
                        <span className={styles.totalText}>25.7€</span>
                    </div>
                    <div className={styles.signInBtnWrapper}>
                         <button className={styles.signInBtn}> Sign in </button>
                    </div>

                </div>

            </div>
        </>
    )
}


export default ShoppingCart;