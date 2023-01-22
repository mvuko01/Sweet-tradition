import ListProductCard from '../../components/ListProductCard';
import Footer from '../../components/Footer'
import styles from '../../styles/Candy.module.css'
import Image from 'next/image'
import {use, useState} from 'react';

import matter from 'gray-matter';
import {marked} from 'marked';
import Header2 from '../../components/Header2';



const OneCandy = ({frontmatter, someId, content, products}) => {

    let [count, setCount] = useState(0);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        if(count-1 < 0)
        {
            setCount(count);
        }
        else
            setCount(count - 1);
    }

    // const [categoryCounter, setCategoryCounter] = useState(0);
    // function sameCategory(counter) {
    //     setPrev(pr)
    //     setPic(pi)
    //     setNext(ne)
    // }


    return (
        <>
            <Header2 />
            <div className={styles.productContainer}>
                <div className={styles.pictureContainer}>
                    <div className={styles.mainPictureContainer}>
                        <button className={styles.buttonPrevious}>
                            <Image
                                src={'/productPics/Arrow.svg'}
                                alt=""
                                width={100}
                                height={100}
                                className={styles.imageArrow}
                            />
                        </button>
                        <div className={styles.mainPictureWrapper}>
                            <Image
                                src={frontmatter.picture}
                                alt=""
                                width={390}
                                height={440}
                                className={styles.mainImageProduct}
                            />
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

                    <div className={styles.otherPictureContainer}>
                        <div className={styles.sidePictureWrapper}>
                            <Image
                                src={frontmatter.picture}
                                alt=""
                                width={88}
                                height={88}
                                className={styles.sideImageProduct}
                            />
                        </div>
                        <div className={styles.sidePictureWrapper}>
                            <Image
                                src={frontmatter.picture}
                                alt=""
                                width={88}
                                height={88}
                                className={styles.sideImageProduct}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.productInfoContainer}>
                    <div className={styles.nameAndCountryContainer}>
                        <h1 className={styles.productName}>{frontmatter.name}</h1>
                        <div className={styles.countryPictureWrapper}>
                            <Image
                                src={'/countries/sweden.svg'}
                                alt=""
                                width={55}
                                height={55}
                                className={styles.countryImage}
                            />
                        </div>
                    </div>
                    <h2 className={styles.productShortDescription}>{`${frontmatter.category}, ${frontmatter.quantity}`}</h2>
                    <div dangerouslySetInnerHTML={{__html: marked(content)}} className={styles.productLongDescription}></div>
                    <h2 className={styles.productPrice}>{frontmatter.price}</h2>
                    <div className={styles.incrementQuantity}>
                        <button className={styles.btnChangeQuantity} onClick={decrementCount}>-</button>
                        <div className={styles.quantityText}>{count}</div>
                        <button className={styles.btnChangeQuantity} onClick={incrementCount}>+</button>
                    </div>
                    <div className={styles.addAndFavouriteContainer}>
                        <button className={styles.addToCartbtn}>Add to cart</button>
                        <button className={styles.buttonFavourite}>
                            <Image
                                src={'/productPics/EmptyHeart.svg'}
                                alt="Empty heart"
                                width={100}
                                height={100}
                                className={styles.imageFavourite}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.recommendContainer}>
                <div className={styles.titleAndBackgroundContainer}>
                    <div className={styles.backgroundWrapperLeft}>
                        <Image
                            src={'/lollipopBackground.svg'}
                            alt=""
                            width={170}
                            height={344}
                            className={styles.imageLollipop}
                        />
                    </div>
                    <h2 className={styles.reccommendTitle}>You may also like</h2>
                    <div className={styles.backgroundWrapperRight}>
                        <Image
                            src={'/lollipopBackground.svg'}
                            alt=""
                            width={170}
                            height={344}
                            className={styles.imageLollipop}
                        />
                    </div>
                </div>
                <div className={styles.recommendProductContainerAndArrows}>
                    {/*<button className={styles.buttonPrevious}>
                        <Image
                            src={'/productPics/Arrow.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageArrow}
                        />
                    </button>*/}
                    <div className={styles.reccomendProductContainer}>
                        {
                           products.filter(product => product.frontmatter.category === frontmatter.category && product.frontmatter.name !== frontmatter.name)
                           .slice(0,4).map(filteredProduct => (
                            <ListProductCard key={filteredProduct.frontmatter.id} name={filteredProduct.frontmatter.name} short_description={`${filteredProduct.frontmatter.category}, ${filteredProduct.frontmatter.quantity}`} picture={filteredProduct.frontmatter.picture} price={filteredProduct.frontmatter.price} id={filteredProduct.frontmatter.id}/>
                          ))
                        }
                    </div>
                    {/*<button className={styles.buttonNext}>
                        <Image
                            src={'/productPics/Arrow.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageArrow}
                        />
                    </button>*/}
                </div>

            </div>
            <Footer />
        </>
    );
};

import fs from 'fs'
import path from 'path'


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('products'))

    const paths = files.map(filename => ({
        params: {
            someId: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { someId } }) {


    const markdownWithMeta = fs.readFileSync(path.join('products', someId + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markdownWithMeta)

    //Get files from the posts dir
    const productFiles = fs.readdirSync(path.join('products'))

    //Get slug and frontmatter from posts
    const products = productFiles.map(filename => {
        const slug = filename.replace('.md', '')

    //Get frontmatter
        const markdownWithMeta = fs.readFileSync(path.join('products', filename), 'utf-8')
        const {data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })
   
    return {
        props: {
            frontmatter,
            someId,
            content,
            products
        },
    };
}

export default OneCandy;