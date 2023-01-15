import Header from '../../components/Header';
import Footer from '../../components/Footer'
import styles from '../../styles/Candy.module.css'
import Image from 'next/image'
import {useState} from 'react';



const oneCandy = () => {
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
                    <button className={styles.buttonPrevious}>
                        <Image
                            src={'/productPics/Arrow.svg'}
                            alt=""
                            width={100}
                            height={100}
                            className={styles.imageArrow}
                        />
                    </button>
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

            </div>
            <Footer />
        </>
    );
};

export default oneCandy;