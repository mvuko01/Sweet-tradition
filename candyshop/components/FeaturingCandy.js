import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
                                                return multipleStates(products.length - 1, 0, 1)
                                             if(prev == (products.length - 1))
                                                return multipleStates(products.length - 2,products.length - 1, 0)
                                            if(prev == (products.length - 2))
                                                return multipleStates(products.length - 3, products.length - 2, products.length - 1)
                                            else
                                                return multipleStates(prev - 1, pic - 1, next - 1)
                            }}
                        />
                    </button>
                    <div className={styles.productContainer}>
                            {products.slice(prev, prev + 1).map((product) => (
                        <SideProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                    ))}
                        {products.slice(pic, pic + 1).map((product) => (
                            <MainProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                        ))}
                        {products.slice(next, next + 1).map((product) => (
                        <SideProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
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
                                                return multipleStates(prev + 1, pic + 1, 0)
                                            if(next == 0)
                                                return multipleStates(products.length - 1, 0, 1)
                                            if(next == 1)
                                                return multipleStates(0, 1, 2)
                                            else
                                                return multipleStates(prev + 1, pic + 1, next + 1)
                                            }}
                        />
                    </button>
                </div>
            </section>

        </>
    );
};

export default FeaturingCandy;