import Image from 'next/image';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link';
import { limitWords } from '../helpers';

const MainBlog = ({ post }) => {
    return (
        <>
            <div className={styles.mainBlogWrapper}>

                <Image
                    className={styles.mainPic}
                    width={405}
                    height={440}
                    src={post.frontmatter.picture}
                    alt="profile image"
                />
                <div className={styles.mainBlogContentWrapper}>
                <p className={styles.title}>{post.frontmatter.title}</p>
                <p className={styles.ctaText}>{limitWords(post.frontmatter.cta)}</p>
                <Link href={`../blog/${post.slug}`} className={styles.link}>
                    <button type="button">READ MORE</button>
                </Link>
                </div>
            </div>
        </>
    );
};

export default MainBlog;