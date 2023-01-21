import Image from 'next/image'
import styles from '../styles/Home.module.css'

const AboutUs = () => {
    return (
        <>
        <h1 className={styles.AUHeading}>ABOUT US</h1>
            <div className={styles.mainContainter}>
                <div className={styles.firstWrapper}>
                    <Image
                                    src={'/Image about 1.svg'}
                                    alt="About us image 1"
                                    width={495}
                                    height={359}
                                    className={styles.image1}
                    />
                    <p className={styles.text}>Candy shop sweet tradition is a one-stop destination for the sweet tooth. We offer a wide selection of premium-grade candy, from classic favorites like chocolate, gummies, and caramels to more unique and hard-to-find treats.</p>
                </div>
               <div className={styles.secondWrapper}>
                    <p className={styles.text}>Our commitment to quality and customer service has earned us a reputation for being the best candy shop around. Whether you&#39;re looking for something special for a birthday or just want to indulge your sweet tooth, you&#39;l find just what you&#39;re looking for in our candy shop.</p>
                    <Image
                                    src={'/Image about 2.svg'}
                                    alt="About us image 2"
                                    width={495}
                                    height={359}
                                    className={styles.image2}
                    />
                </div> 
            </div>
        </>
    );
};
export default AboutUs;