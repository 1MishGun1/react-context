import Styles from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useState, useEffect } from "react";

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [inputPassword, setInputPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("use effect");
      setFormIsValid(
        inputEmail.includes("@") && inputPassword.trim().length > 7
      );
    }, 1000);
    return () => {
      console.log("Clear");
      clearTimeout(timer);
    };
  }, [inputEmail, inputPassword]);

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(inputEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(inputPassword.trim().length > 7);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(inputEmail, inputPassword);
  };

  return (
    <Card className={Styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${Styles.control} ${
            emailIsValid === false ? Styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={inputEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${Styles.control} ${
            passwordIsValid === false ? Styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={inputPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={Styles.actions}>
          <Button type="submit" className={Styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
