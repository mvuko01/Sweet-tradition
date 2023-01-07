import Image from 'next/image';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link';

const Blog = ({ title, cta_text, picture, id }) => {
    return (
        <>
        <div className={styles.miniBlogWrapper}>
        <Link href={`../blog/${id}`} className={styles.miniLink}>
                <Image
                className={styles.blogPics}
                width={196}
                height={220}
                src={picture}
                alt="blog wrapper"
            />
            <div className={styles.miniBlogContentWrapper}>
                <p className={styles.title}>{title}</p>
               <div className={styles.textBtnWrapperMini}>  
                    <p className={styles.ctaText}>{cta_text}</p>
                    <button type="button" className={styles.miniBtn}>READ MORE</button>
                 </div> 
            </div> 
            </Link>
        </div>
            </>
    );
};

export default Blog;