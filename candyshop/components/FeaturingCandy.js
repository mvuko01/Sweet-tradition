import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainProductCard from './MainProductCard';
import SideProductCard from './SideProductCard';

const FeaturingCandy = ({products}) => {
    return (
        <>
            <section className={styles.product}>
                <h1 className={styles.featuringHeading}>WHAT&#39;S TRENDING</h1>

                <div className={styles.productAndArrowContainter}>
                    <button className={styles.buttonPrevious}>
                        <Image
                            src={'/productPics/Arrow.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageArrow}
                        />
                    </button>
                    <div className={styles.productContainer}>
                        {products.map((product, index) => {
                            if(index !== 1)                       
                                return <SideProductCard  name={product.name} short_description={product.short_description} picture={product.picture} price={product.price} id={product.id} />
                            else
                               return <MainProductCard  name={product.name} short_description={product.short_description} picture={product.picture} price={product.price} id={product.id} />
                        })}
                        

                    </div>
                    <button className={styles.buttonNext}>
                        <Image
                            src={'/productPics/Arrow.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageArrow}

                        />
                    </button>
                </div>
            </section>

        </>
    );
};

export default FeaturingCandy;