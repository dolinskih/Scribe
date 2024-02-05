import React from "react";
import styles from './Navbar.module.scss';

export default function Navbar(){
    return (
        <nav className={`${styles.nav} border-3`}>
            <div className={`${styles.item} marg-top-5`}>
                <span className="icon">more_vert</span>
            </div>
            <div className={styles.options}>
                <div className={styles.item}>
                    <span className="icon iconFill">home</span>
                    <p>Start</p>
                </div>
                <div className={styles.item}>
                    <span className="icon">search</span>
                    <p>Szukaj</p>
                </div>
                <div className={styles.item}>
                    <span className="icon">group</span>
                    <p>Zespoły</p>
                </div>
                <div className={styles.item}>
                    <span className="icon">notes</span>
                    <p>Notatki</p>
                </div>
                <div className={styles.item}>
                    <span className="icon">check_box</span>
                    <p>Listy zadań</p>
                </div>
            </div>
        </nav>
    )
}