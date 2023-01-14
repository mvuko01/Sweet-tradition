import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


const BlogSection = ({ /*title, cta_text, picture, date, author, id*/ post }) => {
    return (
        <>
        <div className={styles.blogsWrapper}>
            <div className={styles.miniBlogWrapper}>
            <Link href={`../blog/${post.slug}`} className={styles.link}>
                <Image
                className={styles.blogPics}
                width={196}
                height={220}
                src={post.frontmatter.picture}
                alt="picture"
            />
            <div className={styles.miniBlogContentWrapper}>
                <p className={styles.title}>{post.frontmatter.title}</p>
                <p className={styles.ctaText}>{post.frontmatter.cta}</p>
                <div className={styles.writtenByDiv}>
                {/* <p className={styles.writtenByText}>Written by: &nbsp;</p>
                <p className={styles.writtenByText}>{author}</p> */}
                </div>
                <p className={styles.ctaText}>{post.frontmatter.date}</p>
            </div>
            </Link>
            </div>
        </div>
        </>
    );
};

export default BlogSection;