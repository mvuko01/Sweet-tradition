import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2';
import styles from '../../styles/candies.module.css';
import Image from 'next/image';
import blogStyle from '../../styles/Blogs.module.css'



const Candy = () => {
    return (
        <>
            <Header2 />
            <div className={styles.bannerWrapper}>
                <Image
                    width={1900}
                    height={380}
                    src="/candyBanner.svg"
                    alt="profile image"
                    className={styles.banner}
                />
            </div>
            <h1 className={styles.heading}>CANDY SHOP</h1>
                <div className={styles.pageNumberContainer}>
                    <Image
                        width={196}
                        height={220}
                        src="/blogpics/Arrow 2.svg"
                        alt="next page arrow"
                        id={styles.arrow}

                    />
                    <div className={styles.pageNum} id= {styles.currentPage}>1</div>
                    <div className={styles.pageNum} id= {styles.notCurrentPage}>2</div>
                    <div className={styles.pageNum} id= {styles.notCurrentPage}>3</div>
                    <Image
                        width={196}
                        height={220}
                        src="/blogpics/Arrow 1.svg"
                        alt="next page arrow"
                        id={styles.arrow}

                    />
                </div>
            <div className={styles.mainContainer}>
                <div className={styles.filterContainer}>
                    <div className={styles.filterIconAndTextContainer}>
                        <div className={styles.filterIconWrapper}>
                            <Image
                                width={40}
                                height={30}
                                src="/filterIcon.svg"
                                alt="profile image"
                                className={styles.filterIcon}
                            />
                        </div>
                        <label>Filters</label>
                    </div>
                    <select name="Category" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select name="Category" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select name="Category" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>

            </div>
            <div className={styles.pageNumberContainer}>
                    <Image
                        width={196}
                        height={220}
                        src="/blogpics/Arrow 2.svg"
                        alt="next page arrow"
                        id={styles.arrow}

                    />
                    <div className={styles.pageNum} id= {styles.currentPage}>1</div>
                    <div className={styles.pageNum} id= {styles.notCurrentPage}>2</div>
                    <div className={styles.pageNum} id= {styles.notCurrentPage}>3</div>
                    <Image
                        width={196}
                        height={220}
                        src="/blogpics/Arrow 1.svg"
                        alt="next page arrow"
                        id={styles.arrow}

                    />
                </div>
            <Footer />
        </>
    );
};

export default Candy;