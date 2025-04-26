import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './page.module.css'

export default function AddUser() {
    return (
        <div className={classes.container}>
            <Header />
            <main className={classes.main}>
                <div className={classes.inputContainer}>
                    <h1>Add New User</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter user's name" id='name' />
                    <label htmlFor="name">ID</label>
                    <input type="text" placeholder="Enter user's name" id='name' />
                    <label htmlFor="name">Picture</label>
                    <input type="text" placeholder="Enter user's name" id='name' />
                    <button>Submit User Details</button>
                </div>
            </main>
            <Footer />
        </div>
    )
}
