import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './page.module.css'

export default function AddCourses() {
    return (
        <div className={classes.container}>
            <Header />
            <main className={classes.main}>
                <div className={classes.inputContainer}>
                    <h1>Add New Course</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter user's name" id='name' />
                    <label htmlFor="name">Subject Code</label>
                    <input type="SubjectCode" placeholder="Enter Subject Code" id='name' />
                    <button>Create Course</button>
                </div>
            </main>
            <Footer />
        </div>
    )
}
