import React from 'react';
import './homepage.styles.scss';

function Home() {
    return (
        <div className="homepage">
            <div className="directory-menu">
            <div className ="menu-item">
                <div className="content">
                    <h1 className="title">SHOP NOW</h1>
                    <span className ="subtitle">HATS</span>
                </div>
           
               </div>
               <div className ="menu-item">
                <div className="content">
                    <h1 className="title">SHOP NOW</h1>
                    <span className ="subtitle">Jackets</span>
                </div>
           
               </div>
               <div className ="menu-item">
                <div className="content">
                    <h1 className="title">SHOP NOW</h1>
                    <span className ="subtitle">Shoes</span>
                </div>

           
               </div>
               <div className ="menu-item">
                <div className="content">
                    <h1 className="title">SHOP NOW</h1>
                    <span className ="subtitle">Mens</span>
                </div>
           
               </div>
               <div className ="menu-item">
                <div className="content">
                    <h1 className="title">SHOP NOW</h1>
                    <span className ="subtitle">Women</span>
                </div>
           
               </div>
            </div>
        </div>
    )
}

export default Home
