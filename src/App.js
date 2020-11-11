import "./App.css";
import React, { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import CarbonDatePicker from "react-carbon-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Radio, RadioGroup } from "react-custom-radio-buttons";

const options = ["xs", "s", "m"];

const App = () => {
  const [getName, setName] = useState();
  const [getApellido, setApellido] = useState();
  const [getTelefono, setTelefono] = useState();
  const [getCorreoElectronico, setCorreoElectronico] = useState();

  const [date, setDate] = useState(new Date());
  const handleDateChange = (date) => {
    setDate(date);
  };

  const [size, setSize] = useState(null);
  const onChange = (option) => {
    setSize(option);
  };

  return (
    <div className="signup-container">
      <div className="left-container">
        <div className="puppy">
          <img
            className="imgLogo"
            alt="Hola"
            src="https://desarrollos.nixgp.com/wp-content/uploads/2020/11/Lobo-2.png "
          />
        </div>
      </div>
      <div className="right-container">
        <header>
          <h1>Formulario</h1>
          <div className="set">
            <div className="pets-name">
              <label>My Name Is: {getName} </label>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                type="text"
              />
            </div>
            <div className="pets-photo">
              <label>Apellidos : {getApellido} </label>

              <input
                onChange={(e) => setApellido(e.target.value)}
                placeholder="apellido"
                type="text"
              />
            </div>
          </div>
          <div className="set">
            <div className="pets-breed">
              <label>Telefono : {getTelefono} </label>
              <input
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Telefono"
                type="number"
              />
            </div>
            <div className="pets-birthday">
              <label>Correo : {getCorreoElectronico} </label>
              <input
                onChange={(e) => setCorreoElectronico(e.target.value)}
                placeholder="user@gmail.com"
                type="text"
              />
            </div>
          </div>
          <div className="set">
            <div className="pets-gender">
              <label>Gender</label>
              <div className="radio-container">
                <DatePicker selected={date} onChange={handleDateChange} />
              </div>
            </div>
            <div className="pets-spayed-neutered">
              <label>Spayed or Neutered</label>
              <div className="radio-container">
                
                <RadioGroup
                  containerStyle="options-container"
                  onChange={onChange}
                >
                  {options.map((option) => (
                    <Radio
                      value={option}
                      render={({ isSelected }) => (
                        <button
                          className="option"
                          style={{
                            backgroundColor: ` ${
                              isSelected ? "#39ab31" : "#f9d10a"
                            } `,
                          }}
                        >
                          {option}
                        </button>
                      )}
                    />
                  ))}
                </RadioGroup>

                
              </div>
            </div>
          </div>
          <div className="pets-weight">
            <label>Weight</label>
            <div className="radio-container">
              <input
                id="pet-weight-0-25"
                name="pet-weight"
                type="radio"
                value="0-25"
              />
              <label>0-25 lbs</label>
              <input
                id="pet-weight-25-50"
                name="pet-weight"
                type="radio"
                value="25-50"
              />
              <label>25-50 lbs</label>
              <input
                id="pet-weight-50-100"
                name="pet-weight"
                type="radio"
                value="50-100"
              />
              <label>50-100 lbs</label>
              <input
                id="pet-weight-100-plus"
                name="pet-weight"
                type="radio"
                value="100+"
              />
              <label>100+ lbs</label>
            </div>
          </div>
        </header>
        <footer>
          <div className="set">
            <button id="back">Back</button>
            <button id="next">Next</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
