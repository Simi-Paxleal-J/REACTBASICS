import React from "react";
import { Link } from "react-router-dom";
//css file
import styles from "./navigation.module.css";
import image from "./image.jpeg";

function Navigation() {
    return (
        <div className={styles.navigation}>
            <div className="imageContainer">
            <img src={image} alt="" width="150" height="160" />
            </div>
            <p><h1>Simi Paxleal Jaiwant Simon</h1>
            {'\n'}
            <h2>Technical Researcher, XAMK OUAS Finland</h2>{'\n'}
            <h3>React Basics (Project Profile)</h3></p>
            
            <div className={styles.navigationButtonContainer}>
                <Link to ='/'>
                    <button className={styles.navigationButton}>
                        HOME
                    </button>
                </Link>
                <Link to ='/contact'>
                    <button className={styles.navigationButton}>
                        CONTACT
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;
