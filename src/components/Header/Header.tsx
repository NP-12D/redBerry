import { Link } from "react-router-dom";
import logo from "../../assets/HandEye.svg";
import person from "../../assets/user.svg";
import styles from "./Header.module.css";

export default function Header({ name }) {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logo} />
            <h2>RedSeam Clothing</h2>
          </div>
        </Link>

        <Link to={name === "Log in" ? "/login" : "/"}>
          <div className={styles.login}>
            <img src={person}></img>
            <p>{name}</p>
          </div>
        </Link>
      </header>
    </>
  );
}
