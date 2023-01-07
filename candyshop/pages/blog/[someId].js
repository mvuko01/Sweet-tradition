import styles from '../../styles/BlogPost.module.css'
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image'


const exampleContent = ({post}) => {
    return (
        <>
        <Header />
        <Image
            className={styles.banner}
            src={post.picture}
            alt="post image"
            width={800}
            height={400}
        />
        <div className={styles.contentWrapper}>
        <p className={styles.title}>{post.title}</p>
        <div className={styles.writtenDateWrapper}>
        <p className={styles.purple} id={styles.written}>Written by: &nbsp;</p>
        <p className={styles.boldGray}>{post.author} &emsp; &nbsp;</p>
        <p className={styles.purple}>Date: &nbsp;</p>
        <p className={styles.boldGray}>{post.date}</p>
        </div>
        <p className={styles.text}>{post.full_text}</p>
        </div>
        <Footer />
        </>
    );
};

import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), '/constants/blogs.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    const paths = objectData.blogs.map((post) => ({
        params: {
            someId: post.id,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { someId } }) {
    const filePath = path.join(process.cwd(), '/constants/blogs.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    const post = objectData.blogs.at(someId-1);

    return {
        props: {
            post,
        },
    };
}

export default exampleContent;