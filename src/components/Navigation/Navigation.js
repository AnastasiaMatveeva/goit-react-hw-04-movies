import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={style.navbar}>
        <li className={style.navbarItem}>
          <NavLink to={"/"}>Home Page</NavLink>
        </li>
        <li className={style.navbarItem}>
          <NavLink to={"/movies"}>Movies Page </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
