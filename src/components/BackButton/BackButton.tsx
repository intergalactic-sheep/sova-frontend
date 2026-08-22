import { useNavigate } from "react-router-dom";
import styles from './BackButton.module.css'

export const BackButton = () => {
  const navigate = useNavigate();
  return <button className={styles.button} onClick={() => navigate(-1)}>назад:</button>;
};