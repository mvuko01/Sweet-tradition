import Image from 'next/image'
import styles from '../styles/ShoppingCartProduct.module.css'
import loginStyle from '../styles/Login.module.css'
import { useState } from 'react'

const ShoppingCartProduct = ({product, quantity, removeFromLocalStorage, onChangeState, prevState}) => {
    
    const handleXClick = () => {
        onChangeState(!prevState);
    }

    return (
        <div className={styles.productContainer}>
            <div className={styles.pictureWrapper}>
                <Image
                    src={product.frontmatter.picture}
                    alt=""
                    width={130}
                    height={144}
                    className={styles.imageProduct}
                />
            </div>
            <div className={styles.productInfoContainer}>
                <h2 className={styles.productName}>{product.frontmatter.name}</h2>
                <div className={styles.removeProductWrapper}>
                    <Image
                        src={'/closeGrey.svg'}
                        alt="close"
                        width={30}
                        height={30}
                        className={styles.removeProductImage}
                        onClick={() => {
                            removeFromLocalStorage();
                            handleXClick();
                          }}
                    />
                </div>
                <h3 className={styles.productDescription}>{`${product.frontmatter.category}, ${product.frontmatter.quantity}`}</h3>
                <div className={styles.incrementQuantity}>
                    <button className={styles.btnChangeQuantity}>-</button>
                    <div className={styles.quantityText}>{quantity}</div>
                    <button className={styles.btnChangeQuantity}>+</button>
                </div>
                <span className={styles.productPrice}>{product.frontmatter.price}</span>
            </div>
        </div>


    );
}


export default ShoppingCartProduct;