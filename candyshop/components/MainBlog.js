import Image from 'next/image';
import styles from '../styles/Blogs.module.css'

const MainBlog = ({ title, cta_text, picture }) => {
    return (
            <>
            <div className={styles.mainBlogWrapper}>
                <Image
                className={styles.mainPic}
                width={405}
                height={440}
                src={picture}
                alt="profile image"
            />
            <div className={styles.mainBlogContentWrapper}>
                <p className={styles.mainTitle}>{title}</p>
                <div className={styles.textBtnWrapper}>
                <p className={styles.ctaText}>{cta_text}</p>
                <button type="button">READ MORE</button>
            </div>
                </div>
                </div>
            </>
    );
};

export default MainBlog;