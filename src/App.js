import "./App.css";
import React, { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Radio, RadioGroup } from "react-custom-radio-buttons";

const options = ["Contado", "Credito"];

const options2 = ["hectárea", "300 m2", "200 m2", "100 m2"];

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
    console.log(size);
  };

 
  

  return (
    <div className="signup-container">
      <div className="left-container">
        <div className="puppy">
        </div>
      </div>
      <div className="right-container">
        <header>
          <h1>Formulario</h1>
          <div className="set">
            <div className="pets-name">
              <label>Nombre </label>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                type="text"
              />
            </div>
            <div className="pets-photo">
              <label>Apellidos</label>

              <input
                onChange={(e) => setApellido(e.target.value)}
                placeholder="apellido"
                type="text"
              />
            </div>
          </div>
          <div className="set">
            <div className="pets-breed">
              <label>Telefono</label>
              <input
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Telefono"
                type="number"
              />
            </div>
            <div className="pets-birthday">
              <label>Correo </label>
              <input
                onChange={(e) => setCorreoElectronico(e.target.value)}
                placeholder="user@gmail.com"
                type="text"
              />
            </div>
          </div>
          <div className="set">
            <div className="pets-gender">
              <label>Fecha</label>
              <div className="radio-container">
                <DatePicker selected={date} 
                onChange={handleDateChange} />
              </div>
            </div>
            <div className="pets-spayed-neutered">
              <label>Contado/Credito</label>
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
                              isSelected ? "#000000" : "#ffffff"
                            } `,
                            color: ` ${
                              isSelected ? "#fff" : "#000"
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
              <RadioGroup
                containerStyle="options-container2"
                onChange={onChange}
              >
                {options2.map((option) => (
                  <Radio
                    value={option}
                    render={({ isSelected }) => (
                      <button
                        className="option2"
                        style={{
                          backgroundColor: ` ${
                            isSelected ? "#000000" : "#ffffff"
                          } `,
                          color: ` ${
                            isSelected ? "#fff" : "#000"
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
