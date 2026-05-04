import Link from "next/link";
import styles from './navbar.module.css'


import React from 'react'

function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.row}>

                <nav className={styles.nav}>
                    <Link href="/products">products</Link>
                    <Link href="/profile">about</Link>
                    <Link href="/cart">contact</Link>
                </nav>

                <div className={styles.search}>
                    <input type="text" placeholder="Search..." />
                </div>

                <div className={styles.logo}>
                    <h1>MyStore</h1>
                </div>

            </div>
        </header>
    )
}

export default Navbar