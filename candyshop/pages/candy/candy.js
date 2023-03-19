import Footer from '../../components/Footer'
import Header2 from '../../components/Header2';
import styles from '../../styles/candies.module.css';
import Image from 'next/image';
import SideProductCard from '../../components/SideProductCard';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { categories } from '../../constants/productCategories';
import { countries } from '../../constants/countries';
import matter from 'gray-matter'
import RangeSlider from '../../components/RangeSlider';
import PageNumber from '../../components/PageNumbers';
import { useRouter } from 'next/router';
import SimpleBanner from '../../components/SimpleBanner';


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
        return {
            props: {
              products: JSON.parse(JSON.stringify(products)),
            },
        }
    } catch (error) {
        return {
            props: {
              products: [],
            },
        }
    }
}

const Candy = (props) => {
    const products = props.products;
    const router = useRouter();
    const wantedQuery = router.query.query;
    const sortOptions = [
        { label: 'Price - Low to high', id: '1' },
        { label: 'Price - High to low', id: '2' },
        { label: 'Name A-Z', id: '3' },
        { label: 'Name Z-A', id: '4' },
    ];

    /*PRIVREMENOOOOOOO */

    // var myFunc;
    // (myFunc = async function(){
    //     const data = await fetch('/api/createCountry' ,{
    //         method: "POST",
    //         body: JSON.stringify({candyArray})
    //     })
    //     const res = await data.json()
    //     if(!res.ok) console.log (res);
    // })()
    
    /*async function getCountries(){
        const countriess = await fetch("/api/getCountry")
        if(!countriess.ok){
            console.log(countriess)
        }
        return countriess.json()
    }

    async function getCategories(){
        const categoriess = await fetch("/api/getCategory")
        if(!categoriess.ok){
            console.log(categoriess)
        }
        return categoriess.json()
    }*/


    
    /*var myFunc;
    (myFunc = async function(){
        const Kantry = await getCountries();
        const Kategory = await getCategories();
        
        let candyArray =[];
        products.forEach(product => {
            
            let currentCountry = Kantry.find(country => country.name == product.frontmatter.country || country.short_name == product.frontmatter.country);
            let currentCategory = Kategory.find(categoryy => categoryy.name == product.frontmatter.category);
            let picture1 = product.frontmatter.picture.substring(product.frontmatter.picture.lastIndexOf("/") + 1,);
            let picture2 = product.frontmatter.picture2.substring(product.frontmatter.picture2.lastIndexOf("/") + 1,);
            let picture3 = product.frontmatter.picture3.substring(product.frontmatter.picture3.lastIndexOf("/") + 1,);

            let path = product.slug +".md";

            let obj ={
                name: product.frontmatter.name,
                picture_paths: [picture1, picture2, picture3],
                price: product.frontmatter.price,
                description_path: path,
                category_id: currentCategory.id,
                country_id: currentCountry.id,
                quantity: product.frontmatter.quantity
            }
            candyArray.push(obj)
        });

        const data = await fetch('/api/createCountry' ,{
                    method: "POST",
                    body: JSON.stringify(candyArray)
        })
        const res = await data.json()
        if(!res.ok) console.log (res);
    })()*/
   
    /*PRIVREMENOOOOOOO */
    

    const [isCheckedCategory, setIsCheckedCategory] = useState([]);
    const [isOpenCategory, setIsOpenCategory] = useState(false);

    const prices = products.map(product => parseFloat(product.price.replace(",", ".").replace("€", "")));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const [currentMin, setCurrentMin] = useState(minPrice);
    const [currentMax, setCurrentMax] = useState(maxPrice);


    function handleAddCategoryFilter(e){
        const name = e.currentTarget.childNodes[1].innerText;
        if(isCheckedCategory.includes(name)){
            setIsCheckedCategory(isCheckedCategory.filter(id => id != name))
        } else {
            setIsCheckedCategory(newArray => [...isCheckedCategory, name]);

        }
    }

    const[isCheckedCountry, setIsCheckedCountry] = useState([]);
    const [isOpenCountry, setIsOpenCountry] = useState(false);
    function handleAddCountryFilter(e){
        const name = e.currentTarget.childNodes[1].innerText;
        if(isCheckedCountry.includes(name)){
            setIsCheckedCountry(isCheckedCountry.filter(id => id != name))
        } else {
            setIsCheckedCountry(newArray => [...isCheckedCountry, name]);

        }
    }


    const [isOpenSort, setisOpenSort] = useState(false);
    const [currentSortOption, setCurrentSortOption] = useState("Sort by");
    const [currentArray, setCurrentArray] = useState(products);

    const [isOpenFilter, setIsOpenFilter] = useState(false);

    /*USED FOR CALCULATING NUMBER OF PAGES */
    const productsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = Math.ceil(currentArray.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = currentArray.slice(indexOfFirstProduct, indexOfLastProduct);

    const [isSearchSuccessful, setIsSearchSuccessful] = useState(true);
    let countryFilterRef = useRef();
    let categoryFilterRef = useRef();
    let applyFilterRef = useRef();

    useEffect(() => {
        let handler = (e) =>{
            if(countryFilterRef.current && (!countryFilterRef.current.contains(e.target) && !categoryFilterRef.current.contains(e.target)))
            {
                if(applyFilterRef.current && applyFilterRef.current.contains(e.target))
                {
                    setIsOpenFilter(false);
                }
                setIsOpenCountry(false);
            }
            if(categoryFilterRef.current && (!categoryFilterRef.current.contains(e.target) && !countryFilterRef.current.contains(e.target)))
            {
                setIsOpenCategory(false);
            }

        };
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    })

    useEffect(() => {
        let filteredProducts = products;

        if(wantedQuery){
            filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(wantedQuery.toLowerCase())
            || product.category.toLowerCase().includes(wantedQuery.toLowerCase());
        });
        }

        if(isCheckedCategory.length != 0){
            filteredProducts = filteredProducts.filter(product => {
                return isCheckedCategory.includes(product.category);
            });
        }

        if(isCheckedCountry.length != 0){
        filteredProducts = filteredProducts.filter(product => {
            const countryCode = product.country;
            const countryName = countryCode === "UK" ? "United Kingdom" : countryCode; // map "UK" to "United Kingdom"
            return isCheckedCountry.includes(countryName) || isCheckedCountry.includes(countryCode);
        });
        }

        filteredProducts = filteredProducts.filter(product => {
            const price = parseFloat(product.price.replace(",", ".").replace("€", ""));
            return price >= currentMin && price <= currentMax;
        });

        const sortedProducts = sortProducts(filteredProducts, currentSortOption);
        setCurrentArray(sortedProducts);

        setCurrentPage(1);
        if(wantedQuery && filteredProducts.length === 0){
            setIsSearchSuccessful(false);
        }
        else{
            setIsSearchSuccessful(true);
        }
      }, [currentSortOption, isCheckedCategory, isCheckedCountry, currentMin, currentMax, wantedQuery, isSearchSuccessful]);

    const sortProducts = (products, sortOption) => {
        const dataToSort = [...products];
        if(sortOption === "Name Z-A"){
                dataToSort.sort((a, b) => a.name > b.name ? -1 : 1);
            }
        else if(sortOption === "Price - Low to high"){
                dataToSort.sort((a, b) => {
                    let priceA = Number(a.price.replace(",", ".").replace("€", ""));
                    let priceB = Number(b.price.replace(",", ".").replace("€", ""));
                    return priceA - priceB;
                  });
        }
        else if(sortOption === "Price - High to low"){
            dataToSort.sort((a, b) => {
                let priceA = Number(a.price.replace(",", ".").replace("€", ""));
                let priceB = Number(b.price.replace(",", ".").replace("€", ""));
                return priceB - priceA;
              });
        }
        else {
                dataToSort.sort((a, b) => a.name < b.name ? -1 : 1);
        }
        return dataToSort;
    }

    const handleSortClick = (event) => {
        setCurrentSortOption(event.target.innerHTML);
        setisOpenSort(false);
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
        firstPageNumber = currentPage - 2;
        lastPageNumber = currentPage;
    }
    const visiblePageNumbers = pageNumbers.slice(firstPageNumber, lastPageNumber + 1);
    const [heartState, setHeartState] = useState(false);
      const handleHeartClick = (newHeartState) => {
        setHeartState(newHeartState);
    }
    return (
        <>
        <title>Candy Shop</title>
            <Header2 />
            <SimpleBanner url = "/candyBanner.svg"/>
            {wantedQuery == undefined && <h1 className={styles.heading}>CANDY SHOP</h1>}
            {wantedQuery != undefined &&
                <h2 className={styles.heading}>Search results for &#34;{wantedQuery}&#34;</h2>
            }
            <PageNumber currentPage={currentPage} handlePageChange={handlePageChange} visiblePageNumbers={visiblePageNumbers} numberOfPages={numberOfPages}/>

            <div className={styles.mainContainer}>
                {isSearchSuccessful &&
                <>
                <div className={styles.filterIconAndTextContainer} onClick={()=> setIsOpenFilter(!isOpenFilter)}>
                    <div className={styles.filterIconWrapper}>
                        <Image
                            width={40}
                            height={30}
                            src="/filterIcon.svg"
                            alt="profile image"
                            className={isOpenFilter ? styles.filterIconActive : styles.filterIconInactive}
                        />
                    </div>
                    <label>Filters</label>
                </div>
                <div className={isOpenFilter ? styles.filterContainer : styles.filterContainerInactive}>
                    <div className={styles.filters}>
                        <div ref={categoryFilterRef} className={styles.filterDropdown} >
                            <div className={styles.mainFilterDiv} onClick={() => setIsOpenCategory(!isOpenCategory)}>
                                <label>Category</label>
                                <div className={styles.dropdownIconWrapper}>
                                    <Image
                                        width={40}
                                        height={30}
                                        src="/blogpics/Arrow 2 (1).svg"
                                        alt="dropdown arrow"
                                        className={isOpenCategory ? styles.dropdownIconActive : styles.dropdownIconInactive}
                                    />
                                </div>
                            </div>
                            <div className={ isOpenCategory ? styles.filterOptionsActive : styles.filterOptionsInactive}>
                                {categories.map((category) => (
                                    <div className={styles.filterOption} onClick={handleAddCategoryFilter} key={category.name}>
                                        <input readOnly type="checkbox" checked={isCheckedCategory.includes(category.name)} className={styles.cbox}/>
                                        <label>{category.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div ref={countryFilterRef} className={styles.filterDropdown} >
                            <div  className={styles.mainFilterDiv} onClick={() => setIsOpenCountry(!isOpenCountry)}>
                                <label>Country</label>
                                <div className={styles.dropdownIconWrapper}>
                                    <Image
                                        width={40}
                                        height={30}
                                        src="/blogpics/Arrow 2 (1).svg"
                                        alt="dropdown arrow"
                                        className={isOpenCountry ? styles.dropdownIconActive : styles.dropdownIconInactive}
                                    />
                                </div>
                            </div>
                            <div  className={ isOpenCountry ? styles.filterOptionsActive : styles.filterOptionsInactive}>
                                {countries.map((country) => (
                                    <div className={styles.filterOption} onClick={handleAddCountryFilter} key={country.name}>
                                        <input readOnly type="checkbox" checked={isCheckedCountry.includes(country.name)} className={styles.cbox}/>
                                        <label>{country.name}</label>
                                        <div className={styles.countryImageWrapper}>
                                            <Image
                                                width={40}
                                                height={30}
                                                src={`/countries/${country.name}.svg`}
                                                alt="country flag"
                                                className={styles.countryImage}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.priceRangeContainer}>
                        <label>Price</label>
                        <RangeSlider
                            min={minPrice}
                            max={maxPrice}
                            setMin={setCurrentMin}
                            setMax={setCurrentMax}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                        </div>
                        <button ref={applyFilterRef} type="button" onClick={()=> setIsOpenFilter(!isOpenFilter)}>APPLY FILTERS</button>
                    </div>
                </div>
                </>
            }
                <div className={styles.candyContainer}>
                    {isSearchSuccessful &&
                    <div  className={styles.dropdown} >
                        <div  className={styles.selectDropdown} onClick={() => setisOpenSort(!isOpenSort)}>
                            <span className={styles.selectedDropdownOption}>{currentSortOption}</span>
                            <div  className={isOpenSort !== true ? styles.caret : styles.caretRotate}></div>

                        </div>
                        {isOpenSort &&
                            <ul  className={styles.dropdownMenu}>
                                {sortOptions.map(option => {
                                    return <li key={option.id} onClick={handleSortClick}>{option.label}</li>
                                })}
                            </ul>
                        }

                    </div>
        }
                    {currentProducts.map((product)=>{
                       return <SideProductCard onHeartClick={handleHeartClick} prevState={heartState} className={styles.product} key={product.id} product={product}/>
                    })}

                </div>
            </div>
            <PageNumber currentPage={currentPage} handlePageChange={handlePageChange} visiblePageNumbers={visiblePageNumbers} numberOfPages={numberOfPages}/>
            <Footer />
        </>
    );
};


/*import fs from 'fs'
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
  }*/


export default Candy;