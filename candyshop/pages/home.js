import Footer from '../components/Footer';
import FirstBanner from '../components/FirstBanner';
import FeaturingCandy from '../components/FeaturingCandy';
import StoryBanner from '../components/StoryBanner';
import BlogSection from '../components/BlogSection';
import AboutUs from '../components/AboutUs';
import styles from '../styles/Home.module.css'
import Header2 from '../components/Header2';
import BlogHomeArea from '../components/BlogHomeArea';

import matter from 'gray-matter'

const Hello = (props) => {
    const blogPosts = props.posts;
    const products = props.products;

    return (
        <>
            <title>Sweet tradition</title>
            <Header2 />
            <FirstBanner />
            <FeaturingCandy products={products}/>
            
            <StoryBanner />
            <AboutUs />
            <BlogHomeArea blogPosts={blogPosts}/>
            
            <Footer />
        </>
    );
};


import fs from 'fs'
import path from 'path'
import { useEffect } from 'react';

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

  //Get files from the posts dir
  const productFiles = fs.readdirSync(path.join('products'))

  //Get slug and frontmatter from posts
  const products = productFiles.map(filename => {
    //Create slug
    const slug = filename.replace('.md', '')

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('products', filename), 'utf-8')
    const {data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  return {
    
    props: {
      posts: posts,
      products: products,
    }
  }
}

export default Hello;