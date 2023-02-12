import Footer from '../../components/Footer'
import Header2 from '../../components/Header2';
import styles from '../../styles/candies.module.css';
import Image from 'next/image';
import blogStyle from '../../styles/Blogs.module.css';
import ListProductCard from '../../components/ListProductCard';
import SideProductCard from '../../components/SideProductCard';
import { useState, useEffect } from 'react';
import React from 'react';

import matter from 'gray-matter'


const Candy = (props) => {
    const products = props.products;
    
    const sortOptions = [
        { label: 'Price - Low to high', id: '1' },
        { label: 'Price - High to low', id: '2' },
        { label: 'Name A-Z', id: '3' },
        { label: 'Name Z-A', id: '4' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentSortOption, setCurrentSortOption] = useState("Sort by");
    const [currentArray, setCurrentArray] = useState(products);

    const productsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = Math.ceil(products.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = currentArray.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
        const sortedProducts = sortProducts(currentArray, currentSortOption);
        setCurrentArray(sortedProducts);
      }, [currentSortOption]);
    
    const sortProducts = (products, sortOption) => {
        const dataToSort = [...products];
        if(sortOption === "Name Z-A"){
                dataToSort.sort((a, b) => a.frontmatter.name > b.frontmatter.name ? -1 : 1);
            }
        else if(sortOption === "Price - Low to high"){
                dataToSort.sort((a, b) => {
                    let priceA = Number(a.frontmatter.price.replace(",", ".").replace("€", ""));
                    let priceB = Number(b.frontmatter.price.replace(",", ".").replace("€", ""));
                    return priceA - priceB;
                  });
        }
        else if(sortOption === "Price - High to low"){
            dataToSort.sort((a, b) => {
                let priceA = Number(a.frontmatter.price.replace(",", ".").replace("€", ""));
                let priceB = Number(b.frontmatter.price.replace(",", ".").replace("€", ""));
                return priceB - priceA;
              }); 
        }
        else {
                dataToSort.sort((a, b) => a.frontmatter.name < b.frontmatter.name ? -1 : 1);
        }
        return dataToSort;
    }

    const handleSortClick = (event) => {
        setCurrentSortOption(event.target.innerHTML);
        setIsOpen(false);
    };

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
        <title>Candy Shop</title>
            <Header2 />
            <div className={styles.bannerWrapper}>
                <Image
                    width={1900}
                    height={380}
                    src="/candyBanner.svg"
                    alt="Candy banner"
                    className={styles.banner}
                />
            </div>
            <h1 className={styles.heading}>CANDY SHOP</h1>
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
                    <select className={styles.customSelect} name="category" id="category">
                        <option selected disabled>Category</option>
                        <option value="mints">Mints</option>
                        <option value="chocolate">Chocolate</option>
                    </select>
                    <select className={styles.customSelect} name="country" id="country">
                        <option selected disabled>Country</option>
                        <option value="croatia">Croatia</option>
                        <option value="italy">Italy</option>
                        <option value="switzerland">Switzerland</option>
                    </select>
                    <select className={styles.customSelect} name="price" id="price">
                        <option selected disabled>Price</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    
                </div>
                <div className={styles.candyContainer}>
                    <div className={styles.dropdown} >
                        <div className={styles.selectDropdown} onClick={() => setIsOpen(!isOpen)}>
                            <span className={styles.selectedDropdownOption}>{currentSortOption}</span>
                            <div className={isOpen !== true ? styles.caret : styles.caretRotate}></div>

                        </div>
                        {isOpen && 
                            <ul className={styles.dropdownMenu}>
                                {sortOptions.map(option => {
                                    return <li key={option.id} onClick={handleSortClick}>{option.label}</li>
                                })}
                            </ul>
                        }
                        
                    </div>
                    {currentProducts.map((product)=>{
                       return <SideProductCard className = {styles.product}key={product.frontmatter.id} product={product} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id}/>
                    })}
                    
                </div>
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


import fs from 'fs'
import path from 'path'

export async function getStaticProps() {

  
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
  
    return {
      
      props: {
        products: products,
      }
    }
  }


export default Candy;