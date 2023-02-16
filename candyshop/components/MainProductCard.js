import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState, useEffect, useContext} from 'react';
import { handleAddToFavourites, checkIfFavourite, handleAddToShoppingCart } from '../helpers';
import { MyContext } from '../context.js'

const MainProductCard = ({medium, name, short_description, picture, price, id, product }) => {
    const {setInMyShoppingCart, setInMyFavourites, inMyFavourites} = useContext(MyContext);
    return (
        <>
            <div className = {styles.mainProductCard}>
                <div className = {styles.productUpper}>
                    <button onClick={() => handleAddToFavourites(product, setInMyFavourites)} className= {styles.buttonFavourite}>
                    
                        <Image
                            src={checkIfFavourite(product,inMyFavourites) == false ? '/productPics/EmptyHeart.svg' : '/productPics/FullHeart.svg'}
                            alt="Heart icon"
                            width={100}
                            height={100}
                            className ={styles.imageFavourite}
                        />
                    
                    </button>
                    <Image
                        src={picture}
                        alt="Product image"
                        width={100}
                        height={100}
                        className = {styles.imageProduct}
                    />
                </div>
                <div className={styles.productInfo}>
                    <p className={medium ? styles.productDescription : styles.mainProductDescription}>{short_description}</p>
                    <Link href={`../candy/${product.slug}`} className={ medium ? styles.productName : styles.mainProductName}>{name}</Link>
                    <div className={medium ? styles.productPrice : styles.mainProductPrice}>{price}</div>
                    <button className={styles.buttonCart}>
                        <Image
                            src={'/productPics/Add to cart.svg'}
                            alt="Add to cart"
                            width={100}
                            height={100}
                            className ={styles.imageCart}
                            onClick={() => handleAddToShoppingCart(product, setInMyShoppingCart)}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default MainProductCard;