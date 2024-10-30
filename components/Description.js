// src/components/Description.js
import React from 'react';
import '../css/personal-sale.css';

const Description = () => (
  <div id="container-description-personal-sale-block" className="content-description-container">
    <div className="content-block">
      <div className="content-index-title">
        <h4 className="text-text-Arial text-size-xl">О персональной продаже</h4>
      </div>
      <div className="content-block-body">
        <div className="description">
          <span>Персональная продажа - заказ автомобиля по индивидуальным запросам клиента из стран Европы и США.</span>
          <span>Логистические процессы, таможенное оформление и другие задачи берёт на себя наша компания.</span>
          <span>После указания характеристик желаемого к покупке автомобиля и поиска подходящих вариантов с вами свяжется специалист любым удобным способом.</span>
          <span>Ознакомьтесь с этапами нашей работы во время оформления заявки.</span>
        </div>
      </div>
    </div>
  </div>
);

export default Description;
