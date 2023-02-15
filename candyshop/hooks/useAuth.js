import { useEffect, useState } from 'react';
import { safeLocalStorage } from '../helpers';

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        setToken(safeLocalStorage.getItem('token'));
        setEmail(safeLocalStorage.getItem('email'));
    }, []);

    const setAuth = (token, email) => {
        safeLocalStorage.setItem('token', token);
        safeLocalStorage.setItem('email', email);
        setToken(token);
        setEmail(email);
    };

    const removeAuth = () => {
        safeLocalStorage.removeItem('token');
        safeLocalStorage.removeItem('email');
        setToken(null);
        setEmail(null);
    };

    return { token, email, setAuth, removeAuth };
};

export default useAuth;
