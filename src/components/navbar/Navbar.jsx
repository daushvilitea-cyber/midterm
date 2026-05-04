import Link from "next/link";
import styles from "./Navbar,module.css";

import React from 'react'

function Navbar() {
    return (
        <nav>
            <Link href="/products">products</Link>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>

        </nav>
    )
}

export default Navbar