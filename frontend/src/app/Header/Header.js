import Link from 'next/link'
import React from 'react'
import classes from './page.module.css'

export default function Header() {
    return (

        <header>
            <nav className={classes.nav}>
                <div className={classes.icon}>Icon</div>
                <div className={classes.logo}>
                    <p>Face Verification System</p>
                </div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Users">Users</Link></li>
                    <li><Link href="/User">User</Link></li>
                    <li><Link href="/AddUser">Add User</Link></li>
                    <li><Link href="/Courses">Courses</Link></li>
                    <li><Link href="/Course">Course</Link></li>
                    <li><Link href="/AddCourse">Add Course</Link></li>
                    <li><Link href="/FID">Capture Face ID</Link></li>
                    <li><Link href="/login">Log In</Link></li>
                </ul>
            </nav>
        </header>
    )
}
