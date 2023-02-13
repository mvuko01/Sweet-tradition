import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { handleAddToFavourites, checkIfFavourite, handleAddToShoppingCart } from '../helpers';

const MainProductCard = ({ name, short_description, picture, price, id, product }) => {
    const [favs, setFavs] = useState([]);
    const [inShoppingCart, setInShoppingCart] = useState([]);

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavs(storedFavourites);

        const storedShoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        setInShoppingCart(storedShoppingCart);
    }, []);
    return (
        <>
            <div className = {styles.mainProductCard}>
                <div className = {styles.productUpper}>
                    <button onClick={() => handleAddToFavourites(product, setFavs)} className= {styles.buttonFavourite}>
                    
                        <Image
                            src={checkIfFavourite(product,favs) == false ? '/productPics/EmptyHeart.svg' : '/productPics/FullHeart.svg'}
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
                    <p className={styles.mainProductDescription}>{short_description}</p>
                    <Link href={`../candy/${product.slug}`} className={styles.mainProductName}>{name}</Link>
                    <div className={styles.mainProductPrice}>{price}</div>
                    <button className={styles.buttonCart}>
                        <Image
                            src={'/productPics/Add to cart.svg'}
                            alt="Add to cart"
                            width={100}
                            height={100}
                            className ={styles.imageCart}
                            onClick={() => handleAddToShoppingCart(product, setInShoppingCart)}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default MainProductCard;