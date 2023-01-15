import Header from '../../components/Header';
import Footer from '../../components/Footer'
import styles from '../../styles/Candy.module.css'
import Image from 'next/image'



const oneCandy = () => {
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
                                className={styles.imageProduct}
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
                                className={styles.imageProduct}
                            />
                        </div>
                        <div className={styles.sidePicture}>
                            <Image
                                src={'/productPics/MaynardWineGums.svg'}
                                alt=""
                                width={88}
                                height={88}
                                className={styles.imageProduct}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.candyInfoContainer}>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default oneCandy;