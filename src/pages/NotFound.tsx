import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ого</h1>
      <p className={styles.text}>Такой страницы мы пока еще не придумали</p>
      <Link to="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </div>
  );
}
