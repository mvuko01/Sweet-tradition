import styles from '../../styles/BlogPost.module.css'
import Footer from '../../components/Footer';
import Image from 'next/image'
import {marked} from 'marked';
import Header2 from "../../components/Header2";
import SimpleBanner from '../../components/SimpleBanner';
import prisma from '../../prisma/client';

import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';


const exampleContent = ({ blog, post_content}) => {
    
    return (
        <>
            <title>{blog.title}</title>
            <Header2 />
            <SimpleBanner url={`/blogpics/${blog.banner_path}`}/>
            <div className={styles.contentWrapper}>
                <p className={styles.title}>{blog.title}</p>
                <div className={styles.writtenDateWrapper}>
                    <div className={styles.WBandAuthor}>
                        <p className={styles.purple} id={styles.written}>Written by: &nbsp;</p>
                        <p className={styles.boldGray}>{blog.author} &emsp; &nbsp;</p>
                    </div>
                    <div className={styles.date}>
                        <p className={styles.purple}>Date: &nbsp;</p>
                        <p className={styles.boldGray}>{blog.date}</p>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: marked(post_content) }} className={styles.text}></div>
            </div>
            <Footer />
        </>
    );
};

/*
OLD CODE BEFORE DATABASE IMPLEMENTATION
*/

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            someId: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { someId } }) {

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                markdown_path: `${someId}.md`
            }
        })
        
        const markdownWithMeta = fs.readFileSync(path.join('posts', someId + '.md'), 'utf-8')
        const {data: frontmatter, content} = matter(markdownWithMeta)

        return {
            props: {
              blog: JSON.parse(JSON.stringify(blog)),
              post_content: content,
            },
        }
    } catch (error) {
        return {
            props: {
              blog: [],
              post_content: '',

            },
        }
    }

}

export default exampleContent;