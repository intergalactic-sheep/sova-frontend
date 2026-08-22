import { useNavigate } from "react-router-dom";
import styles from './GoHomeButton.module.css';

export const GoHomeButton = () => {
  const navigate = useNavigate();
  return <button className={styles.button} onClick={() => navigate('/')}>на главную:</button>;
};
