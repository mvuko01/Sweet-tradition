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

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        setLoading(true);
        // send API request
        try {
          const response = await fetch('/api/registerUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              username,
              password,
              confirmPassword
            }),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
      
          router.push('/');
        } catch (error) {
          setError("Sorry, something went wrong.");
        }

        setLoading(false);
      };

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
                {token ? <h1 className={styles.title}>You are logged in!</h1> : <h1 className={styles.title}>Get Started!</h1>}
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
                                <input onClick={handleClickCheckbox} readOnly type="checkbox"  checked={isChecked} className={styles.cbox}/> 
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
                                <button
                                    onClick={handleSubmit} className={styles.signInBtn}
                                >
                                    Register
                                </button>
                            </div>
                        )}
                        <label id={styles.or}>Or</label>
                        <div className={styles.btnGglWrapper}>
                                <button type='submit' className={styles.signInBtnGgl}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register with Google</button>
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
            </section>
            </div>
        </>
    );
};

export default Register;
