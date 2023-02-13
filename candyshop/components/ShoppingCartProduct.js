import Image from 'next/image'
import styles from '../styles/ShoppingCartProduct.module.css'
import Link from 'next/link'

const ShoppingCartProduct = ({product, quantity, removeFromLocalStorage, handleChangeQuantity, onChangeState, prevState}) => {
    const handleClick = () => {
        onChangeState(!prevState);
    }

    const handleChangeQuantityClick = (action) => {
        handleChangeQuantity(product, action);
      };

    return (
        <div className={styles.productContainer}>
            <Link href={`../candy/${product.slug}`} className={styles.pictureWrapper}>
                <Image
                    src={product.frontmatter.picture}
                    alt=""
                    width={130}
                    height={144}
                    className={styles.imageProduct}
                />
            </Link>
            <div className={styles.productInfoContainer}>
            <Link href={`../candy/${product.slug}`} className={styles.productName}>{product.frontmatter.name}</Link>
                <div className={styles.removeProductWrapper}>
                    <Image
                        src={'/closeGrey.svg'}
                        alt="close"
                        width={30}
                        height={30}
                        className={styles.removeProductImage}
                        onClick={() => {
                            removeFromLocalStorage();
                            handleClick();
                          }}
                    />
                </div>
                <h3 className={styles.productDescription}>{`${product.frontmatter.category}, ${product.frontmatter.quantity}`}</h3>
                <div className={styles.incrementQuantity}>
                    <button className={styles.btnChangeQuantity} onClick={() => {handleChangeQuantityClick('decrease'); handleClick()}}>-</button>
                    <div className={styles.quantityText}>{quantity}</div>
                    <button className={styles.btnChangeQuantity} onClick={() => {handleChangeQuantityClick('increase'); handleClick()}}>+</button>
                </div>
                <span className={styles.productPrice}>{product.frontmatter.price}</span>
            </div>
        </div>


    );
}


export default ShoppingCartProduct;