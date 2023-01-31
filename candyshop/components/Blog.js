import Image from 'next/image';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link';

const Blog = ({ post }) => {
    return (
        <>
        <div className={styles.miniBlogWrapper}>
                <Image
                className={styles.blogPics}
                width={196}
                height={220}
                src={post.frontmatter.picture}
                alt="blog wrapper"
            />
            <div className={styles.miniBlogContentWrapper}>
                <p className={styles.title}>{post.frontmatter.title}</p>
               <div className={styles.textBtnWrapperMini}>  
                    <p className={styles.ctaText}>{post.frontmatter.cta}</p>
                    <Link href={`../blog/${post.slug}`} className={styles.miniLink}>
                        <button type="button" className={styles.miniBtn}>READ MORE</button>
                    </Link>
                 </div> 
            </div> 
        </div>
            </>
    );
};

export default Blog;