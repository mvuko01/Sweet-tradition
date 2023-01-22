import Footer from '../../components/Footer'
import Header2 from '../../components/Header2';
import styles from '../../styles/candies.module.css';
import Image from 'next/image';
import blogStyle from '../../styles/Blogs.module.css';
import ListProductCard from '../../components/ListProductCard';
import SideProductCard from '../../components/SideProductCard';

import matter from 'gray-matter'


const Candy = (props) => {
    const products = props.products;
    return (
        <>
            <Header2 />
            <div className={styles.bannerWrapper}>
                <Image
                    width={1900}
                    height={380}
                    src="/candyBanner.svg"
                    alt="profile image"
                    className={styles.banner}
                />
            </div>
            <h1 className={styles.heading}>CANDY SHOP</h1>
                <div className={styles.pageNumberContainer}>
                    <Image
                        width={196}
                        height={220}
                        src="/blogpics/Arrow 2.svg"
                        alt="next page arrow"
                        id={styles.arrow}

                    />
                    <div className={styles.pageNum} id= {styles.currentPage}>1</div>
                    <div className={styles.pageNum} id= {styles.notCurrentPage}>2</div>
                    <div className={styles.pageNum} id= {styles.notCurrentPage}>3</div>
                    <Image
                        width={196}
                        height={220}
                        src="/blogpics/Arrow 1.svg"
                        alt="next page arrow"
                        id={styles.arrow}

                    />
                </div>
            <div className={styles.mainContainer}>
                <div className={styles.filterContainer}>
                    <div className={styles.filterIconAndTextContainer}>
                        <div className={styles.filterIconWrapper}>
                            <Image
                                width={40}
                                height={30}
                                src="/filterIcon.svg"
                                alt="profile image"
                                className={styles.filterIcon}
                            />
                        </div>
                        <label>Filters</label>
                    </div>
                    <select className={styles.customSelect} name="category" id="category">
                        <option selected disabled>Category</option>
                        <option value="mints">Mints</option>
                        <option value="chocolate">Chocolate</option>
                    </select>
                    <select className={styles.customSelect} name="country" id="country">
                        <option selected disabled>Country</option>
                        <option value="croatia">Croatia</option>
                        <option value="italy">Italy</option>
                        <option value="switzerland">Switzerland</option>
                    </select>
                    <select className={styles.customSelect} name="price" id="price">
                        <option selected disabled>Price</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    
                </div>
                <div className={styles.candyContainer}>
                    {products.slice(1,10).map((product)=>{
                       return <SideProductCard className = {styles.product}key={product.frontmatter.id} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id}/>
                    })}
                    
                    

                </div>
            </div>
            <div className={styles.pageNumberContainer}>
                    <Image
                        width={196}
                        height={220}
                        src="/blogpics/Arrow 2.svg"
                        alt="next page arrow"
                        id={styles.arrow}

                    />
                    <div className={styles.pageNum} id= {styles.currentPage}>1</div>
                    <div className={styles.pageNum} id= {styles.notCurrentPage}>2</div>
                    <div className={styles.pageNum} id= {styles.notCurrentPage}>3</div>
                    <Image
                        width={196}
                        height={220}
                        src="/blogpics/Arrow 1.svg"
                        alt="next page arrow"
                        id={styles.arrow}

                    />
                </div>
            <Footer />
        </>
    );
};


import fs from 'fs'
import path from 'path'

export async function getStaticProps() {

  
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
        products: products,
      }
    }
  }


export default Candy;