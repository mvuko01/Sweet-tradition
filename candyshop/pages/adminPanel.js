import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styles from '../styles/AdminPanel.module.css';
import CandyAdminPanel from '../components/CandyAdminPanel';
import PageNumber from '../components/PageNumbers';
import { useState } from 'react';
import prisma from '../prisma/client';


export async function getServerSideProps() {
    try {
        const products = await prisma.candy.findMany({
            include:{
                category: {
                  select:{
                    name: true,
                  }
                }
              }
        })
        const categories = await prisma.category.findMany({
            orderBy: {
                name: 'asc'
            },
        })
        return {
            props: {
              products: JSON.parse(JSON.stringify(products)),
              categories: JSON.parse(JSON.stringify(categories)),
            },
        }
    } catch (error) {
        return {
            props: {
              products: [],
              categories: [],
            },
        }
    }
}
const AdminPanel = (props) => {
    const products = props.products;
    const categories = props.categories;
    const productsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentArray, setCurrentArray] = useState(products);
    const numberOfPages = Math.ceil(currentArray.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = currentArray.slice(indexOfFirstProduct, indexOfLastProduct);

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
        firstPageNumber = currentPage - 2;
        lastPageNumber = currentPage;
    }
    const visiblePageNumbers = pageNumbers.slice(firstPageNumber, lastPageNumber + 1);
    return (
        <>
        <Header2 />
        <h1 className={styles.heading}>ADMIN PANEL</h1>
        <PageNumber currentPage={currentPage} handlePageChange={handlePageChange} visiblePageNumbers={visiblePageNumbers} numberOfPages={numberOfPages}/>
        {currentProducts.map((product) => {
            return (
                <CandyAdminPanel key={product.id} product={product} candyCategory={categories} />
            )
        })}
        <PageNumber currentPage={currentPage} handlePageChange={handlePageChange} visiblePageNumbers={visiblePageNumbers} numberOfPages={numberOfPages}/>
        <Footer />
        </>
    )
}

export default AdminPanel;