import React from "react";
import "./Finanse_switch.scss"

const Radio = () => {
  return (
    <div className="container">
      <div className="tabs">
        <input defaultChecked name="tabs" id="radio-1" type="radio" />
        <label htmlFor="radio-1" className="tab">
          Стипендии
        </label>
        <input name="tabs" id="radio-2" type="radio" />
        <label htmlFor="radio-2" className="tab">
          Общежитие
        </label>
        <input name="tabs" id="radio-3" type="radio" />
        <label htmlFor="radio-3" className="tab">
          Платежи
        </label>
        <span className="glider" />
      </div>
    </div>
  );
};

export default Radio;
