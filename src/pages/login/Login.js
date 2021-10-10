import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { loginFunction } from "../../store/features/authThunk";
import "./login.css";

const Login = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="loginPage">
      {auth.isAuth ? (
        <Redirect to={"/dashboard"} />
      ) : (
        <>
          <h1>Авторизация в системе ВТБ.Данные</h1>
          <div>
            <p className="inputWithLabel">
              Логин{" "}
              <input
                className="loginInput"
                type="text"
                onChange={(e) => setLogin(e.target.value)}
              />
            </p>
            <p className="inputWithLabel">
              Пароль{" "}
              <input
                className="loginInput"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
            <button
              className="button"
              onClick={() => dispatch(loginFunction(login, password))}
            >
              Войти
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
