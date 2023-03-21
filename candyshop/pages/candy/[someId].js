import ListProductCard from '../../components/ListProductCard';
import Footer from '../../components/Footer'
import styles from '../../styles/Candy.module.css'
import Image from 'next/image'
import {useState, useEffect, useContext} from 'react';
import {MyContext} from '../../context.js';
import prisma from '../../prisma/client';

import { handleAddToFavourites, checkIfFavourite, handleAddToShoppingCart } from '../../helpers';

import matter from 'gray-matter';
import fs from 'fs'
import path from 'path'

import {marked} from 'marked';
import Header2 from '../../components/Header2';

const OneCandy = ({desc_content, product, recommended_products}) => {
    const {setInMyShoppingCart, setInMyFavourites, inMyFavourites} = useContext(MyContext);


    const [heartState, setHeartState] = useState(false);
      const handleHeartClick = (newHeartState) => {
        setHeartState(newHeartState);
    }

    const checkIfFavourite = (inMyFavourites) => {
        const index = inMyFavourites.findIndex(p => p.id === product.id);
            if (index === -1) {
                return false;
            } else {
                return inMyFavourites[index].isFavourite;
            }
      };

    const [count, setCount] = useState(1);

    function incrementCount() {
        
        setCount(count+1);
    }
    function decrementCount() {
        if(count-1 < 1)
        {
            setCount(count);
        }
        else
            setCount(count - 1);
    }

    const productImages = [product.picture_paths[0], product.picture_paths[1], product.picture_paths[2]];
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevImage = () => {
        setCurrentImage((currentImage + productImages.length - 1) % productImages.length);
    };

    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % productImages.length);
    };

    
    return (
        <>
        <title>{product.name}</title>
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
                                onClick={handlePrevImage}
                            />
                        </button>
                        <div className={styles.mainPictureWrapper}>
                            <Image
                                src={`/productPics/${productImages[currentImage]}`}
                                alt=""
                                width={390}
                                height={400}
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
                                onClick={handleNextImage}
                            />
                        </button> 
                    </div>
                    <div className={styles.otherPictureContainer}>
                        {productImages.map((image, index) => (
                            <div className={styles.sidePictureWrapper} key={index}>
                            <Image
                                src={`/productPics/${image}`}
                                alt="Product"
                                width={88}
                                height={88}
                                key={index}
                                className={styles.sideImageProduct}
                                onClick={() => setCurrentImage(index)}
                            />
                            </div>
        ))}
                    </div> 
                </div>
                <div className={styles.productInfoContainer}>
                    <div className={styles.nameAndCountryContainer}>
                        <h1 className={styles.productName}>{product.name}</h1>
                        <div className={styles.pictureAndTextCountryWrapper}>
                            <div className={styles.countryPictureWrapper}>
                                <Image
                                    src={`/countries/${product.country.name}.svg`}
                                    alt=""
                                    width={55}
                                    height={55}
                                    className={styles.countryImage}
                                />
                            </div>
                            <p className={styles.countryShortName}>{product.country.short_name}</p>
                        </div>
                    </div>
                    <h2 className={styles.productShortDescription}>{`${product.category.name}, ${product.quantity}`}</h2>
                    <div dangerouslySetInnerHTML={{__html: marked(desc_content)}} className={styles.productLongDescription}></div>
                    <h2 className={styles.productPrice}>{product.price}</h2>
                    <div className={styles.incrementQuantity}>
                        <button className={styles.btnChangeQuantity} onClick={decrementCount}>-</button>
                        <div className={styles.quantityText}>{count}</div>
                        <button className={styles.btnChangeQuantity} onClick={incrementCount}>+</button>
                    </div>
                    <div className={styles.addAndFavouriteContainer}>
                        <button onClick={() => handleAddToShoppingCart(product, setInMyShoppingCart, count)} className={styles.addToCartbtn}>Add to cart</button>
                        <button onClick={() => {handleAddToFavourites(product, setInMyFavourites); handleHeartClick()}} className={styles.buttonFavourite}>
                            <Image
                                src={checkIfFavourite(inMyFavourites) == false ? '/productPics/EmptyHeart.svg' : '/productPics/FullHeart.svg'}
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
                           recommended_products.map(recommended_product => (
                            <ListProductCard onHeartClick={handleHeartClick} prevState={heartState} key={recommended_product.id}  product={recommended_product}/>
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

    try {
        const candy = await prisma.candy.findFirst({
            where: {
                description_path: `${someId}.md`
            }, 
            include:{
                category: {
                  select:{
                    name: true,
                  }
                },
                country: {
                    select:{
                        name: true,
                        short_name: true,
                  }
                }
            }
        })
        const recommendedProducts = await prisma.candy.findMany({
            where: {
                NOT: {
                    description_path: `${someId}.md`
                },
                category_id: candy.category_id
            }, 
            include:{
                category: {
                  select:{
                    name: true,
                  }
                }
                
            },
            take: 4
        })
        const markdownWithMeta = fs.readFileSync(path.join('products', someId + '.md'), 'utf-8')
        const {data: frontmatter, content} = matter(markdownWithMeta)

        return {
            props: {
              product: JSON.parse(JSON.stringify(candy)),
              desc_content: content,
              recommended_products: JSON.parse(JSON.stringify(recommendedProducts)),
            },
        }
    } catch (error) {
        return {
            props: {
              product: [],
              desc_content: '',
              recommended_products: [],


            },
        }
    }
    /*const markdownWithMeta = fs.readFileSync(path.join('products', someId + '.md'), 'utf-8')

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
            content,
            products
        },
    };*/
}

export default OneCandy;