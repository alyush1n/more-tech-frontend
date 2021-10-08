import React from 'react';
import './sidebar.css'
import DescriptionIcon from "@mui/icons-material/Description";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Данные</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <DescriptionIcon className="sidebarIcon"/>
                            Датасеты
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;