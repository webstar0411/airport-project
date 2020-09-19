import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import  * as AiIcons from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData';
import { IconContext } from 'react-icons';


import BelAirsVid from '../video/BelAirs.mp4';


import './Home.css';


function Home() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)


    return (
        <div className="home">
       
            <video
                className="home__video"
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"

                }}
            >
                <source src={BelAirsVid} type="video/mp4" />
            </video>
            <IconContext.Provider value={{ color: '#fff' }} >
                <header className="header">
                    <div className="brand">
                        <Link to="#" className="menu-bars" >
                            <FaIcons.FaBars onClick={showSidebar} className="header__menu" />
                        </Link>
                        {/* <h4>Menu</h4> */}
                        <h4>Apartments</h4>
                    </div>
                    <div className="logo">
                        <h4>BelAirs</h4>
                    </div>
                    <div className="header__links">
                        <h4>About</h4>
                        <h4>Contact</h4>
                        <h4>Help</h4>
                    </div>
                </header>

                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar} >
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose className="header__close" />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName
                                }>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}

                        
                       
                    </ul>
                    <div className="nav-details">
                            <div className="nav-address">
                                <h5>Find Us</h5>
                                <p>100A George St, Croydon CRO 1Gp </p>
                                <h5>Call Us</h5>
                                <p>
                                    <AiIcons.AiOutlineMobile className="phone" /> +44(0)20 3548 6589 
                                </p>
                            </div>
                            <div className="nav-socials">
                                <div className="nav-socials-icons">
                                   <FaIcons.FaInstagram/>
                                </div>
                                <div className="nav-socials-icons">
                                    <FaIcons.FaFacebook/>
                                </div>
                                
                            </div>
                        </div>
                </nav>
           </IconContext.Provider>

           {/* <aside className="home__sidebar">
               <IconButton onClick={closeMenu}>
                   <CloseIcon className="sidebar__close" />
               </IconButton>
               <div>
                    <ul>
                        <li>Home</li>
                        <li>Apartments</li>
                        <li>Why Bel Airs</li>
                        <li>Our Location</li>
                        <li>Contact</li>

                    </ul>
               </div>
               

           </aside> */}
                
        </div>
    )
}

export default Home;

