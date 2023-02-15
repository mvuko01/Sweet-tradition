import Image from 'next/image';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link';
import { limitWords } from '../helpers';
const Blog = ({ post }) => {
    return (
        <>
            <div className={styles.miniBlogWrapper}>
                <Image
                    className={styles.sidePics}
                    width={196}
                    height={220}
                    src={post.frontmatter.picture}
                    alt="blog wrapper"
                />
                <div className={styles.miniBlogContentWrapper}>
                    <p className={styles.title}>{post.frontmatter.title}</p>

                    <p className={styles.ctaText}>{limitWords(post.frontmatter.cta)}</p>
                    <Link href={`../blog/${post.slug}`} className={styles.link}>
                        <button type="button" className={styles.miniBtn}>READ MORE</button>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Blog;