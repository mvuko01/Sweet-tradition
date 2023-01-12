import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Blogs.module.css'
import Blog from '../../components/Blog';
import MainBlog from '../../components/MainBlog';
import fsPromises from 'fs/promises';
import path from 'path'
import Link from 'next/link';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/constants/blogs.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}
const Blogs = (props) => {
    const indexOfFirstBlog = 0;
    const numberOfBlogsPerPage = 4;
    const [page, setPage] = useState(indexOfFirstBlog);
    const posts  = props.blogs;
    
    return (
        <>
            <Header />
            <Image
                width={1600}
                height={381}
                src="/blogpics/banner.svg"
                alt="profile image"
                className={styles.banner}
            />
            <Link href="/blog/addNewBlog"><button type="button" className={styles.addNewBtn} id={styles.firstBtn}>ADD NEW BLOG</button></Link>
            <div className={styles.contentWrapper}>
                    {posts.slice(page, page + 1).map((el) => (
                        <MainBlog key={el.id} {...el} />
                    ))}
                    <div className={styles.miniBlogsWrapper}>
                        {posts.slice(page + 1, page + numberOfBlogsPerPage).map((el) => (
                            <Blog key={el.id} {...el} />
                        ))}
                    </div>
                </div>
                    <div className={styles.pageWrapper}>
                    <Image
                    id={styles.arrow}
                    width={196}
                    height={220}
                    src="/blogpics/Arrow 2.svg"
                    alt="next page arrow"
                    onClick={() => page > 0 ? setPage(page - numberOfBlogsPerPage) : setPage(0)}
            />
                    <div className={styles.pageNum} id={page == indexOfFirstBlog ? styles.currentPage : styles.notCurrentPage} onClick={() => setPage(indexOfFirstBlog)}>1</div>
                    <div className={styles.pageNum} id={page == (indexOfFirstBlog + numberOfBlogsPerPage) ? styles.currentPage : styles.notCurrentPage} onClick={() => setPage(indexOfFirstBlog + numberOfBlogsPerPage)}>2</div>
                    <div className={styles.pageNum} id={page == (indexOfFirstBlog + numberOfBlogsPerPage * 2) ? styles.currentPage : styles.notCurrentPage} onClick={() => setPage(indexOfFirstBlog + numberOfBlogsPerPage * 2)}>3</div>
                    <Image
                    id={styles.arrow}
                    width={196}
                    height={220}
                    src="/blogpics/Arrow 1.svg"
                    alt="next page arrow"
                    onClick={() => page == (indexOfFirstBlog + numberOfBlogsPerPage * 2) ? setPage(indexOfFirstBlog + numberOfBlogsPerPage * 2) : setPage(page + numberOfBlogsPerPage)}
            />
                </div>
            <Footer />
        </>
    );
};

export default Blogs;