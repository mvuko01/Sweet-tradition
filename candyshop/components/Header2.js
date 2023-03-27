import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { navigationItems } from '../constants/navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {useState, useRef, useEffect, useContext} from 'react';
import ShoppingCart from './ShoppingCart';
import { MyContext } from '../context.js'
import useAuth from "../hooks/useAuth";

const Header2 = () => {
    const router = useRouter();
    const currentPage = router.pathname;
    const navRef = useRef();
    const {inMyShoppingCart, inMyFavourites} = useContext(MyContext);

    let totalQuantity = 0;
    inMyShoppingCart.forEach((product) => {
        totalQuantity += product.cart_quantity;
    });

    const [isNavbarBurgerOn, setIsNavbarBurgerOn] = useState(false);
    const[isCartOn, setIsCartOn] = useState(false);


    function handleHamburgerClick()
    {
        setIsNavbarBurgerOn(!isNavbarBurgerOn);
    }

    const { token, email, removeAuth } = useAuth();
    let username;
    if(token){
    username = email.split('@');
    }

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        removeAuth();
        setShowDropdown(false);
    };

    let logoutRef = useRef();
    useEffect(() => {
        let handler = (e) =>{
            if(logoutRef.current && !logoutRef.current.contains(e.target))
            {
                setShowDropdown(false);
            }
        
        };
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    })
    const [searchQuery, setSearchQuery] = useState('');

    // const handleSearchSubmit = (event) => {
    //     event.preventDefault();
    //     router.push(`/candy/candy?query=${searchQuery}`);
    // };

    return (
        <header className={styles.headerContainer}>
            <Link className={styles.logoWrapper} href={"/home"}>
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
                <form onSubmit={(event) => {
                    event.preventDefault(); // prevent the default form submission behavior
                    window.location.href = `/candy/candy/?query=${searchQuery}`; // navigate to the search results page
                }}>
                    <div className={styles.searchContainer}>
                        <input type="text" value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)} 
                            placeholder="Search" className={styles.searchInput}></input>
                        <Link href={`/candy/candy/?query=${searchQuery}`}> 
                            <div className={styles.searchPictureWrapper}>
                                <Image
                                src={'/IconSearch.svg'}
                                alt="Search"
                                width={35}
                                height={35}
                                className={styles.searchIcon}
                                />
                            </div>
                            
                        </Link>
                    </div>
                </form>
                    <div className={styles.iconContainer}>
                        {token ? <div ref={logoutRef} className={styles.dropdown}>
                            <button className={styles.hiUser} onClick={toggleDropdown}>
                                Hi, {username[0]}
                            </button>
                            <div className={showDropdown !== true ? styles.caret : styles.caretRotate}></div>

                            {showDropdown && (
                                <div className={styles.dropdownContent}>
                                    <div className={styles.logout}>Admin panel</div>

                                    <button onClick={handleLogout} className={styles.logout}>Logout</button>
                                </div>
                            )}
                            </div>
                        : (navigationItems.slice(4,5).map(({ label, path }) => (
                            <Link className={styles.iconLinkWrapper} href={path} key={label}>
                                <Image
                                    src={`${path}.svg`}
                                    alt={label}
                                    width={40}
                                    height={40}
                                    className={styles.icon}
                                />
                            </Link>
                        )))}
                        {navigationItems.slice(5,6).map(({ label, path }) => (
                            <Link className={styles.iconLinkWrapper} href={path} key={label}>
                                {inMyFavourites.length !== 0 ? (
                                    <div className={styles.productCounter}>
                                        <p>{inMyFavourites.length}</p>
                                    </div>)
                                : null}
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
                                {totalQuantity !== 0 ? 
                                (<div className={styles.productCounter}>
                                    <p>{totalQuantity}</p>
                                </div>)
                                : null}
                                
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

export async function getStaticProps(context) {
    const { query } = context;
    const searchQuery = query.query || '';

    //Get files from the posts dir
    const productFiles = fs.readdirSync(path.join('products'))
  
    //Get slug and frontmatter from posts
    const products = productFiles.map(filename => {
      //Create slug
      const slug = filename.replace('.md', '')
  
      //Get frontmatter
      const markdownWithMeta = fs.readFileSync(path.join('products', filename), 'utf-8')
      const {data:frontmatter} = matter(markdownWithMeta)
      return {
        slug,
        frontmatter
      }
    })

    const filteredProducts = products.filter((product) => {
        return product.frontmatter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.frontmatter.category.toLowerCase().includes(searchQuery.toLowerCase())
    })
    return {
      
      props: {
        products: filteredProducts,
      }
    }
  }

export default Header2;