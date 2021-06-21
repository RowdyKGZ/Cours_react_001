import React from "react";
import restourants from "../sample-restaurants";

class Landing extends React.Component {
  render() {
    return (
      <div className="restoraunt_select">
        <div className="restoraunt_select_top">
          <div className="restoraunt_select_top-header">Выбери ресторан</div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>

          <div className="restoraunt_select_bottom">
            <ul>
              {restourants.map((restouraunt) => {
                return <li key={restouraunt.id}>{restouraunt.title}</li>;
              })}
            </ul>
          </div>
        </div>

        <button>Перейти в ресторан</button>
      </div>
    );
  }
}

export default Landing;
