import React from 'react';
import Image from 'next/image'
import styles from '../styles/BlogHomeArea.module.css'
import Link from 'next/link';



const BlogSection = ({ post }) => {
    return (
        <>
            <Link href={`../blog/${post.slug}`} className={styles.linkWrapper}>
                    <Image
                    className={styles.blogPics}
                    width={325}
                    height={238}
                    src={post.frontmatter.picture}
                    alt="picture"
                />
                <div className={styles.miniBlogContentWrapper}>
                    <p className={styles.title}>{post.frontmatter.title}</p>
                    <p className={styles.ctaText}>{post.frontmatter.cta}</p>
                    <p className={styles.ctaText}>{post.frontmatter.date}</p>
                </div>
            </Link>
        </>
    );
};

export default BlogSection;