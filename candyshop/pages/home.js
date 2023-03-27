import Footer from '../components/Footer';
import FirstBanner from '../components/FirstBanner';
import StoryBanner from '../components/StoryBanner';
import AboutUs from '../components/AboutUs';
import Header2 from '../components/Header2';
import BlogHomeArea from '../components/BlogHomeArea';
import HomeCarousel from '../components/HomeCarousel';
import prisma from '../prisma/client';




/*USED TO GET BLOG POSTS FROM SERVER - IMPLEMENT WHEN IMPLEMENTINGF PRODUCTS AS WELL */
export async function getServerSideProps() {
    
  try {
      const blogs = await prisma.blog.findMany({
        orderBy: {
          date: 'desc'
        },
        take: 3,
      })
      const products = await prisma.candy.findMany({
        take: 9,
        include:{
          category: {
            select:{
              name: true,
            }
          }
        }
      })
      return {
          props: {
            posts: JSON.parse(JSON.stringify(blogs)),
            products: JSON.parse(JSON.stringify(products)),
          },
      }
  } catch (error) {
      return {
          props: {
            posts: [],
            products: [],
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
            <HomeCarousel products={products}/>
            <StoryBanner />
            <AboutUs />
            <BlogHomeArea blogPosts={blogPosts}/>
            <Footer />
        </>
    );
};


export default Hello;