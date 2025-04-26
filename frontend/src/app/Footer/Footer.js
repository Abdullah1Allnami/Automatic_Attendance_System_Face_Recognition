import React from 'react'
import classes from './page.module.css'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <ul>
                <p>&copy; 2025 Face Verification System. All rights reserved.</p>
            </ul>
            <ul>
                <a href="#">
                    <li>Privacy Policy</li>
                </a>
                <a href="#">
                    <li>Contact Us</li>
                </a>
            </ul>
        </footer>
    )
}
