// src/components/Header.js
import React from 'react';
import '../css/headerFooter.css';

const Header = () => {
    const handleAccountClick = (event) => {
      event.preventDefault();
      // Ваш код для открытия подменю или выполнения других действий
    };
  
    return (
      <header>
        <nav className="navbar-navbar">
          <div className="container-navbar">
            <a href="/" className="navbar-brand">Liquid</a>
            <div className="navbar-wrap">
              <div className="hamburger menu-toggle">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <ul className="navbar-menu">
                <li className="first-li"><a href="/">Главная</a></li>
                <li><a href="/inventory">Инвентарь</a></li>
                <li><a href="/personal-sale">Персональная продажа</a></li>
                <li><a href="/contacts">Контакты</a></li>
                <li><a href="/about">О нас</a></li>
                <li className="account-li">
                  <a href="#" tabIndex="1" className="account" onClick={handleAccountClick}>Аккаунт</a>
                  <ul className="sub-menu">
                    <li><a href="/login">Войти</a></li>
                    <li><a href="/register">Регистрация</a></li>
                  </ul>
                </li>
              </ul>
              <div className="box">
                <form name="search">
                  <input type="text" className="input" name="txt" onMouseOut={(e) => { e.target.value = ''; e.target.blur(); }} />
                </form>
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;