import styles from '../styles/Login.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

import Spinner from '../components/Spinner';
import api from '../api';

import useAuth from '../hooks/useAuth';

import Link from 'next/link';
import Header from '../components/Header';
import Image from 'next/image'

const Login = () => {
    const { removeAuth, setAuth, token } = useAuth();
    const router = useRouter();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const[shownPassword, setShownPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        await api
            .login(email, password)
            .then(({ token }) => {
                setError('');
                setAuth(token);
                router.push('/home');
            })
            .catch((err) => {
                setError(err.message);
            });

        setLoading(false);
    };

    return (
        <>
            <Header />
            <div className={styles.mainWrapper}>
            <Image
                            src={'/login/loginBanner.PNG'}
                            alt="Search"
                            width={949}
                            height={850}
                            className={styles.banner}
                            />
            <section className={styles.content}>
                <h1 className={styles.title}>
                    {token ? 'You are logged in!' : 'Welcome Back!'}
                </h1>
                {!token && (
                    <section className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <label>Email or username</label>
                            <input
                                value={email}
                                type="email"
                                id="email"
                                placeholder="Enter your email or username"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                        <label>Password</label>
                        <div id={styles.passwordInputWrapper}>
                            <input
                                value={password}
                                type={shownPassword == false ? "password" : "text"}
                                id="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Image 
                            src={'/login/eye.svg'}
                            alt="show password"
                            width={24}
                            height={24}
                            className={shownPassword == false ? styles.eye : styles.eyeoff}
                            onClick={() => setShownPassword(true)}/>
                            <Image 
                            src={'/login/eyeoff.svg'}
                            alt="hide password"
                            width={24}
                            height={24}
                            className={shownPassword == false ? styles.eyeoff : styles.eye}
                            onClick={() => setShownPassword(false)}/>
                            </div>
                            <div className={styles.rememberAndForgot}>
                                <div className={styles.remember}>
                                    <input type="checkbox" className={styles.cbox}/> <label for="rememberMe">Remember me</label>
                                </div>
                                <label className={styles.forgot}>Forgot password?</label>
                            </div>
                            {loading ? (
                            <Spinner />
                            ) : (
                            <button
                                onClick={handleSubmit} className={styles.signInBtn}
                            >
                                Sign in
                            </button>
                        )}
                            <label className={styles.or}>Or</label>
                            <button type='submit' className={styles.signInBtnGgl}>Sign in with Google</button>
                            <div className={styles.register}>
                                <p>Don't have an account? &nbsp;</p>
                                <Link href='' className={styles.forgot}>Register</Link>
                            </div>
                        </div>
                        
                    </section>
                )}
                {error && <p className={styles.error}>{error}</p>}
                {token && (
                    <button
                        onClick={() => {
                            removeAuth();
                            router.push('/home');
                        }}
                        className={styles.submitButton}
                    >
                        Logout
                    </button>
                )}
            </section>
            </div>
        </>
    );
};

export default Login;
