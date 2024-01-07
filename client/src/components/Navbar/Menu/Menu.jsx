import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = ({ header, items, isActive }) => {
  return (
    <div className={`${styles.menu} ${isActive ? styles.active : ""}`}>
      <div className={styles.blur} />
      <div className={styles.menuContent}>
        <h3 className={styles.menuHeader}>{header}</h3>
        <ul>
          {items.map((item) => (
            <li>
              <Link to={item.link}>{item.value}</Link>
              <i class="material-icons">{item.icon}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
