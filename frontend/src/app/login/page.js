import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './page.module.css'
import Link from 'next/link'

export default function Login() {
    return (
        <div className={classes.container}>
            <Header />
            <main className={classes.main}>
                <div className={classes.mainImage}>
                    <h1>Home Main Image</h1>
                </div>
                <div className={classes.informationInputContainer}>
                    <h1>Log in</h1>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id='userName' placeholder="Enter your use name" />
                    <label htmlFor="passward">Passward</label>
                    <input type="text" id='passward' placeholder="Enter your passward" />
                    <button>Log in</button>
                    <div className={classes.link}><p>Don&#39;t have an account?<Link href='/SignUp'><span> Sign Up</span></Link></p></div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
