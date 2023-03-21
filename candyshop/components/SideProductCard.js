import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { handleAddToFavourites, checkIfFavourite, handleAddToShoppingCart } from '../helpers';
import { MyContext } from '../context.js'

const SideProductCard = ({  product, onHeartClick, prevState }) => {
    const {setInMyShoppingCart, setInMyFavourites, inMyFavourites} = useContext(MyContext);
    let routeString = product.description_path.substring(0,product.description_path.lastIndexOf(".")) 
    console.log(routeString)
    const handleHeartClick = () => {
        onHeartClick(!prevState);
    }
    return (
        <>
            <div className={styles.productCard}>
                <div className={styles.productUpper}>
                    <button onClick={() => {handleAddToFavourites(product, setInMyFavourites); handleHeartClick()}} className={styles.buttonFavourite}>
                        <Image
                            src={checkIfFavourite(product,inMyFavourites) == false ? '/productPics/EmptyHeart.svg' : '/productPics/FullHeart.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageFavourite}
                        />
                    </button>
                    <Link href={`../candy/${routeString}`} className={styles.linkWrapper}>
                    <Image
                        src={`/productPics/${product.picture_paths[0]}`}
                        alt=""
                        width={100}
                        height={100}
                        className={styles.imageProduct}
                    />
                    </Link>
                </div>
                <div className={styles.productInfo}>
                    <p className={styles.productDescription}>{`${product.category.name}, ${product.quantity}`}</p>
                    <Link href={`../candy/${routeString}`} className={styles.productName}>{product.name}</Link>
                    <div className={styles.productPrice}>{product.price}</div>
                    <button className={styles.buttonCart}>
                        <Image
                            src={'/productPics/Add to cart.svg'}
                            width={100}
                            height={100}
                            className={styles.imageCart}
                            alt="Add to card"
                            onClick={() => handleAddToShoppingCart(product, setInMyShoppingCart)}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideProductCard;