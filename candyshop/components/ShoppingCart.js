import Image from 'next/image'
import styles from '../styles/ShoppingCart.module.css'
import loginStyle from '../styles/Login.module.css'
import { useState, useEffect, useContext } from 'react'
import ShoppingCartProduct from './ShoppingCartProduct'
import { MyContext } from '../context.js'

const ShoppingCart = ({stateChanger, state}) => {
    const {inMyShoppingCart, setInMyShoppingCart} = useContext(MyContext);

    const [currentState, setCurrentState] = useState(false);
      const handleChangeOfState = (newState) => {
        setCurrentState(newState);
    }

    const handleChangeQuantity = (product, action) => {
        const index = inMyShoppingCart.findIndex(p => p.frontmatter.id === product.frontmatter.id);
        if (action === 'decrease' && inMyShoppingCart[index].quantity > 1) {
            inMyShoppingCart[index].quantity--;
        } else if (action === 'increase') {
            inMyShoppingCart[index].quantity++;
        }
        localStorage.setItem('shoppingCart', JSON.stringify(inMyShoppingCart));
    }
    const removeFromLocalStorage = (product) => {
        const index = inMyShoppingCart.findIndex(p => p.frontmatter.id === product.frontmatter.id);
        inMyShoppingCart.splice(index, 1);
        localStorage.setItem('shoppingCart', JSON.stringify(inMyShoppingCart));
    }

    const totalPrice = inMyShoppingCart.reduce((acc, curr) => {
        return (acc + (curr.frontmatter.price.replace("€", "").replace(",", ".") * curr.quantity));
    }, 0);

    const formattedPrice = totalPrice.toFixed(2).toString().replace(".", ",") + "€";
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
                    {inMyShoppingCart.map(product => (<ShoppingCartProduct key={product.frontmatter.id} product={product} quantity={product.quantity} removeFromLocalStorage={() =>removeFromLocalStorage(product)} handleChangeQuantity={(product, action) => handleChangeQuantity(product, action)} onChangeState={handleChangeOfState} prevState={currentState} />))}
                </div>
                <div className={styles.totalAndCheckoutContainer}>
                    <div className={styles.totalArea}>
                        <span className={styles.totalText}>TOTAL</span>
                        <span className={styles.totalText}>{formattedPrice}</span>
                    </div>
                    <div className={styles.signInBtnWrapper}>
                         <button className={styles.signInBtn}>CHECK OUT</button>
                    </div>

                </div>

            </div>
        </>
    )
}


export default ShoppingCart;