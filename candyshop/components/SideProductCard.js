import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { handleAddToFavourites, checkIfFavourite, handleAddToShoppingCart } from '../helpers';
import { MyContext } from '../shoppingCartContext';

const SideProductCard = ({ name, short_description, picture, price, id, product }) => {
    const [favs, setFavs] = useState([]);
    const {setInMyShoppingCart} = useContext(MyContext);
    
    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavs(storedFavourites);
    }, []);

    return (
        <>
            <div className={styles.productCard}>
                <div className={styles.productUpper}>
                    <button onClick={() => handleAddToFavourites(product, setFavs)} className={styles.buttonFavourite}>
                        <Image
                            src={checkIfFavourite(product,favs) == false ? '/productPics/EmptyHeart.svg' : '/productPics/FullHeart.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageFavourite}
                        />
                    </button>
                    <Image
                        src={picture}
                        alt=""
                        width={100}
                        height={100}
                        className={styles.imageProduct}
                    />
                </div>
                <div className={styles.productInfo}>
                    <p className={styles.productDescription}>{short_description}</p>
                    <Link href={`../candy/${product.slug}`} className={styles.productName}>{name}</Link>
                    <div className={styles.productPrice}>{price}</div>
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