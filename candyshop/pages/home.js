import Header from '../components/Header';
import Footer from '../components/Footer';
import FirstBanner from '../components/FirstBanner';
import FeaturingCandy from '../components/FeaturingCandy';
import StoryBanner from '../components/StoryBanner';
import BlogSection from '../components/BlogSection';
import AboutUs from '../components/AboutUs';
import styles from '../styles/Home.module.css'
import { navigationItems } from '../constants/navbar';
import Link from 'next/link';


const Hello = (props) => {
    const posts  = props.objectData.blogs;
    return (
        <>
            <Header />
            <FirstBanner />
            <FeaturingCandy />
            <StoryBanner />
            <AboutUs />
            <h1 className={styles.blogsHeading}>BLOGS</h1>
            {posts.slice(5,8).map((el) => (
                        <BlogSection key={el.id} {...el} />
            ))}
            <Link href={navigationItems.at(2).path} key={navigationItems.at(2).label} passHref>
                    <button type="button" className={styles.buttonBlogs}>READ MORE BLOGS</button>
                </Link>  
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

  const filePath1 = path.join(process.cwd(), '/constants/products.json');
  const jsonData1 = await fsPromises.readFile(filePath1);
  const objectData1 = JSON.parse(jsonData1);

  return {
    
    props: {
      objectData,
      objectData1
    }
  }
}

export default Hello;