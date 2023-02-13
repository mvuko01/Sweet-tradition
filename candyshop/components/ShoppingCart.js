import Image from 'next/image'
import styles from '../styles/ShoppingCart.module.css'
import loginStyle from '../styles/Login.module.css'
import { useState, useEffect } from 'react'
import ShoppingCartProduct from './ShoppingCartProduct'

const ShoppingCart = ({stateChanger, state}) => {
    const [inShoppingCart, setInShoppingCart] = useState([]);

    const [currentState, setCurrentState] = useState(false);
      const handleChangeOfState = (newState) => {
        setCurrentState(newState);
    }

    useEffect(() => {
        const storedShoppingCart = localStorage.getItem('shoppingCart');
        if (storedShoppingCart) {
            setInShoppingCart(JSON.parse(storedShoppingCart));
        }
    }, [currentState]);
    
    // function handleChangeQuantity(product, setInShoppingCart, action) {
    //     let inShoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    //     const index = inShoppingCart.findIndex(p => p.frontmatter.id === product.frontmatter.id);
    //     if (index === -1) {
    //         return;
    //     }
    //     if (action === 'increase') {
    //         inShoppingCart[index].quantity += 1;
    //     } else if (action === 'decrease' && inShoppingCart[index].quantity > 1) {
    //         inShoppingCart[index].quantity -= 1;
    //     }
    //     localStorage.setItem('shoppingCart', JSON.stringify(inShoppingCart));
    //     setInShoppingCart(inShoppingCart);
    // }
    
    const removeFromLocalStorage = (product) => {
        const index = inShoppingCart.findIndex(p => p.frontmatter.id === product.frontmatter.id);
        inShoppingCart.splice(index, 1);
        localStorage.setItem('shoppingCart', JSON.stringify(inShoppingCart));
    }
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
                    {inShoppingCart.map(product => (<ShoppingCartProduct key={product.frontmatter.id} product={product} quantity={product.quantity} removeFromLocalStorage={() =>removeFromLocalStorage(product)} onChangeState={handleChangeOfState} prevState={currentState} />))}
                </div>
                <div className={styles.totalAndCheckoutContainer}>
                    <div className={styles.totalArea}>
                        <span className={styles.totalText}>TOTAL</span>
                        <span className={styles.totalText}>25.7€</span>
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