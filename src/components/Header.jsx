import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import DesktopMenu from "@components/DesktopMenu";
import MobileMenu from "@components/MobileMenu";
import menuImg from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "@context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import MyOrder from "@containers/MyOrder";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const [mobileMenuToggle, setMobMenuToggle] = useState(false);

  const [myOrderToggle, setOrderToggle] = useState(false);

  const { state } = useContext(AppContext);

  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
    myOrderToggle ? setOrderToggle() : null;
  };

  const handleToggleOrders = () => {
    setOrderToggle(!myOrderToggle);
    menuToggle ? handleToggleMenu() : null;
  };

  const handleToggleMobileMenu = () => {
    setMobMenuToggle(!mobileMenuToggle);
    myOrderToggle ? setOrderToggle() : null;
  };

  return (
    <nav>
      <div className="mobileMenuBtn" onClick={handleToggleMobileMenu}>
        <img src={menuImg} alt="menu" className="menu" />
      </div>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggleMenu}>
            platzi@example.com
          </li>
          <div className="shoppingCartBtn" onClick={handleToggleOrders}>
            <div className="navbar-shopping-cart">
              <img src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </div>
          </div>
        </ul>
      </div>
      {menuToggle && <DesktopMenu />}
      {myOrderToggle && <MyOrder />}
      {mobileMenuToggle && <MobileMenu />}
    </nav>
  );
};

export default Header;
