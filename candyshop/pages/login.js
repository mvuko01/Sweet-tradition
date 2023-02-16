import styles from '../styles/Login.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

import Spinner from '../components/Spinner';
import api from '../api';

import useAuth from '../hooks/useAuth';

import Link from 'next/link';
import Image from 'next/image'
import Header2 from '../components/Header2';
import { isEmail } from "validator";

const Login = () => {
    const { removeAuth, setAuth, token } = useAuth();
    const router = useRouter();

    const [isChecked, setIsChecked] = useState(false);
    const handleClickCheckbox = () => {
        setIsChecked(!isChecked);
    }

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
                setAuth(token, email);
                router.back();
            })
            .catch((err) => {
                setError(err.message);
            });

        setLoading(false);
    };

    const [emailError, setEmailError] = useState('');
    const handleBlur = (e) => {
        const email = e.target.value;
    
        if(!email){
            setEmailError("Email or username field cannot be empty");
        }
        else {
          setEmailError('');
        }
      };

      const [passwordError, setPasswordError] = useState('');
      const handlePasswordBlur = (e) => {
          const password = e.target.value;
          
          if (!password) {
              setPasswordError("Password field cannot be empty");
          }
          else {
            setPasswordError("");
          }
        };

    return (
        <>
        <title>Login</title>
            <Header2 />
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
                    {token ? null : 'Welcome Back!'}
                </h1>
                {!token && (
                    <form className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <label>Email or username</label>
                            <input
                                value={email}
                                type="email"
                                id="email"
                                placeholder="Enter your email or username"
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={handleBlur}
                            />
                            {emailError && <p className={styles.error}>{emailError}</p>}
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
                                    onBlur={handlePasswordBlur}
                                />
                                <Image 
                                    src={'/login/eye.svg'}
                                    alt="show password"
                                    width={24}
                                    height={24}
                                    className={shownPassword == false ? styles.eye : styles.eyeoff}
                                    onClick={() => setShownPassword(true)} 
                                />
                                <Image 
                                    src={'/login/eyeoff.svg'}
                                    alt="hide password"
                                    width={24}
                                    height={24}
                                    className={shownPassword == false ? styles.eyeoff : styles.eye}
                                    onClick={() => setShownPassword(false)}
                                />
                                {passwordError && <p className={styles.error}>{passwordError}</p>}
                            </div>
                        </div>
                        <div className={styles.rememberAndForgot}>
                                <div className={styles.remember}>
                                    <input onClick={handleClickCheckbox} readOnly type="checkbox" checked={isChecked} className={styles.cbox}/> 
                                    <label onClick={handleClickCheckbox} htmlFor="rememberMe">Remember me</label>
                                </div>
                                <label className={styles.forgot}>Forgot password?</label>
                        </div>
                        {error && <p className={styles.error}>{error}</p>}
                        {loading ? (
                        <div className={styles.spinnerWrapper}>
                            <Spinner/>
                        </div>
                        ) : (
                            <div className={styles.signInBtnWrapper}>
                                <button type='submit'
                                    onClick={handleSubmit} className={styles.signInBtn}
                                >
                                    Sign in
                                </button>
                            </div>
                        )}
                        <label id={styles.or}>Or</label>
                        <div className={styles.btnGglWrapper}>
                                <button type='submit' className={styles.signInBtnGgl}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google</button>
                                <Image 
                                src={'/login/Google.svg'}
                                alt="Google logo"
                                width={24}
                                height={24}
                                className={styles.google}
                                />
                        </div>
                        <div className={styles.register}>
                                <p>Don&#39;t have an account? &nbsp;</p>
                                <Link href='/register' className={styles.forgot} passHref>Register</Link>
                        </div>
                    </form>
                )}
            </section>
            </div>
        </>
    );
};

export default Login;
