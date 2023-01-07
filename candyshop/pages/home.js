import Header from '../components/Header';
import Footer from '../components/Footer';
import FirstBanner from '../components/FirstBanner';
import FeaturingCandy from '../components/FeaturingCandy';
import StoryBanner from '../components/StoryBanner';
import BlogSection from '../components/BlogSection';
import AboutUs from '../components/AboutUs';
import styles from '../styles/Home.module.css'


const Hello = (props) => {
    const posts  = props.blogs;
    return (
        <>
            <Header />
            <FirstBanner />
            <FeaturingCandy />
            <StoryBanner />
            <AboutUs />
            <h1 className={styles.blogsHeading}>BLOGS</h1>
            {posts.slice(0,3).map((el) => (
                        <BlogSection key={el.id} {...el} />
            ))}
            <button type="button" className={styles.buttonBlogs}>READ MORE BLOGS</button>
            <Footer />
        </>
    );
};

import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/constants/blogs.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default Hello;