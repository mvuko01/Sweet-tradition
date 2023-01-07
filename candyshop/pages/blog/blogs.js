import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Blogs.module.css'
import Blog from '../../components/Blog';
import MainBlog from '../../components/MainBlog';
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
const Blogs = (props) => {
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
            <button type="button" className={styles.addNewBtn} id={styles.firstBtn}>ADD NEW BLOG</button>
            <div className={styles.contentWrapper}>
                    {posts.slice(0,1).map((el) => (
                        <MainBlog key={el.id} {...el} />
                    ))}
                    <div className={styles.miniBlogsWrapper}>
                        {posts.slice(1,4).map((el) => (
                            <Blog key={el.id} {...el} />
                        ))}
                    </div>
                </div>
                <div className={styles.addNewBtnContainer}>
                    <button type="button" className={styles.addNewBtn} id={styles.secondBtn}>ADD NEW BLOG</button>
                </div>
                    <div className={styles.pageWrapper}>
                    <div className={styles.pageNum} id={styles.currentPage}>1</div>
                    <div className={styles.pageNum}>2</div>
                    <div className={styles.pageNum}>3</div>
                    <Image
                    className={styles.pageNum}
                    id={styles.arrow}
                    width={196}
                    height={220}
                    src="/blogpics/Arrow 1.svg"
                    alt="next page arrow"
            />
                </div>
            <Footer />
        </>
    );
};

export default Blogs;