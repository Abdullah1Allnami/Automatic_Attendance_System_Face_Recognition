import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './page.module.css'

export default function User() {
    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.main}>
                <div className={classes.boxContainer}>
                    <h1>User Profile</h1>
                    <div className={classes.userPicture}>
                        <div><h3>User Profile Picture</h3></div>
                        <div><h3>User Picture</h3></div>
                        <div className={classes.userPictureButton}>
                            <button className={classes.button}>Change Photo</button>
                            <h3>Supported Image Formate jpg,gif,png</h3>
                        </div>
                    </div>
                    <div className="userName">
                        <h3>Name</h3>
                        <h3>Abdullah saeed alnami</h3>

                    </div>
                    <div className="userEmail"></div>
                    <div className="buttons"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
