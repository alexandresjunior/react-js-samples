import React, { useState, useContext } from "react";
import ClayForm, { ClayInput, ClaySelect, ClayCheckbox } from "@clayui/form";
import ClayButton from "@clayui/button";
import ClayPanel from "@clayui/panel";
import { initPersonalData } from "../model/index";
import useErrors from "../hooks/useErrors";
import { PersonalDataValidationContext } from "../contexts/RegistrationValidation";
import ErrorFeedback from "./ErrorFeedback";
import { getClassName, isEmpty } from "../util/index";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

const PersonalData = ({ currentStep, setCurrentStep }) => {
  const [firstName, setFirstName] = useState(initPersonalData.firstName);
  const [lastName, setLastName] = useState(initPersonalData.lastName);
  const [userName, setUserName] = useState(initPersonalData.userName);
  const [email, setEmail] = useState(initPersonalData.email);
  const [genre, setGenre] = useState(initPersonalData.genre);
  const [birthday, setBirthday] = useState(initPersonalData.birthday);
  const [password, setPassword] = useState(initPersonalData.password);
  const [confirmPassword, setConfirmPassword] = useState(
    initPersonalData.confirmPassword
  );

  const validation = useContext(PersonalDataValidationContext);

  const [errors, validateFields, allFieldsAreValid] = useErrors(validation);

  const onSubmit = () => {
    if (allFieldsAreValid) {
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

      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    document.getElementById("registration-personal-data").reset();
  };

  const validateConfirmPassword = (password1, password2) => {
    if (errors.password.isValid && isEmpty(password2)) {
      errors.confirmPassword.isValid = false;
      errors.confirmPassword.helperText = "Please confirm your password";
    } else if (password1 !== password2) {
      errors.confirmPassword.isValid = false;
      errors.confirmPassword.helperText = "Passwords do not match";
    } else {
      errors.confirmPassword.isValid = true;
      errors.confirmPassword.helperText = "";
    }
  };

  return (
    <ClayForm id="registration-personal-data" onSubmit={onSubmit}>
      <ClayPanel displayTitle="Personal Data" displayType="unstyled">
        <ClayPanel.Body>
          <ClayForm.Group className={getClassName(errors.firstName.helperText)}>
            <label htmlFor="firstName">First Name</label>
            <ClayInput
              id="firstName"
              name="firstName"
              placeholder="Insert your first name here"
              type="text"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.firstName.isValid &&
              ErrorFeedback(errors.firstName.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.lastName.helperText)}>
            <label htmlFor="lastName">Last Name</label>
            <ClayInput
              id="lastName"
              name="lastName"
              placeholder="Insert your last name here"
              type="text"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.lastName.isValid &&
              ErrorFeedback(errors.lastName.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.email.helperText)}>
            <label htmlFor="email">E-mail</label>
            <ClayInput
              id="email"
              name="email"
              placeholder="Insert your e-mail address here"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.email.isValid && ErrorFeedback(errors.email.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.userName.helperText)}>
            <label htmlFor="userName">Username</label>
            <ClayInput
              id="userName"
              name="userName"
              placeholder="Insert your username here"
              type="text"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.userName.isValid &&
              ErrorFeedback(errors.userName.helperText)}
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

          <ClayForm.Group className={getClassName(errors.birthday.helperText)}>
            <label htmlFor="birthday">Birthday</label>
            <ClayInput
              id="birthday"
              name="birthday"
              placeholder="Insert your birthday here"
              type="date"
              onChange={(event) => {
                setBirthday(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.birthday.isValid &&
              ErrorFeedback(errors.birthday.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.password.helperText)}>
            <label htmlFor="password">Password</label>
            <ClayInput
              id="password"
              name="password"
              placeholder="Insert your password here"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onBlur={validateFields}
            />
            
            {/* {!errors.password.isValid &&
              ErrorFeedback(errors.password.helperText)} */}

            {!isEmpty(password) && (
              <div className="form-group mx-sm-4 mt-3">
                <div className="mx-3 password-validations">
                  <ClayCheckbox
                    checked={password.length > 6}
                    label={"It contains at least 6 characters"}
                    readOnly
                    disabled
                  />
                  <ClayCheckbox
                    checked={password.match("(.*[A-Z].*)")}
                    label={"It contains at least 1 uppercase letter"}
                    readOnly
                    disabled
                  />
                  <ClayCheckbox
                    checked={password.match("(.*[a-z].*)")}
                    label={"It contains at least 1 lowercase letter"}
                    readOnly
                    disabled
                  />
                  <ClayCheckbox
                    checked={password.match("(.*\\d.*)")}
                    label={"It contains at least 1 numeric value"}
                    readOnly
                    disabled
                  />
                  <ClayCheckbox
                    checked={password.match("[!@#$%^&*]")}
                    label={"It contains at least 1 special value"}
                    readOnly
                    disabled
                  />
                </div>
              </div>
            )}
          </ClayForm.Group>

          <ClayForm.Group
            className={getClassName(errors.confirmPassword.helperText)}
          >
            <label htmlFor="confirmPassword">Confirm your password</label>
            <ClayInput
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password here"
              type="password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              onBlur={validateConfirmPassword(password, confirmPassword)}
            />
            {!errors.confirmPassword.isValid &&
              ErrorFeedback(errors.confirmPassword.helperText)}
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
              disabled={!allFieldsAreValid()}
              displayType="primary"
              onClick={() => {
                onSubmit();
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
