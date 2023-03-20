import Image from "next/image";
import styles from '../styles/AdminPanel.module.css';

const CandyAdminPanel = ({product}) => {
    return (
        <>
        <Image
                width={196}
                height={220}
                src={`/productPics/${product.picture_paths[0]}`}
                alt="next page arrow"
            />
        <p className={styles.infoLabels}>NAME</p>
            <p>{product.name}</p>
        <p className={styles.infoLabels}>PRICE</p>
            <p>{product.price}</p>
        <p className={styles.infoLabels}>QUANTITY</p>
            <p>{product.quantity}</p>
        <p className={styles.infoLabels}>CATEGORY</p>
            <p>{product.category.name}</p>
        <button>EDIT</button>
        <button>DELETE</button>
        </>
    );
}
export default CandyAdminPanel;
