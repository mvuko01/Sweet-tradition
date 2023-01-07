import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Blogs.module.css'

const Blog = ({ title, cta_text, picture }) => {
    return (
        <>
        <div className={styles.miniBlogWrapper}>
                <Image
                className={styles.blogPics}
                width={196}
                height={220}
                src={picture}
                alt="blog wrapper"
            />
            <div className={styles.miniBlogContentWrapper}>
                <p className={styles.title}>{title}</p>
               <div className={styles.textBtnWrapperMini}> 
                    <p className={styles.ctaText}>{cta_text}</p>
                    <button type="button" className={styles.miniBtn}>READ MORE</button>
                </div>
            </div>
        </div>
            </>
    );
};

const MainBlog = ({ title, cta_text, picture }) => {
    return (
            <>
            <div className={styles.mainBlogWrapper}>
                <Image
                className={styles.mainPic}
                width={405}
                height={440}
                src={picture}
                alt="profile image"
            />
            <div className={styles.mainBlogContentWrapper}>
                <p className={styles.mainTitle}>{title}</p>
                <div className={styles.textBtnWrapper}>
                <p className={styles.ctaText}>{cta_text}</p>
                <button type="button">READ MORE</button>
            </div>
                </div>
                </div>
            </>
    );
};

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