import Image from 'next/image';
import styles from '../styles/Blogs.module.css'
import Link from 'next/link';
import { limitWords } from '../helpers';

const MainBlog = ({ post }) => {
    let routeString = post.markdown_path.substring(0,post.markdown_path.lastIndexOf(".")) 
    return (
        <>
            <div className={styles.mainBlogWrapper}>
                <Image
                    className={styles.mainPic}
                    width={405}
                    height={440}
                    src={`/blogpics/${post.picture_path}`}
                    alt="profile image"
                    
                />
                <div className={styles.mainBlogContentWrapper}>
                <p className={styles.title}>{post.title}</p>
                <p className={styles.ctaText}>{limitWords(post.cta_text)}</p>
                <Link href={`../blog/${routeString}`} className={styles.link}>
                    <button type="button">READ MORE</button>
                </Link>
                </div>
            </div>
        </>
    );
};

export default MainBlog;