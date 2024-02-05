import React from "react";
import styles from "./Section.module.scss";

interface SectionParams{
    SectionIcon: string
    SectionHeading: string
    children: React.ReactNode
}

export default function Section({SectionIcon, SectionHeading, children}: SectionParams){
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className="icon">{SectionIcon}</span>
                <h3>{SectionHeading}</h3>
            </div>
            {children}
        </section>
    )
}