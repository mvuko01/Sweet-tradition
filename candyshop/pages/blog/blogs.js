import Footer from '../../components/Footer';
import React, { useState } from 'react';
import styles from '../../styles/Blogs.module.css'
import Blog from '../../components/Blog';
import MainBlog from '../../components/MainBlog';
/*import fs from 'fs'
import matter from 'gray-matter';
import path from 'path'*/
import Link from 'next/link';
import Header2 from '../../components/Header2';
import useAuth from "../../hooks/useAuth";
import PageNumber from '../../components/PageNumbers';
import prisma from '../../prisma/client'

/*OLD CODE WITHOUT DATABASE AND READING FROM MD */

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

  return {
    props: {
        posts: posts
      }
  }
}*/

export async function getServerSideProps() {
    
    try {
        const blogs = await prisma.blog.findMany()
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



const Blogs =  (props) => {
    const blogPosts  = props.posts;
    const numberOfBlogsPerPage = 4;
    
    /*NOVO */
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = Math.ceil(blogPosts.length / numberOfBlogsPerPage);
    const indexOfLastBlog = currentPage * numberOfBlogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - numberOfBlogsPerPage;
    const currentBlogs = blogPosts.slice(indexOfFirstBlog, indexOfLastBlog);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

   
    const pageNumbers = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i);
    }

    let firstPageNumber, lastPageNumber;
    if (currentPage <= 2) {
        firstPageNumber = 0;
        lastPageNumber = 2;
    } else if (currentPage >= numberOfPages - 1) {
        firstPageNumber = numberOfPages - 3;
        lastPageNumber = numberOfPages - 1;
    } else {
        firstPageNumber = currentPage - 2;
        lastPageNumber = currentPage;
    }
    const visiblePageNumbers = pageNumbers.slice(firstPageNumber, lastPageNumber + 1);

    const { token } = useAuth();

    return (
        <>
        <title>Blog</title>
            <Header2 />
            <div className={styles.bannerContainer}>
             <div className={styles.banner}>
                <div className={styles.textFirstBanner}>
                 <p className={styles.shopAt}>ARE YOU A CANDY LOVER? 
                    If so, reading <span className={styles.ourBlog}>our blog</span> is a must! We have all the information you need to satisfy your sweet tooth!
                </p>
                    
                </div>
             </div>
            </div>
            <div className={styles.centerOfPage}>
            {token && (
                    <Link href="/blog/addNewBlog"><button type="button" className={styles.addNewBtn} id={styles.firstBtn}>ADD NEW BLOG</button></Link>
                )}
                <div className={styles.contentWrapper}>
                    <div className={styles.gridContainer}>
                        {currentBlogs.slice(0,1).map((post) => (
                            <MainBlog key={post.id} post={post} />
                        ))}

                        {currentBlogs.slice(1, 4).map((post) => (
                            <Blog key={post.id} post={post} />
                        ))}

                    </div>

                </div>
                <PageNumber currentPage={currentPage} handlePageChange={handlePageChange} visiblePageNumbers={visiblePageNumbers} numberOfPages={numberOfPages}/>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;