import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import styles from '../styles/adminPanel.module.css';
import CandyAdminPanel from '../components/CandyAdminPanel';
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
const AdminPanel = (props) => {
    const products = props.products;
    return (
        <>
        <Header2 />
        <h1 className={styles.heading}>ADMIN PANEL</h1>
        {products.map((product) => {
            return (
                <CandyAdminPanel key={product.id} product={product} />
            )
        })}
        <Footer />
        </>
    )
}

export default AdminPanel;