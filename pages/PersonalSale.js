import React, { useState } from 'react';
import Form from '../components/Form';
import '../css/personal-sale.css';
import '../css/additem.css';


const PersonalSale = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      {!showForm && (
        <div>
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
          <div className="description-button-container">
            <button id="description-button" className="description-button" onClick={handleButtonClick}>Перейти к заполнению заявки</button>
            <button className="description-button-black"><a href="/personal-sale-list">Ваши заявки</a></button>
          </div>
        </div>
      )}
      {showForm && <Form />}
    </div>
  );
};

export default PersonalSale;
