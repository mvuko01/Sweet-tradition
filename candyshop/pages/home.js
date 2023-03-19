import Footer from '../components/Footer';
import FirstBanner from '../components/FirstBanner';
import FeaturingCandy from '../components/FeaturingCandy';
import StoryBanner from '../components/StoryBanner';
import BlogSection from '../components/BlogSection';
import AboutUs from '../components/AboutUs';
import Header2 from '../components/Header2';
import BlogHomeArea from '../components/BlogHomeArea';
import HomeCarousel from '../components/HomeCarousel';




/*USED TO GET BLOG POSTS FROM SERVER - IMPLEMENT WHEN IMPLEMENTINGF PRODUCTS AS WELL */
export async function getServerSideProps() {
    
  try {
      const blogs = await prisma.blog.findMany({
        orderBy: {
          date: 'desc'
        },
        take: 3,
      })
      return {
          props: {
            posts: JSON.parse(JSON.stringify(blogs)),
          },
      }
  } catch (error) {
      return {
          props: {
            posts: [],
          },
      }
  }


}


const Hello = (props) => {
    const blogPosts = props.posts;
    const products = props.products;

    return (
        <>
            <title>Sweet tradition</title>
            <Header2 />
            <FirstBanner />
            {/* <HomeCarousel products={products}/> */}
            <StoryBanner />
            <AboutUs />
            <BlogHomeArea blogPosts={blogPosts}/>
            <Footer />
        </>
    );
};


// import fs from 'fs'
// import path from 'path'
// import { useEffect } from 'react';
// import matter from 'gray-matter'
/*export async function getStaticProps() {

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
}*/

export default Hello;