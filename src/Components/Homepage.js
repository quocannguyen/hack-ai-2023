import React from "react";
import x from './styles/style.module.css'
import cd from './img/cd.png';
import { Link } from "react-router-dom";

const Homepage = () => {
    return(
    <div className= {x.container}>
            <div className={x.header}>
                <div className={x.headerLeft}>
                    <h1>ll</h1>
                </div>
                <div className={x.headerRight}>
                   <li><Link to={'login'} style={{textDecoration: 'none', color: 'white'}}>log in </Link></li>
                    <li><Link to={'signup'} style={{textDecoration: 'none', color: 'white'}}>signup </Link></li>
                </div>
            </div>
            <div className={x.midPage}>
                <div className={x.headerInfo}>
                </div>
            </div>
            <div className={x.diskContainer}>
               <Link to={'input'}> <img className={x.disk} src={cd} alt="A Disk" /> </Link>
            </div>
        </div>
    );

}

export default Homepage;