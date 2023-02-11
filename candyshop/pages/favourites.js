import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import SideProductCard from '../components/SideProductCard';
import React, { useState, useEffect } from 'react';
import styles from '../styles/favourites.module.css';

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const localFavourites = localStorage.getItem('favourites');
        if (localFavourites) {
            setFavourites(JSON.parse(localFavourites));
        }
    }, []);
  return (
    <>
      <Header2 />
      <div className={styles.candyContainer}>
        {favourites.map(product => (<SideProductCard key={product.frontmatter.id} product={product} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />))}
      </div>
      <Footer />
    </>
  );
};

export default Favourites;