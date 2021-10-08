import React from 'react';
import './topBar.css'
import {Link} from "react-router-dom";

const TopBar = () => {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <Link to="/" className="link">
                        <span className="logo">ВТБ.Данные</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topBarIconContainer">

                    </div>
                    <img
                        src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                        alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    );
};

export default TopBar;