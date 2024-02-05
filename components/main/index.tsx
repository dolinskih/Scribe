import React from "react";
import styles from "./Main.module.scss";

interface MainProps{
    children: React.ReactNode
}

export default function Main({children} : MainProps){
    return(
        <main className={styles.main}>
            <div className="row robSlab">
                <span className="icon bigIcon">draw</span>
                <h1>Witaj, Użytkownik.</h1>
            </div>
            {children}
        </main>
    )
}