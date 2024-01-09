import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = ({ header, items, isActive, handleBurgerClick }) => {
  return (
    <div className={`${styles.menu} ${isActive ? styles.active : ""}`}>
      <div className={styles.blur} onClick={handleBurgerClick} />
      <div className={styles.menuContent}>
        <h3 className={styles.menuHeader}>{header}</h3>
        <ul>
          {items.map((item) => (
            <li
              key={item.value}
              className={`${styles.menuItem} ${
                item.value === "GET STARTED" ? styles.startButton : ""
              }`}
            >
              <Link to={item.link}>{item.value}</Link>
              <i className="material-icons">{item.icon}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
