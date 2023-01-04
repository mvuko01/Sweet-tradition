import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './Navbar';

const Header = () => {
    return (
        <header className={styles.headerSticky}>
            <div className={styles.logo}>
                <Image
                src={'/headerlogo.svg'}
                alt="Logo"
                width={429}
                height={79}
                />
            </div>
            <NavBar />
        </header>
    );
};

export default Header;