// src/components/Footer.js
import React from 'react';
import '../css/headerFooter.css';

const Footer = () => (
  <footer className="footer">
    <div className="container-footer">
      <div className="row">
        <div className="footer-col">
          <h4>Узнайте о нас больше</h4>
          <ul>
            <li><a href="#">О компании Liquid</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Вакансии</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Помощь</h4>
          <ul>
            <li><a href="#">Как покупать</a></li>
            <li><a href="#">Распространённые вопросы</a></li>
            <li><a href="#">Словарь терминов</a></li>
            <li><a href="#">Техподдержка</a></li>
            <li><a href="#">Справка</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Услуги</h4>
          <ul>
            <li><a href="#">Отчёты по авто</a></li>
            <li><a href="#">Доставка</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Мы в соцсетях</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-vk"></i></a>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
