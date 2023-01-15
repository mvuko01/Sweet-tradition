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

import matter from 'gray-matter'


const Hello = (props) => {
    const blogPosts = props.posts;
    return (
        <>
            <Header />
            <FirstBanner />
            <FeaturingCandy />
            <StoryBanner />
            <AboutUs />
            <h1 className={styles.blogsHeading}>BLOGS</h1>
            {blogPosts.slice(6,9).map((post) => (
              <BlogSection key={post.frontmatter.id} post={post} />
            ))}
            <Link href={navigationItems.at(2).path} key={navigationItems.at(2).label} passHref>
                    <button type="button" className={styles.buttonBlogs}>READ MORE BLOGS</button>
                </Link>  
            <Footer />
        </>
    );
};

import fsPromises from 'fs/promises';
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {

  //Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  //Get slug and frontmatter from posts
  const posts = files.map(filename => {
    //Create slug
    const slug = filename.replace('.md', '')

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const {data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  const filePath1 = path.join(process.cwd(), '/constants/products.json');
  const jsonData1 = await fsPromises.readFile(filePath1);
  const objectData1 = JSON.parse(jsonData1);

  return {
    
    props: {
      posts: posts,
      objectData1
    }
  }
}

export default Hello;