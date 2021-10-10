import React from 'react';
import './sidebar.css'
import DescriptionIcon from "@mui/icons-material/Description";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Данные</h3>
                    <ul className="sidebarList">
                        <Link to="/models" className="link">
                        <li className="sidebarListItem active">
                            <DescriptionIcon className="sidebarIcon"/>
                            Модели
                        </li>
                        </Link>
                        <Link to="/datasets" className="link">
                        <li className="sidebarListItem">
                            <DescriptionIcon className="sidebarIcon"/>
                            Датасеты
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;