import "./App.module.scss";
import styles from "./App.module.scss";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__inner}>
          <div className={styles.container__inner_info}>
            <p>Тестовое задание</p>
          </div>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
