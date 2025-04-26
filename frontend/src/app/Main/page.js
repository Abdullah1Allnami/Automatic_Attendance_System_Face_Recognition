import React from 'react'
import classes from './page.module.css'

export default function Main() {
    return (
        <div className={classes.mainContainer

        }> <div className={classes.main}>
                <div className={classes.box}>
                    <div className={classes.icon}>Icon</div>
                    <div className={classes.name}>Users</div>
                </div>
                <div className={classes.box}>
                    <div className={classes.icon}>Icon</div>
                    <div className={classes.name}>AddUser</div>
                </div>
                <div className={classes.box}>
                    <div className={classes.icon}>Icon</div>
                    <div className={classes.name}>Capture Face ID</div>
                </div>
                <div className={classes.box}>
                    <div className={classes.icon}>Icon</div>
                    <div className={classes.name}>Courses</div>
                </div>
            </div></div>
    )
}
