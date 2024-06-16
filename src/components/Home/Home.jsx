import Styles from "./Home.module.css";
import  Card  from "../UI/Card/Card";

const Home = () => {
  return (
    <Card className={Styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
    </Card>
  );
};

export default Home;
