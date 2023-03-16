import Image from 'next/image';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link';
import { limitWords } from '../helpers';
const Blog = ({ post }) => {
    let routeString = post.markdown_path.substring(0,post.markdown_path.lastIndexOf(".")) 
    return (
        <>
            <div className={styles.miniBlogWrapper}>
                <Image
                    className={styles.sidePics}
                    width={196}
                    height={220}
                    src={`/blogpics/${post.picture_path}`}
                    alt="blog wrapper"
                />
                <div className={styles.miniBlogContentWrapper}>
                    <p className={styles.title}>{post.title}</p>

                    <p className={styles.ctaText}>{limitWords(post.cta_text)}</p>
                    <Link href={`../blog/${routeString}`} className={styles.link}>
                        <button type="button" className={styles.miniBtn}>READ MORE</button>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Blog;