import styles from '../styles/Register.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

import Spinner from '../components/Spinner';
import api from '../api';

import useAuth from '../hooks/useAuth';

import Link from 'next/link';
import Image from 'next/image'
import Header2 from '../components/Header2';
import isEmail from 'validator/lib/isEmail';

const Register = () => {
    const { removeAuth, setAuth, token } = useAuth();
    const router = useRouter();
    
    const [isChecked, setIsChecked] = useState(false);
    const handleClickCheckbox = () => {
        setIsChecked(!isChecked);
    }

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

    const [emailError, setEmailError] = useState('');
    const handleEmailBlur = (e) => {
        const email = e.target.value;
        
        if(!email){
            setEmailError("Email field cannot be empty");
        }
        else if (!isEmail(email)) {
          setEmailError("Please enter valid email address!");
        } else {
          setEmailError('');
        }
      };

    const [usernameError, setUsernameError] = useState('');
    const handleUsernameBlur = (e) => {
        const username = e.target.value;

        if(!username){
            setUsernameError("Username field cannot be empty");
        }
        else if (username.length < 3) {
            setUsernameError("Username must be at least 3 characters long!");
        } else {
            setUsernameError('');
        }
    };

    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const handleConfirmPasswordBlur = (e) => {
        const confirmPassword = e.target.value;
        
        if (!password) {
            setPasswordError("Password field cannot be empty");
        }
        if(!confirmPassword){
            setConfirmPasswordError("Confirm password field cannot be empty");
        }
        else if (confirmPassword !== password) {
          setConfirmPasswordError("Passwords do not match!");
        } else {
          setPasswordError("");
        }
      };
    return (
        <>
        <title>Register</title>
            <Header2 />
            <div className={styles.mainWrapper}>
            <Image
                            src={'/login/registerBanner.PNG'}
                            alt="Search"
                            width={949}
                            height={867}
                            className={styles.banner}
                            />
            <section className={styles.content} id={styles.registerSection}>
                <h1 className={styles.title}>
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
                                onBlur={handleEmailBlur}
                            />
                            {emailError && <p className={styles.error}>{emailError}</p>}
                        </div>
                        <div className={styles.inputWrapper}>
                            <label>Username</label>
                            <input
                                value={username}
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                onChange={(e) => setUsername(e.target.value)}
                                onBlur={handleUsernameBlur}
                            />
                            {usernameError && <p className={styles.error}>{usernameError}</p>}
                        </div>
                        <div className={styles.inputWrapper}>
                        <label>Password</label>
                            <input
                                value={password}
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={handleConfirmPasswordBlur}
                            />
                            {passwordError && <p className={styles.error}>{passwordError}</p>}
                        </div>
                        <div className={styles.inputWrapper}>
                        <label>Confirm password</label>
                            <input
                                value={confirmPassword}
                                type="password"
                                placeholder="Enter your password again"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onBlur={handleConfirmPasswordBlur}
                            />
                            {confirmPasswordError && <p className={styles.error}>{confirmPasswordError}</p>}
                        </div>
                        <div className={styles.rememberAndForgot}>
                            <div className={styles.remember}>
                                <input type="checkbox"  checked={isChecked} className={styles.cbox}/> 
                                <label onClick={handleClickCheckbox} for="rememberMe">Remember me</label>
                            </div>
                            <label className={styles.forgot}>Forgot password?</label>
                        </div>
                        {error && <p className={styles.error}>{error}</p>}
                        {loading ? (
                        <Spinner />
                        ) : (
                            <div className={styles.signInBtnWrapper}>
                                <button
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
                            <p>Already have an account? &nbsp;</p>
                            <Link href='/login' className={styles.forgot}>Sign in</Link>
                        </div>
                        
                        
                    </section>
                )}
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
