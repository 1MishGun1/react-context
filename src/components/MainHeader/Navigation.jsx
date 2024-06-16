import Styles from "./Navigation.module.css";

export const Navigation = (props) => {
  return (
    <nav className={Styles.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
