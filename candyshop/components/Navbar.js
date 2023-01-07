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
           {navigationItems.slice(0,3).map(({ label, path }) => (
                <Link href={path} key={label} passHref>
                    <p className={currentPage == path ? styles.activeTab : styles.inactiveTab}>{label}</p>
                </Link>
            ))}
            </div>
            <div className={styles.emptySpace}></div>
            <div className={styles.iconsWrapper}>
            <div className={styles.inputWrapper}>
                <input type="text" placeholder="Search" className={styles.inputNav}></input>
                    <Link href={"/"} passHref> 
                        <Image
                            src={'/search.svg'}
                            alt="Search"
                            width={40}
                            height={40}
                            className={styles.searchIcon}
                            />
                    </Link>
            </div>
            <div className={styles.threeIconsWrapper}>
            {navigationItems.slice(4,7).map(({ label, path }) => (
                <Link href={path} key={label} passHref>
                    <Image
                            src={`${path}.svg`}
                            alt={label}
                            width={40}
                            height={40}
                            className={styles.icon}
                            />
                </Link>
            ))}
            </div>
            </div>
        </nav>
    );
};

export default NavBar;