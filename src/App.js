import './App.css';
import React, { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [getName, setName] = useState();

 

  return (
		<div className="signup-container">
			<div className="left-container">
				<div className="puppy">
					<img
          className="imgLogo"
						alt="Hola"
						src=" https://desarrollos.nixgp.com/wp-content/uploads/2020/11/Lobo-2.png "
					/>
				</div>
			</div>
			<div className="right-container">
				<header>
					<h1 >Formulario</h1>
					<div className="set">
						<div className="pets-name">
							<label>My Name Is: {getName} </label>
              <input 
              onChange={(e)=>setName(e.target.value)}
              placeholder="Pet's name" 
              type="text" 
              />

						</div>
						<div className="pets-photo">
							<button id="pets-upload">
								<i className="fas fa-camera-retro"></i>
							</button>
							<label>Upload a photo</label>
						</div>
					</div>
					<div className="set">
						<div className="pets-breed">
							<label>Breed</label>
							<input id="pets-breed" placeholder="Pet's breed" type="text" />
						</div>
						<div className="pets-birthday">
							<label>Birthday</label>
							<input id="pets-birthday" placeholder="MM/DD/YYYY" type="text" />
						</div>
					</div>
					<div className="set">
						<div className="pets-gender">
							<label>Gender</label>
							<div className="radio-container">
								<input id="pet-gender-female" name="pet-gender" type="radio" value="female" />
								<label>Female</label>
								<input id="pet-gender-male" name="pet-gender" type="radio" value="male" />
								<label>Male</label>
							</div>
						</div>
						<div className="pets-spayed-neutered">
							<label>Spayed or Neutered</label>
							<div className="radio-container">
								<input id="pet-spayed" name="spayed-neutered" type="radio" value="spayed" />
								<label>Spayed</label>
								<input id="pet-neutered" name="spayed-neutered" type="radio" value="neutered" />
								<label>Neutered</label>
							</div>
						</div>
					</div>
					<div className="pets-weight">
						<label>Weight</label>
						<div className="radio-container">
							<input id="pet-weight-0-25" name="pet-weight" type="radio" value="0-25" />
							<label>0-25 lbs</label>
							<input id="pet-weight-25-50" name="pet-weight" type="radio" value="25-50" />
							<label>25-50 lbs</label>
							<input id="pet-weight-50-100" name="pet-weight" type="radio" value="50-100" />
							<label>50-100 lbs</label>
							<input id="pet-weight-100-plus" name="pet-weight" type="radio" value="100+" />
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
