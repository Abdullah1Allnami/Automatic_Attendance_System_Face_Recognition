import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './page.module.css'
import Link from 'next/link'

export default function SingUp() {
    return (
        <div className={classes.container}>
            <Header />
            <main className={classes.main}>
                <div className={classes.mainImage}>
                    <h1>Home Main Image</h1>
                </div>
                <div className={classes.informationInputContainer}>
                    <h1>Sing Up</h1>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id='userName' placeholder="Enter your use name" />
                    <label htmlFor="passward">Passward</label>
                    <input type="text" id='passward' placeholder="Enter your passward" />
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id='name' placeholder="Enter your use name" />
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder="Enter your use name" />
                    <button>Sign Up</button>
                    <div className={classes.link}><p>Already have an account?<Link href='/login'><span> Login </span></Link></p></div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
