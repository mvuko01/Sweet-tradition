import Header from '../../components/Header';
import ListProductCard from '../../components/ListProductCard';
import Footer from '../../components/Footer'
import styles from '../../styles/Candy.module.css'
import Image from 'next/image'
import {useState} from 'react';

import matter from 'gray-matter';



const OneCandy = (props) => {
    const products = props.products;


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


    return (
        <>
            <Header />
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
                                src={'/productPics/MaynardWineGums.svg'}
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
                        <div className={styles.sidePicture}>
                            <Image
                                src={'/productPics/MaynardWineGums.svg'}
                                alt=""
                                width={88}
                                height={88}
                                className={styles.sideImageProduct}
                            />
                        </div>
                        <div className={styles.sidePicture}>
                            <Image
                                src={'/productPics/MaynardWineGums.svg'}
                                alt=""
                                width={88}
                                height={88}
                                className={styles.sideImageProduct}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.productInfoContainer}>
                    <h1 className={styles.productName}>Bilar original chewy candy</h1>
                    <h2 className={styles.productShortDescription}>Chewy Sweets, 125g</h2>
                    <div className={styles.productLongDescription}> Ahlgrens Bilar Original – fruit flavoured sweets 125g: fruit flavoured chewy marshmallow cars.
                            One of the most popular sweets in Sweden…and Sweden’s most bought car!
                            One Lot = One Bag x 125 g (4,41oz)</div>
                    <h2 className={styles.productPrice}>4,50€</h2>
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
                    products.slice(0,4).map((product) => (
                        <ListProductCard key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id}/>
                    ))}
                    {/* <ListProductCard/>
                    <ListProductCard/>
                    <ListProductCard/>
                    <ListProductCard/> */}

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

export async function getStaticProps() {


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
      products: products,
    }
  }
}

export default OneCandy;