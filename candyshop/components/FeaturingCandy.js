import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainProductCard from './MainProductCard';
import SideProductCard from './SideProductCard';
import React, { useState } from 'react';

const FeaturingCandy = ({products}) => {
    console.log(products.length)
    const centralIndex = 1;
    const nextPicture = 1;
    const [pic, setPic] = useState(centralIndex);
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
                            onClick={() => pic == 1 ? setPic(products.length - 2) : setPic(pic - nextPicture)}
                        />
                    </button>
                    <div className={styles.productContainer}>
                        {/* {products.slice(0,3).map((product) => { 
                            if(product.frontmatter.id !== "1")                       
                                return <SideProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                            else
                               return <MainProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                        })} */}
                            {products.slice(pic - 1, pic).map((product) => (
                        <SideProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                    ))}
                        {products.slice(pic, pic + 1).map((product) => (
                            <MainProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                        ))}
                        {products.slice(pic + 1, pic + 2).map((product) => (
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
                            onClick={() => pic <= products.length ? setPic(pic + nextPicture) : setPic(0)}
                        />
                    </button>
                </div>
            </section>

        </>
    );
};

export default FeaturingCandy;