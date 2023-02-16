import Image from 'next/image'
import styles from '../styles/HomeCarousel.module.css'
import MainProductCard from './MainProductCard';
import SideProductCard from './SideProductCard';
import React, { useState } from 'react';

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HomeCarousel = ({products}) => {
    const sliderSettings = {
        className: "centerProduct",
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
               slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
               slidesToShow: 1,
              }
             }
          ]
    }

    const [sliderRef, setSliderRef] = useState(null)


    return (
        <section className={styles.product}>
            <h1 className={styles.featuringHeading}>WHAT&#39;S TRENDING</h1>
            <div className={styles.productAndArrowContainer}>
                <button className={styles.buttonPrevious} onClick={sliderRef?.slickPrev}>
                    <Image
                        src={'/productPics/Arrow.svg'}
                        alt=""
                        width={100}
                        height={100}
                        className={styles.imageArrow}
                        
                    />
                </button>
                <div className={styles.wrapper}>
                
                <Slider className={styles.slider} ref={setSliderRef} {...sliderSettings}>
                    {products.slice(1,10).map((product) => (
                        <div className={styles.mainProductContainer}>
                            <MainProductCard medium={false} key={product.frontmatter.id} product={product} name={product.frontmatter.name} short_description={`${product.frontmatter.category}, ${product.frontmatter.quantity}`} picture={product.frontmatter.picture} price={product.frontmatter.price} id={product.frontmatter.id} />
                        </div>
                    ))}
                </Slider>
                
                </div>
                <button className={styles.buttonNext} onClick={sliderRef?.slickNext}>
                    <Image
                        src={'/productPics/Arrow.svg'}
                        alt=""
                        width={100}
                        height={100}
                        className={styles.imageArrow}
                        
                    />
                </button>
            </div>
        </section>
      )
}

export default HomeCarousel;