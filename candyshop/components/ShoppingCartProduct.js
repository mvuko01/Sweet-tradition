import Image from 'next/image'
import styles from '../styles/ShoppingCartProduct.module.css'
import loginStyle from '../styles/Login.module.css'
import { useState } from 'react'

const ShoppingCartProduct = () => {

    const [count, setCount] = useState(1);

    function incrementCount() {
        
        setCount(count+1);
    }
    function decrementCount() {
        if(count-1 < 1)
        {
            setCount(count);
        }
        else
            setCount(count - 1);
    }

    return (
        <div className={styles.productContainer}>
            <div className={styles.pictureWrapper}>
                <Image
                    src={'/productPics/BilarSwedishCandy.svg'}
                    alt=""
                    width={130}
                    height={144}
                    className={styles.imageProduct}
                />
            </div>
            <div className={styles.productInfoContainer}>
                <h2 className={styles.productName}>Bilar original chewy candy</h2>
                <div className={styles.removeProductWrapper}>
                    <Image
                        src={'/closeGrey.svg'}
                        alt="close"
                        width={30}
                        height={30}
                        className={styles.removeProductImage}
                    />
                </div>
                <h3 className={styles.productDescription}>Chewy Sweets, 125g</h3>
                <div className={styles.incrementQuantity}>
                    <button className={styles.btnChangeQuantity} onClick={decrementCount}>-</button>
                    <div className={styles.quantityText}>{count}</div>
                    <button className={styles.btnChangeQuantity} onClick={incrementCount}>+</button>
                </div>
                <span className={styles.productPrice}>4,50€</span>
            </div>
        </div>


    );
}


export default ShoppingCartProduct;