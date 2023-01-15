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
                        {products.slice(0,3).map((product) => { 
                            if(product.frontmatter.id !== "1")                       
                                return <SideProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                            else
                               return <MainProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
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