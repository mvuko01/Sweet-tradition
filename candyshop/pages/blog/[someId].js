import styles from '../../styles/BlogPost.module.css'
import Footer from '../../components/Footer';
import Image from 'next/image'
import {marked} from 'marked';
import Header2 from "../../components/Header2";

const exampleContent = ({frontmatter, someId, content}) => {
    const backgroundStyle = {
        backgroundImage: `url(${frontmatter.pictureB})`,
      };
    return (
        <>
        <title>{frontmatter.title}</title>
        <Header2 />
        <div className={styles.bannerContainer}>
             <div className={styles['banner']} style={backgroundStyle}>
             </div>
            </div>
        {/* <Image
            className={styles.banner}
            src={frontmatter.pictureB}
            alt="post image"
            width={1900}
            height={400}
        /> */}
        <div className={styles.contentWrapper}>
        <p className={styles.title}>{frontmatter.title}</p>
        <div className={styles.writtenDateWrapper}>
            <div className={styles.WBandAuthor}>
                <p className={styles.purple} id={styles.written}>Written by: &nbsp;</p>
                <p className={styles.boldGray}>{frontmatter.author} &emsp; &nbsp;</p>
            </div>
            <div className={styles.date}>
                <p className={styles.purple}>Date: &nbsp;</p>
                <p className={styles.boldGray}>{frontmatter.date}</p>
            </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: marked(content)}} className={styles.text}></div>
        </div>
        <Footer />
        </>
    );
};

import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';

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

    const markdownWithMeta = fs.readFileSync(path.join('posts', someId + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markdownWithMeta)
   
    return {
        props: {
            frontmatter,
            someId,
            content
        },
    };
}

export default exampleContent;