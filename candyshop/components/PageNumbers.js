import Image from 'next/image';
import styles from '../styles/candies.module.css';
import Link from 'next/link';


const PageNumber = ({currentPage, handlePageChange, visiblePageNumbers, numberOfPages}) =>{
    return (
        <>
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
        </>
    )
}

export default PageNumber;