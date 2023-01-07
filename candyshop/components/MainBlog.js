import Image from 'next/image';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link';

const MainBlog = ({ title, cta_text, picture, id }) => {
    return (
            <>
            <div className={styles.mainBlogWrapper}>
                <Link href={`../blog/${id}`} className={styles.mainLink}>
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
                </Link>
                </div>
            </>
    );
};

export default MainBlog;