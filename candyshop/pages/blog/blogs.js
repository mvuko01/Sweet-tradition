import Footer from '../../components/Footer';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Blogs.module.css'
import Blog from '../../components/Blog';
import MainBlog from '../../components/MainBlog';
import fs from 'fs'
import matter from 'gray-matter';
import path from 'path'
import Link from 'next/link';
import Header2 from '../../components/Header2';
import useAuth from "../../hooks/useAuth";
import api from "../../api";

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

  return {
    props: {
        posts: posts
      }
  }
}
const Blogs = (props) => {
    const indexOfFirstBlog = 0;
    const numberOfBlogsPerPage = 4;
    const [page, setPage] = useState(indexOfFirstBlog);
    const blogPosts  = props.posts;

    const { token } = useAuth();
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            return;
        }

        api.addNewBlog(token).then(({ user }) => {
            setLoading(false);
            setCurrentUser(user);
        });
    }, [token]);
    
    return (
        <>
        <title>Blog</title>
            <Header2 />
            {/* <div className={styles.bannerWrapper}>
                <Image
                    width={1900}
                    height={381}
                    src="/blogpics/blogsBanner.svg"
                    alt="profile image"
                    className={styles.banner}
                />
                <p className={styles.textOnBanner}>ARE YOU A CANDY LOVER? 
                    If so, reading <span className={styles.ourBlog}>our blog</span> is a must! we have all the information you need to satisfy your sweet tooth!
                </p>
            </div> */}
            <div className={styles.bannerContainer}>
             <div className={styles.banner}>
                <div className={styles.textFirstBanner}>
                 <p className={styles.shopAt}>ARE YOU A CANDY LOVER? 
                    If so, reading <span className={styles.ourBlog}>our blog</span> is a must! we have all the information you need to satisfy your sweet tooth!
                </p>
                    
                </div>
             </div>
            </div>
            <div className={styles.centerOfPage}>
            {token && (
                    <Link href="/blog/addNewBlog"><button type="button" className={styles.addNewBtn} id={styles.firstBtn}>ADD NEW BLOG</button></Link>
                )}
                <div className={styles.contentWrapper}>
                    <div /*className={styles.blogWrapper}*/ className={styles.gridContainer}>
                        {blogPosts.slice(page, page + 1).map((post) => (
                            <MainBlog key={post.frontmatter.id} post={post}  />
                        ))}

                        {blogPosts.slice(page + 1, page + numberOfBlogsPerPage).map((post) => (
                            <Blog key={post.frontmatter.id} post={post} />
                        ))}

                    </div>
                    <div className={styles.pageWrapper}>
                        <Image
                            id={styles.arrow}
                            className={page == indexOfFirstBlog ? styles.hiddenArrow : null}
                            width={196}
                            height={220}
                            src="/blogpics/Arrow 2 (1).svg"
                            alt="next page arrow"
                            onClick={() => page > 0 ? setPage(page - numberOfBlogsPerPage) : setPage(0)}
                        />
                        <div className={styles.pageNum} id={page == indexOfFirstBlog ? styles.currentPage : styles.notCurrentPage} onClick={() => setPage(indexOfFirstBlog)}>1</div>
                        <div className={styles.pageNum} id={page == (indexOfFirstBlog + numberOfBlogsPerPage) ? styles.currentPage : styles.notCurrentPage} onClick={() => setPage(indexOfFirstBlog + numberOfBlogsPerPage)}>2</div>
                        <div className={styles.pageNum} id={page == (indexOfFirstBlog + numberOfBlogsPerPage * 2) ? styles.currentPage : styles.notCurrentPage} onClick={() => setPage(indexOfFirstBlog + numberOfBlogsPerPage * 2)}>3</div>
                        <Image
                            id={styles.arrow}
                            className={page == (indexOfFirstBlog + numberOfBlogsPerPage * 2) ? styles.hiddenArrow : null}
                            width={196}
                            height={220}
                            src="/blogpics/Arrow 1 (1).svg"
                            alt="next page arrow"
                            onClick={() => page == (indexOfFirstBlog + numberOfBlogsPerPage * 2) ? setPage(indexOfFirstBlog + numberOfBlogsPerPage * 2) : setPage(page + numberOfBlogsPerPage)}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;