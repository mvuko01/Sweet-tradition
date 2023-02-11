import Image from 'next/image';
import styles from '../styles/Cards.module.css'
import Link from 'next/link';
import { useState } from 'react';



const ListProductCard = ({ name, short_description, picture, price, id, product }) => {
    const [isFavourite, setIsFavourite] = useState(false);

    const handleAddToFavouriteClick = (product) => {
        let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
        const index = favourites.findIndex(p => p.frontmatter.id === product.frontmatter.id);
        if (index === -1) {
            favourites.push(product);
            setIsFavourite(true);
        } else {
            favourites.splice(index, 1);
            setIsFavourite(false);
        }
        localStorage.setItem('favourites', JSON.stringify(favourites));
    };
    return (
        <>
        <Link href={`../candy/${product.slug}`}>
            <div className={styles.listProductCard}>
                <div className={styles.productUpper}>
                    <button onClick={() => handleAddToFavouriteClick(product)} className={styles.buttonFavourite}>
                        <Image
                            src={isFavourite === false ? '/productPics/EmptyHeart.svg' : '/productPics/FullHeart.svg'}
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
                    <p className={styles.listProductDescription}>{short_description}</p>
                    <h2 className={styles.listProductName}>{name}</h2>
                    <span className={styles.listProductPrice}>{price}</span>
                    <button className={styles.buttonCart}>
                        <Image
                            src={'/productPics/Add to cart.svg'}
                            width={100}
                            height={100}
                            className={styles.imageCart}
                        />
                    </button>
                </div>
            </div>
        </Link>
        </>
    );
};

export default ListProductCard;