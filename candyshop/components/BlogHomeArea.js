import styles from '../styles/BlogHomeArea.module.css'
import BlogSection from './BlogSection';
import { navigationItems } from '../constants/navbar';
import { useRouter } from 'next/router';


const BlogHomeArea = ({blogPosts}) =>{
    const router = useRouter();

    const handleButtonClick = (e) => {
        e.preventDefault();
        router.push(navigationItems.at(2).path);
      }

    return (
        <div>
            <h1 className={styles.blogsHeading}>BLOGS</h1>
            <div className={styles.allBlogsWrapper}>
                {blogPosts.map((post) => (
                    <BlogSection key={post.id} post={post} />
                ))}
            </div>
            <div href={navigationItems.at(2).path} key={navigationItems.at(2).label} passHref className={styles.readMoreBlogs}>
                <button type="button" className={styles.buttonBlogs} onClick={handleButtonClick}>READ MORE BLOGS</button>
            </div>
        </div>
    );
}

export default BlogHomeArea;