import styles from '../styles/Home.module.css'
import Image from 'next/image'


const Footer = () => (
    <section className={styles.footer}>
        <div className={styles.wrapper}>
            <div>
            <Image
                src={'/Logo.svg'}
                alt="Logo"
                width={452}
                height={81}
                className={styles.footerLogo}
            />
            <p className={styles.pnews}>Subscribe to our Newsletter</p>
            <div className={styles.subscribe}>
                <input placeholder='Enter Your Email' type="text" className={styles.input}></input>
                <button type="button" className={styles.subscribe_button}>Subscribe</button>
            </div>
            </div>
            <div className={styles.textwrapper}>
            <div>
                <p className={styles.mainp}>Company</p>
                <p>About Us</p>
                <p>Why Choose Us</p>
                <p>Pricing</p>
                <p>Testimonial</p>
            </div>
            <div>
            <p className={styles.mainp}>Resources</p>
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>
            <div>
            <p className={styles.mainp}>Product</p>
                <p>Project Managment</p>
                <p>Time Tracker</p>
                <p>Time Schedule</p>
                <p>Lead Generate</p>
                <p>Remote Collaboration</p>
            </div>
            </div>
            
        </div>
        <div className={styles.wrapper_line_social}>
            <Image
                src={'/Line 2.svg'}
                alt="Line 1"
                width={429}
                height={10}
                className={styles.footerLine}
            />
            <p className={styles.copyright}>Copyright @2022</p>
            <Image
                src={'/Facebook.svg'}
                alt="Facebook"
                width={26}
                height={27}
                className={styles.footerSocialMedia}
            />
            <Image
                src={'/Twitter.svg'}
                alt="Twitter"
                width={26}
                height={27}
                className={styles.footerSocialMedia}
            />
            <Image
                src={'/Instagram.svg'}
                alt="Instagram"
                width={26}
                height={27}
                className={styles.footerSocialMedia}
            />
            <Image
                src={'/LinkedIn.svg'}
                alt="LinkedIn"
                width={26}
                height={27}
                className={styles.footerSocialMedia}
            />
            <Image
                src={'/Line 2.svg'}
                alt="Line 1"
                width={429}
                height={10}
                className={styles.footerLine}
            />
        </div>
    </section>
);

export default Footer;
