import Image from 'next/image'
import styles from '../styles/Header.module.css'
import NavBar from './Navbar';
import { navigationItems } from '../constants/navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Header2 = () => {
    const router = useRouter();
    const currentPage = router.pathname;

    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoWrapper}>
                <Image
                    src={'/headerlogo.svg'}
                    alt="Logo"
                    width={430}
                    height={80}
                    className={styles.logoImage}
                />
            </div>
            
            <div className={styles.navbarContainer}>
                <div className={styles.textNavigationContainer}>
                    {navigationItems.slice(0, 3).map(({ label, path }) => (
                        <Link className={currentPage == path ? styles.textNavLinkWrapperActive : styles.textNavLinkWrapperInactive} href={path} key={label} passHref>
                            <p className={currentPage == path ? styles.navLabelWrapperActive : styles.navLabelWrapperInactive}>{label}</p>
                            <div className={currentPage == path ? styles.triangleSelectActive : styles.triangleSelectInactive}> </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.searchAndIconContainer}>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Search" className={styles.searchInput}></input>
                        <Link href={"/"} passHref> 
                            <div className={styles.searchPictureWrapper}>
                                <Image
                                src={'/search.svg'}
                                alt="Search"
                                width={40}
                                height={40}
                                className={styles.searchIcon}
                                />
                            </div>
                            
                        </Link>
                    </div>
                    <div className={styles.iconContainer}>
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

            </div>
        </header>
    );
};

export default Header2;