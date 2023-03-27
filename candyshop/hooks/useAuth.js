import { useEffect, useState } from 'react';
import { safeLocalStorage } from '../helpers';

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        setToken(safeLocalStorage.getItem('token'));
        setEmail(safeLocalStorage.getItem('email'));
        setRole(safeLocalStorage.getItem('role'));
    }, []);

    const setAuth = (token, email, role) => {
        safeLocalStorage.setItem('token', token);
        safeLocalStorage.setItem('email', email);
        safeLocalStorage.setItem('role', role);
        setToken(token);
        setEmail(email);
        setRole(role);
    };

    const removeAuth = () => {
        safeLocalStorage.removeItem('token');
        safeLocalStorage.removeItem('email');
        safeLocalStorage.removeItem('role');
        setToken(null);
        setEmail(null);
        setRole(null);
    };

    return { token, email, setAuth, removeAuth, role };
};

export default useAuth;
