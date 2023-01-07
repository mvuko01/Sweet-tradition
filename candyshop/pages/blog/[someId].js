import fsPromises from 'fs/promises';
import path from 'path'
import Image from 'next/image';

const SomeBlogPost = ({ someId }) => {
    return (
        <h1 className="text-2xl">
            HI! You are on <span className="text-red-500">{someId}</span>
        </h1>
    );
};

export default SomeBlogPost;


export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), '/constants/blogs.json');
    const jsonData = await fsPromises.readFile(filePath);
    const blogs = JSON.parse(jsonData);
    const paths = blogs.map((blog) => ({
        params: {
            someId: blog.id,
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
    const blogs = JSON.parse(jsonData);

    const blog = blogs[someId];

    return {
        props: {
            blog,
        },
    };
}