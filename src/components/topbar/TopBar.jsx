import React from 'react';
import './topBar.css'

const TopBar = () => {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <span className="logo">ВТБ.Данные</span>
                </div>
                <div className="topRight">
                    <div className="topBarIconContainer">

                    </div>
                    <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;