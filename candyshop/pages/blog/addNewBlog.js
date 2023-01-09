import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import api from "../../api";
import { useEffect, useState } from 'react';
import NotAuthorized from "../../components/NotAuthorized";

const addNew = () => {
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
        <Header />
        <Footer />
        </>
    );
};
export default addNew;