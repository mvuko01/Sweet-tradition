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
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        

        responsive: [
            {
              breakpoint: 1130,
              settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
              }
            },
            {
              breakpoint: 530,
              settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
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
                    {products.map((product) => (
                        <div className={styles.mainProductContainer} key={product.id}>
                            <MainProductCard key={product.id} product={product}/>
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