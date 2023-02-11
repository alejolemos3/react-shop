import React from "react";
import "../styles/DesktopMenu.scss";

const DesktopMenu = () => {
  return (
    <div class="DesktopMenu">
      <ul>
        <li>
          <a href="/" class="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
