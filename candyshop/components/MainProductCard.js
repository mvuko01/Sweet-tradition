import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState } from 'react';




const MainProductCard = ({ name, short_description, picture, price, id, product }) => {
    const [isFavourite, setIsFavourite] = useState(false);

    function handleAddToFavouriteClick(){
        setIsFavourite(!isFavourite);
    }

    return (
        <>
            <Link href={`../candy/${product.slug}`} className = {styles.mainProductCard}>
                <div className = {styles.productUpper}>
                    <button onClick={handleAddToFavouriteClick} className= {styles.buttonFavourite}>
                        <Image
                            src={isFavourite == false ? '/productPics/EmptyHeart.svg' : '/productPics/FullHeart.svg'}
                            width={100}
                            height={100}
                            className ={styles.imageFavourite}
                        />
                    </button>
                    <Image
                        src={picture}
                        width={100}
                        height={100}
                        className = {styles.imageProduct}
                    />
                </div>
                <div className={styles.productInfo}>
                    <p className={styles.mainProductDescription}>{short_description}</p>
                    <h2 className={styles.mainProductName}>{name}</h2>
                    <span className={styles.mainProductPrice}>{price}</span>
                    <button className={styles.buttonCart}>
                        <Image
                            src={'/productPics/Add to cart.svg'}
                            width={100}
                            height={100}
                            className ={styles.imageCart}
                        />
                    </button>
                </div>
            </Link>
        </>
    );
};

export default MainProductCard;