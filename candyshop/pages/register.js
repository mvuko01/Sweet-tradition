import styles from '../styles/Login.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

import Spinner from '../components/Spinner';
import api from '../api';

import useAuth from '../hooks/useAuth';

import Link from 'next/link';
import Header from '../components/Header';
import Image from 'next/image'

const Register = () => {
    const { removeAuth, setAuth, token } = useAuth();
    const router = useRouter();
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [validation, setValidation] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        await api
            .register(email, username, password, confirmPassword)
            .then(({ token }) => {
                setError('');
                setAuth(token);
                router.push('/login');
            })
            .catch((err) => {
                setError(err.message);
            });

        setLoading(false);
        // else if(res.status===422){
        //     setValidation("Username already exists, try something else.");
        // }
    }
    return (
        <>
            <Header />
            <div className={styles.mainWrapper}>
            <Image
                            src={'/login/registerBanner.PNG'}
                            alt="Search"
                            width={949}
                            height={867}
                            className={styles.banner}
                            />
            <section className={styles.content} id={styles.registerSection}>
                <h1 className={styles.registerTitle}>
                    {token ? 'You are logged in!' : 'Get Started!'}
                </h1>
                {!token && (
                    <section className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <label>Email</label>
                            <input
                                value={email}
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label>Username</label>
                            <input
                                value={username}
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                        <label>Password</label>
                            <input
                                value={password}
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                        <label>Confirm password</label>
                            <input
                                value={confirmPassword}
                                type="password"
                                placeholder="Enter your password again"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className={styles.rememberAndForgotRegister}>
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

export default Register;
