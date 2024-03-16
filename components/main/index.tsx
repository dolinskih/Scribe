import React from "react";
import styles from "./Main.module.scss";

interface MainProps{
    children: React.ReactNode
}

export default function Main({children} : MainProps){
    return(
        <main className="px-2 pe-3 w-75">
            <div className="robSlab d-flex align-items-center p-2 pt-4">
                <span className="icon bigIcon">draw</span>
                <h1>Witaj, Użytkownik.</h1>
            </div>
            {children}
        </main>
    )
}