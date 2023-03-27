import Image from 'next/image'
import styles from '../styles/ShoppingCartProduct.module.css'
import Link from 'next/link'

const ShoppingCartProduct = ({product, cart_quantity, removeFromLocalStorage, handleChangeQuantity, onChangeState, prevState}) => {
    const handleClick = () => {
        onChangeState(!prevState);
    }

    const handleChangeQuantityClick = (action) => {
        handleChangeQuantity(product, action);
    };

    let routeString = product.description_path.substring(0,product.description_path.lastIndexOf(".")) 
    

    return (
        <div className={styles.productContainer}>
            <Link href={`../candy/${routeString}`} className={styles.pictureWrapper}>
                <Image
                    src={`/productPics/${product.picture_paths[0]}`}
                    alt="Product Image"
                    width={130}
                    height={144}
                    className={styles.imageProduct}
                />
            </Link>
            <div className={styles.productInfoContainer}>
            <Link href={`../candy/${routeString}`} className={styles.productName}>{product.name}</Link>
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
                <h3 className={styles.productDescription}>{`${product.category.name}, ${product.quantity}`}</h3>
                <div className={styles.incrementQuantity}>
                    <button className={styles.btnChangeQuantity} onClick={() => {handleChangeQuantityClick('decrease'); handleClick()}}>-</button>
                    <div className={styles.quantityText}>{cart_quantity}</div>
                    <button className={styles.btnChangeQuantity} onClick={() => {handleChangeQuantityClick('increase'); handleClick()}}>+</button>
                </div>
                <span className={styles.productPrice}>{product.price}</span>
            </div>
        </div>


    );
}


export default ShoppingCartProduct;