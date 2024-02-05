import React from "react";
import styles from "./SectionButton.module.scss";

interface SectionButtonParams{
    icon: string,
    label: string
}

export default function SectionButton({icon, label} : SectionButtonParams){
    return(
        <div className={styles.btn}>
            <div className={styles.box}>
                <span className="icon">{icon}</span>
            </div>
            <p>{label}</p>
        </div>
    )
}