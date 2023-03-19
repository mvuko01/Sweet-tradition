import React from 'react';
import Image from 'next/image'
import styles from '../styles/BlogHomeArea.module.css'
import Link from 'next/link';



const BlogSection = ({ post }) => {
    let routeString = post.markdown_path.substring(0,post.markdown_path.lastIndexOf(".")) 
    let date = new Date(  post.date ).toLocaleDateString('en-GB', {month: '2-digit',day: '2-digit',year: 'numeric'})
    console.log(post)
    return (
        <>
            <Link href={`../blog/${routeString}`} className={styles.linkWrapper}>
                    <Image
                    className={styles.blogPics}
                    width={325}
                    height={238}
                    src={`/blogpics/${post.picture_path}`}
                    alt="picture"
                />
                <div className={styles.miniBlogContentWrapper}>
                    <p className={styles.title}>{post.title}</p>
                    <p className={styles.ctaText}>{post.cta_text}</p>
                    <p className={styles.ctaText}>{date}</p>
                </div>
            </Link>
        </>
    );
};

export default BlogSection;