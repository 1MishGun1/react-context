import Styles from "./MainHeader.module.css";
import { Navigation } from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className={Styles["main-header"]}>
      <h1>React Advanced</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
