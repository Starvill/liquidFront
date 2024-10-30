// src/components/Form.js
import React, { useState, useEffect } from 'react';
import '../css/personal-sale.css';
import data from '../static/test.json';

const Form = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [price, setPrice] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');


  useEffect(() => {
    // Initialize brands
    setBrands(data.map(item => ({ id: item.id, name: item.name })));
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      const brand = data.find(item => item.name === selectedBrand);
      if (brand) {
        setModels(brand.models.map(model => ({ id: model.id, name: model.name })));
        setSelectedModel('');
        setYears([]);
        setSelectedYear('');
      }
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      const brand = data.find(item => item.name === selectedBrand);
      if (brand) {
        const model = brand.models.find(m => m.name === selectedModel);
        if (model) {
          const yearsRange = [];
          const currentYear = new Date().getFullYear();
          if (model['year-to'] == null) {
            for (let i = model['year-from']; i <= currentYear; i++) {
              yearsRange.push(i);
            }
          } else {
            for (let i = model['year-from']; i <= model['year-to']; i++) {
              yearsRange.push(i);
            }
          }
          setYears(yearsRange);
          setSelectedYear('');
        }
      }
    }
  }, [selectedModel]);

  // Function to handle numeric input for price and phone number
  const handleNumericInput = (e, setter) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div id="container-input-personal-sale-block" className="personal-sale-container">
      <div className="center-container">
        <div className="add-block">
          <div className="index-title">
            <h4 className="text-text-Arial text-size-xl">Технические характеристики</h4>
          </div>
          <div className="block-body">
            <div className="add-row">
              <div className="discription-block">Марка</div>
              <div className="container-input">
                <form className="formBorder standartItemInputForm">
                  <input
                    id="brandsInput"
                    className="borderHidden standartItemInput"
                    list="brands"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  />
                  <datalist id="brands">
                    {brands.map(brand => (
                      <option key={brand.id} value={brand.name} />
                    ))}
                  </datalist>
                </form>
              </div>
            </div>
            <div id="modelsInputContainer" className="add-row">
              <div className="discription-block">Модель</div>
              <div className="container-input">
                <form className="formBorder standartItemInputForm">
                  <input
                    id="modelsInput"
                    className="borderHidden standartItemInput"
                    list="models"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                  />
                  <datalist id="models">
                    {models.map(model => (
                      <option key={model.id} value={model.name} />
                    ))}
                  </datalist>
                </form>
              </div>
            </div>
            <div id="yearOfReleaseInputContainer" className="add-row">
              <div className="discription-block">Год выпуска</div>
              <div className="container-input">
                <form className="formBorder standartItemInputForm">
                  <input
                    id="yearOfReleaseInput"
                    className="borderHidden standartItemInput"
                    list="yearOfRelease"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  />
                  <datalist id="yearOfRelease">
                    {years.map(year => (
                      <option key={year} value={year} />
                    ))}
                  </datalist>
                </form>
              </div>
            </div>
            <div id="typeEngineInputContainer" className="add-row">
              <div className="discription-block">Тип двигателя</div>
              <div className="container-input">
                <form className="formBorder standartItemInputForm">
                  <select id="typeEngineInput" className="borderHidden standartItemInput">
                    <option selected disabled hidden></option>
                    <option value="petrol">Бензин</option>
                    <option value="diesel">Дизель</option>
                    <option value="electric">Электро</option>
                    <option value="hybrid">Гибрид</option>
                  </select>
                </form>
              </div>
            </div>
            <div id="colorInputContainer" className="add-row">
              <div className="discription-block">Цвет</div>
              <div className="container-input">
                <form className="formBorder standartItemInputForm">
                  <input id="coloringInput" className="borderHidden standartItemInput" type="text" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="add-block">
          <div className="index-title">
            <h4 className="text-text-Arial text-size-xl">История эксплуатации</h4>
          </div>
          <div className="block-body">
            <div id="mileageInputContainer" className="add-row">
              <div className="discription-block">Пробег</div>
              <div className="container-input">
                <form className="formBorder standartItemInputForm">
                  <input
                    id="mileageInput"
                    className="borderHidden mileageInput"
                    inputMode="numeric"
                    data-marker="mileage"
                    type="text"
                    value={mileage}
                    onChange={(e) => handleNumericInput(e, setMileage)}
                    autocomplete="off"
                  />                  
                  <span className="input-layout-after-mileage">км</span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="add-block">
          <div className="index-title">
            <h4 className="text-text-Arial text-size-xl">Предпочтительная цена</h4>
          </div>
          <div className="block-body">
            <div id="costInputContainer" className="add-row">
              <div className="discription-block">Цена</div>
              <div className="container-input">
                <form className="formBorder standartItemInputForm">
                  <input
                    id="costInput"
                    className="borderHidden"
                    type="text"
                    value={price}
                    onChange={(e) => handleNumericInput(e, setPrice)}
                    autocomplete="off"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="add-block">
          <div className="index-title">
            <h4 className="text-text-Arial text-size-xl">Коммуникация</h4>
          </div>
          <div className="block-body">
            <div id="phoneInputContainer" className="add-row">
              <div className="discription-block">Ваш телефон</div>
              <div className="container-input">
                <form className="formBorder standartItemInputForm">
                  <input
                    id="phoneInput"
                    className="borderHidden"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => handleNumericInput(e, setPhoneNumber)}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="block-body">
            <div id="connectionInputContainer" className="add-row">
              <div className="discription-block">Предпочтительный вид связи</div>
              <div className="container-input">
                <form className="formBorder standartItemInputForm">
                  <select id="connectionInput" className="borderHidden standartItemInput">
                    <option selected disabled hidden></option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Telegram">Telegram</option>
                    <option value="Viber">Viber</option>
                    <option value="email">Эл. почта</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="add-block">
          <div className="index-title">
            <h4 className="text-text-Arial text-size-xl">Комментарий</h4>
          </div>
          <div className="block-body">
            <div id="commentInputContainer" className="add-row">
              <div>
                <form className="formBorder standartItemInputForm">
                  <textarea
                    id="commentInput"
                    className="commentInput borderHidden"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows="4"
                    autocomplete="off"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button id="personal-sale-submit-button" type="submit" className="description-button">Отправить запрос</button>
        </div>
      </div>
      <div className="about-steps">
        <ol>
          <li className="vertical-line-item">
            <h4>Заполнение формы</h4>
            На основе оставленных данных мы подберем Вам автомобиль, соответствующий вашим критериям.
          </li>
          <li className="vertical-line-item">
          <h4>Утверждение варианта и ответы на вопросы</h4>
            Наши сотрудники свяжутся с вами для утверждения окончательного варианта и ответят на все интересующие вас вопросы.
          </li>
          <li className="vertical-line-item">
            <h4>Оплата авто</h4>
            Специалисты помогут вам с оплатой и будут сопровождать на каждом этапе покупки.
          </li>
          <li className="vertical-line-item">
            <h4>Доставка</h4>
            Мы и наши партнеры доставят Ваш автомобиль от места покупки до удобного для Вас места получения.
          </li>
          <li className="vertical-line-item">
            <h4>Выдача автомобиля</h4>
            Сотрудники бесплатно подготовят Вашу машину к выдаче. Мы произведем бесплатный детейлинг, подготовим автомобиль к выдаче и презентуем подарочный комплект для каждого клиента.
          </li>
          <li className="liquid-label-li">
            Мы всегда остаемся на связи и обязуемся поддерживать клиента на каждом этапе покупки.
            <br />
            В центре нашей платформы по приобретению авто - человек, его безопасность, комфорт и благосостояние - то, на что мы ориентируемся в работе и что помогает нам расти.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Form;
