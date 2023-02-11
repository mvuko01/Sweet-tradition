import Footer from "./Footer";
import Header from "./Header2";
import Link from "next/link";
import styles from '../styles/NotAuthorized.module.css'
import Image from "next/image";

const NotAuthorized = () => {
    return (
        <>
        <Header />
        <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Please <Link href="/login" className={styles.link}>LOGIN</Link> to write a blog!</h1>
            </div>
            <div className={styles.imageWrapper}>
            <Image
            src={'/notauthorized/candy2.svg'}
            alt="Search"
            width={40}
            height={40}
            className={styles.candyIcon} 
            />
            </div>
        </div>
        <Footer />
        </>
    );
}

export default NotAuthorized;