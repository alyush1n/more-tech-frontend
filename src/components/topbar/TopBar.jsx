import React from "react";
import "./topBar.css";
import { Link } from "react-router-dom";
import { logoutFunction } from "../../store/features/authThunk";
import { useDispatch, useSelector } from "react-redux";

const TopBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth)
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">ВТБ.Данные</span>
          </Link>
        </div>
        <div className="topRight" >
            {auth?.user?.balance ? <p style={{marginRight:"15px"}}>Баланс: {auth?.user?.balance}</p> :null}
          <div
            className="topBarIconContainer"
            onClick={() => dispatch(logoutFunction())}
          >
            Выйти
          </div>
          {/* <img
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            alt=""
            className="topAvatar"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
