import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { navigationItems } from '../constants/navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {useState, useRef} from 'react';
import ShoppingCart from './ShoppingCart';

const Header2 = () => {
    const router = useRouter();
    const currentPage = router.pathname;
    const navRef = useRef();

    const [isNavbarBurgerOn, setIsNavbarBurgerOn] = useState(false);
    const[isCartOn, setIsCartOn] = useState(false);


    function handleHamburgerClick()
    {
        
        setIsNavbarBurgerOn(!isNavbarBurgerOn);
    }

    return (
        <header className={styles.headerContainer}>
            <Link className={styles.logoWrapper} href={"/home"} passHref>
                <Image
                    src={'/headerlogo.svg'}
                    alt="Logo"
                    width={430}
                    height={80}
                    className={styles.logoImage}
                />
            </Link>
            
            
            <div className={styles.navbarContainer}>
                <div   onClick={handleHamburgerClick}  className={styles.hamburgerWrapper}>
                    <Image
                        src={isNavbarBurgerOn ? '/close.svg' : '/Hamburger.svg'}
                        alt="hamb"
                        width={20}
                        height={20}
                        className={styles.hamburgerImage}
                    />
                </div>
                
                <div  className={isNavbarBurgerOn ? styles.textNavigationContainerActive : styles.textNavigationContainer }>
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
                                width={35}
                                height={35}
                                className={styles.searchIcon}
                                />
                            </div>
                            
                        </Link>
                    </div>
                    <div className={styles.iconContainer}>
                        {navigationItems.slice(4,5).map(({ label, path }) => (
                            <Link className={styles.iconLinkWrapper} href={path} key={label} passHref>
                                <Image
                                    src={`${path}.svg`}
                                    alt={label}
                                    width={40}
                                    height={40}
                                    className={styles.icon}
                                />
                            </Link>
                        ))}
                        {navigationItems.slice(5,6).map(({ label, path }) => (
                            <Link className={styles.iconLinkWrapper} href={path} key={label} passHref>
                                <div className={styles.productCounter}>
                                    <p>2</p>
                                </div>
                                
                                <Image
                                    src={`${path}.svg`}
                                    alt={label}
                                    width={40}
                                    height={40}
                                    className={styles.icon}
                                />
                            </Link>
                        ))}
                        {navigationItems.slice(6,7).map(({ label, path }) => (
                            <div onClick={()=> setIsCartOn(!isCartOn)} className={styles.iconLinkWrapper}  key={label} passHref>
                                <div className={styles.productCounter}>
                                    <p>10</p>
                                </div>
                                <Image
                                    src={`${path}.svg`}
                                    alt={label}
                                    width={40}
                                    height={40}
                                    className={styles.icon}
                                />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            {/*isCartOn && <ShoppingCart stateChanger={setIsCartOn} state={isCartOn}/>*/}
            <ShoppingCart stateChanger={setIsCartOn} state={isCartOn}/>

        </header>
    );
};

export default Header2;