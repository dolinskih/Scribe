import React from "react";
import styles from "./SectionButton.module.scss";

interface SectionButtonParams{
    icon: string,
    label: string
}

export default function SectionButton({icon, label} : SectionButtonParams){
    return(
        <div className="d-flex flex-column align-items-center col">
            <button className="btn btn-dark p-3">
                <span className="icon fs-2">{icon}</span>
            </button>
            <p>{label}</p>
        </div>
    )
}