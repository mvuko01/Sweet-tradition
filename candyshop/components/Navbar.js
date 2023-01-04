import { navigationItems } from '../constants/navbar';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import Image from 'next/image'

import Link from 'next/link';

const NavBar = () => {
    const router = useRouter();
    const currentPage = router.pathname;

    return (
        <nav className={styles.navBar}>
            <div className={styles.textNavWrapper}>
            <Link href={"/home"} passHref><p className={router.pathname == "/home" ? styles.activeTab : styles.inactiveTab}>HOME</p></Link>
            <Link href={"/candy"} passHref><p className={router.pathname == "/candy" ? styles.activeTab : styles.inactiveTab}>CANDY</p></Link>
            <Link href={"/blogs"} passHref><p className={router.pathname == "/blogs" ? styles.activeTab : styles.inactiveTab}>BLOGS</p></Link>
            </div>
            <div className={styles.emptySpace}></div>
            <div className={styles.iconsWrapper}>
            <div className={styles.inputWrapper}>
                <input type="text" placeholder="Search" className={styles.inputNav}></input>
                    <Link href={"/"} passHref> 
                        <Image
                            src={'/Vector (1).svg'}
                            alt="Search"
                            width={40}
                            height={40}
                            className={styles.searchIcon}
                            />
                    </Link>
            </div>
            <div className={styles.threeIconsWrapper}>
                <Link href={"/login"} passHref>
                    <Image
                    src={'/gg_profile.svg'}
                    alt="User"
                    width={40}
                    height={40}
                    className={styles.icon}
                    />
                </Link>
                <Link href={"/favourites"} passHref>
                    <Image
                    src={'/Vector (2).svg'}
                    alt="Favourites"
                    width={40}
                    height={40}
                    className={styles.icon}
                    />
                </Link>
                <Link href={"/bag"} passHref>
                    <Image
                    src={'/Vector (3).svg'}
                    alt="Bag"
                    width={40}
                    height={40}
                    className={styles.icon}
                    />
                </Link>
            </div>
            </div>
        </nav>
    );
};

export default NavBar;