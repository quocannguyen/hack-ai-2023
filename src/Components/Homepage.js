import React from "react";
import x from './styles/style.module.css';
import cd from './img/cd.png';
import { Link } from "react-router-dom";

const Homepage = () => {
    return(
    <div className= {x.container}>
        <div className={x.layer}>
            <div className={x.header}>
                <div className={x.headerLeft}>
                    <h1>ll</h1>
                </div>
                <div className={x.headerRight}>
                   <li className={x.linkRight}><Link to={'login'} style={{textDecoration: 'none', color: 'white'}}>log in </Link></li>
                    <li className={x.linkRight}><Link to={'signup'} style={{textDecoration: 'none', color: 'white'}}>signup </Link></li>
                </div>
            </div>
            </div>
            <div className={x.midPage}>
                <div className={x.headerInfo}>
                </div>
            </div>
            <div className={x.diskContainer}>
               <Link to={'input'}> <img className={x.disk} src={cd} alt="A Disk" /> </Link>
               <div className={x.footer}>
                    <div className={x.footerNames}>
                            <h2>Contacts</h2>
                            <div classNames={x.names}>
                                <h3>Jojo Tamang</h3>
                                <h3>Ariel Yong</h3>
                                <h3>Ann Ngueyn</h3>
                                <h3>Nishith Guda</h3>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Homepage;