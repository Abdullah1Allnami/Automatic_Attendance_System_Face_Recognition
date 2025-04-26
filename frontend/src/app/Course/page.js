import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './page.module.css'

export default function Course() {
    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.main}></div>
            <Footer />
        </div>
    )
}
