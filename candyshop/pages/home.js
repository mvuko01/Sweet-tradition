import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/Home.module.css'

const Hello = () => {
    return (
        <>
            <Header />
            <Image
                src={'/cta banner (3).svg'}
                alt="Banner"
                width={1800}
                height={526}
            />
            <Footer />
        </>
    );
};

export default Hello;