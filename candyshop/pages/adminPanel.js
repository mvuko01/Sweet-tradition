import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styles from '../styles/adminPanel.module.css';
import Image from 'next/image';

const AdminPanel = () => {
    return (
        <>
        <Header2 />
        <h1 className={styles.heading}>ADMIN PANEL</h1>
        <Footer />
        </>
    )
}

export default AdminPanel;