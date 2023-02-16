import Image from 'next/image'
import styles from '../styles/FeaturingCandy.module.css'
import MainProductCard from './MainProductCard';
import SideProductCard from './SideProductCard';
import React, { useState } from 'react';

const FeaturingCandy = ({products}) => {
    const [prev, setPrev] = useState(0);
    const [pic, setPic] = useState(1);
    const [next, setNext] = useState(2);
    function multipleStates(pr, pi, ne) {
        setPrev(pr)
        setPic(pi)
        setNext(ne)
    }
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
                            onClick={() =>{ if(prev == 0)
                                                return multipleStates(products.length - 3, products.length - 2, products.length - 1)
                                            else
                                                return multipleStates(next - 5, next - 4, next - 3)
                            }}
                        />
                    </button>
                    <div className={styles.productContainer}>
                            {products.slice(prev, prev + 1).map((product) => (
                        <SideProductCard key={product.frontmatter.id} product={product} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                    ))}
                        {products.slice(pic, pic + 1).map((product) => (
                            <MainProductCard key={product.frontmatter.id} product={product} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                        ))}
                        {products.slice(next, next + 1).map((product) => (
                        <SideProductCard key={product.frontmatter.id} product={product} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                    ))}
                    </div>
                    <button className={styles.buttonNext}>
                        <Image
                            src={'/productPics/Arrow.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageArrow}
                            onClick={() =>{ if(next == (products.length - 1))
                                                return multipleStates(0, 1, 2)
                                            else
                                                return multipleStates(prev + 3, prev + 4, prev + 5)
                                            }}
                        />
                    </button>
                </div>
            </section>

        </>
    );
};

export default FeaturingCandy;