import React, { useState } from "react";
import ClayForm, { ClayInput, ClaySelect } from "@clayui/form";
import ClayButton from "@clayui/button";
import ClayPanel from "@clayui/panel";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

const PersonalData = ({ currentStep, setCurrentStep }) => {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [email, setEmail] = useState([]);
  const [genre, setGenre] = useState("1");
  const [birthday, setBirthday] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(
      JSON.stringify({
        firstName,
        lastName,
        email,
        userName,
        genre,
        birthday,
        password,
        confirmPassword,
      })
    );
  };

  const handleReset = () => {
    document.getElementById("registration-personal-data").reset();
  };

  return (
    <ClayForm id="registration-personal-data" onSubmit={onSubmit}>
      <ClayPanel displayTitle="Personal Data" displayType="unstyled">
        <ClayPanel.Body>
          <ClayForm.Group>
            <label htmlFor="firstName">First Name</label>
            <ClayInput
              id="firstName"
              name="firstName"
              placeholder="Insert your first name here"
              type="text"
              required
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </ClayForm.Group>

          <ClayForm.Group>
            <label htmlFor="lastName">Last Name</label>
            <ClayInput
              id="lastName"
              name="lastName"
              placeholder="Insert your last name here"
              type="text"
              required
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </ClayForm.Group>

          <ClayForm.Group>
            <label htmlFor="email">E-mail</label>
            <ClayInput
              id="email"
              name="email"
              placeholder="Insert your e-mail address here"
              type="email"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </ClayForm.Group>

          <ClayForm.Group>
            <label htmlFor="userName">Username</label>
            <ClayInput
              id="userName"
              name="userName"
              placeholder="Insert your username here"
              type="text"
              required
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </ClayForm.Group>

          <ClayForm.Group>
            <label htmlFor="genre">Genre</label>
            <ClaySelect
              id="genre"
              name="genre"
              defaultValue={genre}
              onClick={(event) => {
                setGenre(event.target.value);
              }}
            >
              <ClaySelect.Option key="1" label="Male" value="1" />
              <ClaySelect.Option key="2" label="Female" value="2" />
              <ClaySelect.Option key="3" label="Other" value="3" />
            </ClaySelect>
          </ClayForm.Group>

          <ClayForm.Group>
            <label htmlFor="birthday">Birthday</label>
            <ClayInput
              id="birthday"
              name="birthday"
              placeholder="Insert your birthday here"
              type="date"
              required
              onChange={(event) => {
                setBirthday(event.target.value);
              }}
            />
          </ClayForm.Group>

          <ClayForm.Group>
            <label htmlFor="password">Password</label>
            <ClayInput
              id="password"
              name="password"
              placeholder="Insert your password here"
              type="password"
              required
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </ClayForm.Group>

          <ClayForm.Group>
            <label htmlFor="confirmPassword">Confirm your password</label>
            <ClayInput
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password here"
              type="password"
              required
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </ClayForm.Group>
        </ClayPanel.Body>
      </ClayPanel>

      <div className="sheet-footer">
        <ClayButton.Group>
          <div className="btn-group-item">
            <ClayButton
              displayType="secondary"
              onClick={() => {
                handleReset();
              }}
            >
              Cancel
            </ClayButton>
          </div>

          <div className="btn-group-item">
            <ClayButton
              type="submit"
              displayType="primary"
              onClick={() => {
                onSubmit();
                setCurrentStep(currentStep + 1);
              }}
            >
              Next
            </ClayButton>
          </div>
        </ClayButton.Group>
      </div>
    </ClayForm>
  );
};

export default PersonalData;
