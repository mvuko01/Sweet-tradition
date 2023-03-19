import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import ListProductCard from '../components/ListProductCard';
import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/favourites.module.css';
import Image from 'next/image';
import SideProductCard from '../components/SideProductCard';

const Favourites = () => {
    const productsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [favourites, setFavourites] = useState([]);

    const numberOfPages = Math.ceil(favourites.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const [heartState, setHeartState] = useState(false);
      const handleHeartClick = (newHeartState) => {
        setHeartState(newHeartState);
    }

    useEffect(() => {
        const localFavourites = localStorage.getItem('favourites');
        if (localFavourites) {
            setFavourites(JSON.parse(localFavourites));
        }
    }, [heartState]);

    const currentProducts = favourites.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
  };

  const pageNumbers = [];
  for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i);
  }

  let firstPageNumber, lastPageNumber;
  if (currentPage <= 2) {
      firstPageNumber = 0;
      lastPageNumber = 2;
  } else if (currentPage >= numberOfPages - 1) {
      firstPageNumber = numberOfPages - 3;
      lastPageNumber = numberOfPages - 1;
  } else {
      firstPageNumber = currentPage - 1;
      lastPageNumber = currentPage + 1;
  }
  const visiblePageNumbers = pageNumbers.slice(firstPageNumber, lastPageNumber + 1);
  return (
    <>
      <Header2 />
        <div className={styles.bannerContainer}>
            <div className={styles.banner}>
            </div>
        </div>
      <h1 className={styles.heading}>FAVOURITES</h1>
      <div className={styles.pageNumberContainer}>
                {currentPage > 1 && (
                <Image
                width={196}
                height={220}
                src="/blogpics/Arrow 2 (1).svg"
                alt="next page arrow"
                id={styles.arrow}
                onClick={() => handlePageChange(currentPage - 1)}
            />
            )}
            {visiblePageNumbers.map((pageNumber) => (
            <button 
                className={styles.pageNum}
                id={pageNumber === currentPage ? styles.currentPage : styles.notCurrentPage}
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
            >
                {pageNumber}
            </button>
            ))}
            {currentPage < numberOfPages && (
            <Image
            width={196}
            height={220}
            src="/blogpics/Arrow 1 (1).svg"
            alt="next page arrow"
            id={styles.arrow}
            onClick={() => handlePageChange(currentPage + 1)}
            />
            )} 
      </div>
      <div className={styles.candyContainer}>
        {currentProducts.map(product => (<SideProductCard onHeartClick={handleHeartClick} prevState={heartState} key={product.id} product={product} />))}
      </div>
      <div className={styles.pageNumberContainer}>
            {currentPage > 1 && (
                <Image
                width={196}
                height={220}
                src="/blogpics/Arrow 2 (1).svg"
                alt="next page arrow"
                id={styles.arrow}
                onClick={() => handlePageChange(currentPage - 1)}
            />
            )}
            {visiblePageNumbers.map((pageNumber) => (
            <button 
                className={styles.pageNum}
                id={pageNumber === currentPage ? styles.currentPage : styles.notCurrentPage}
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
            >
                {pageNumber}
            </button>
            ))}
            {currentPage < numberOfPages && (
            <Image
            width={196}
            height={220}
            src="/blogpics/Arrow 1 (1).svg"
            alt="next page arrow"
            id={styles.arrow}
            onClick={() => handlePageChange(currentPage + 1)}
            />
            )}   
                </div>
      <Footer />
    </>
  );
};

export default Favourites;