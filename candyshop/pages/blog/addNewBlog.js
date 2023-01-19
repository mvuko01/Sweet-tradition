import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import api from "../../api";
import { useEffect, useState } from 'react';
import NotAuthorized from "../../components/NotAuthorized";
import styles from '../../styles/NewBlog.module.css'
import Image from 'next/image'
import Header2 from "../../components/Header2";

const AddNew = ({images}) => {
    const { token } = useAuth();
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            return;
        }

        api.addNewBlog(token).then(({ user }) => {
            setLoading(false);
            setCurrentUser(user);
        });
    }, [token]);

    // if (loading) {
    //     return null;
    // }
    if (!token || !currentUser) {
        return (
            <NotAuthorized />
        );
    }
    return (
        <>
        <Header2 />
        <div className={styles.mainWrapper}>
        <p className={styles.title} >Add new Blog</p>
        <p className={styles.adviceTitle}>ADVICE FROM OUR TEAM</p>
        <p className={styles.advice}>1. Don&#39;t use offensive language.</p>
        <p className={styles.advice}>2. Don&#39;t post personal information or the personal information of others.</p>
        <p className={styles.advice}>3. Respect the opinions of others.</p>
        <p className={styles.advice}>4. Be aware of copyright laws.</p>
        <p className={styles.advice}>5. Don&#39;t post anything that could be interpreted as libelous.</p>
        <p className={styles.advice}>6. Don&#39;t post anything that could be seen as promoting illegal activities.</p>
        <p className={styles.advice}>7. Don&#39;t post anything that could be seen as promoting hate speech.</p>
        <input placeholder='Insert heading...' className={styles.heading}></input>
        <div className={styles.uploadWrapper}>
            <p className={styles.uploadImage}>Upload image</p>
        </div>
        <p className={styles.titleText}>Text</p>
        <div className={styles.textMainWrapper}>
            <div className={styles.textEditWrapper}>
                {images.map((image) => (
                    <Image key={image}
                    src={`/newBlog/${image}`}
                    alt="Edit text"
                    className={styles.editIcon}
                    width={30}
                    height={30}
                  />
                ))}
            </div>
            <div className={styles.textWrapper}>
                <textarea className={styles.writeText} placeholder="Write text..."></textarea>
            </div>
        </div>
        <div className={styles.btnWrapper}>
            <button type='button' className={styles.publish}>PUBLISH</button>
        </div>
        </div> 
        <Footer />
        </>
    );
};
export default AddNew;

import fs from 'fs'
export async function getStaticProps() {
    const images = fs.readdirSync('public/newBlog');

    return {
        props: {
            images,
        },
    };
}