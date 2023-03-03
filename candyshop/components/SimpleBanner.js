import styles from '../styles/BlogPost.module.css'

const SimpleBanner = ({url}) => {

    const backgroundStyle = {
        backgroundImage: `url(${url})`,
    };

    return (
        <>
            <div className={styles.bannerContainer}>
                <div className={styles.banner} style={backgroundStyle}>
                </div> 
            </div>
        </>
    )
}

export default SimpleBanner;
