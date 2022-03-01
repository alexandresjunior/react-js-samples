import React, { useState, useEffect, useContext } from "react";
import ClayForm, { ClayInput, ClaySelect } from "@clayui/form";
import ClayButton from "@clayui/button";
import ClayPanel from "@clayui/panel";
import { search } from "../api/index";
import { initContactData } from "../model/index";
import { ContactDataValidationContext } from "../contexts/RegistrationValidation";
import useErrors from "../hooks/useErrors";
import ErrorFeedback from "./ErrorFeedback";
import { getClassName } from "../util/index";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

const ContactData = ({ currentStep, setCurrentStep, validate }) => {
  const [homePhone, setHomePhone] = useState(initContactData.homePhone);
  const [mobilePhone, setMobilePhone] = useState(initContactData.mobilePhone);
  const [address1, setAddress1] = useState(initContactData.address1);
  const [address2, setAddress2] = useState(initContactData.address2);
  const [city, setCity] = useState(initContactData.city);
  const [state, setState] = useState(initContactData.state);
  const [zipCode, setZipCode] = useState(initContactData.zipCode);

  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    search("/states", setStateList);
  }, []);

  const validation = useContext(ContactDataValidationContext);

  const [errors, validateFields, allFieldsAreValid] = useErrors(validation);

  const onSubmit = () => {
    if (allFieldsAreValid) {
      console.log(
        JSON.stringify({
          homePhone,
          mobilePhone,
          address1,
          address2,
          city,
          state,
          zipCode,
        })
      );

      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <ClayForm id="registration-contact-data" onSubmit={onSubmit}>
      <ClayPanel displayTitle="Contact Data" displayType="unstyled">
        <ClayPanel.Body>
          <ClayForm.Group className={getClassName(errors.homePhone.helperText)}>
            <label htmlFor="homePhone">Home Phone</label>
            <ClayInput
              id="homePhone"
              name="homePhone"
              placeholder="Insert your home phone here"
              type="text"
              onChange={(event) => {
                setHomePhone(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.homePhone.isValid &&
              ErrorFeedback(errors.homePhone.helperText)}
          </ClayForm.Group>

          <ClayForm.Group
            className={getClassName(errors.mobilePhone.helperText)}
          >
            <label htmlFor="mobilePhone">Mobile Phone</label>
            <ClayInput
              id="mobilePhone"
              name="mobilePhone"
              placeholder="Insert your mobile phone here"
              type="text"
              onChange={(event) => {
                setMobilePhone(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.mobilePhone.isValid &&
              ErrorFeedback(errors.mobilePhone.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.address1.helperText)}>
            <label htmlFor="address1">Address 1</label>
            <ClayInput
              id="address1"
              name="address1"
              placeholder="Insert your address here"
              type="text"
              onChange={(event) => {
                setAddress1(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.address1.isValid &&
              ErrorFeedback(errors.address1.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.address2.helperText)}>
            <label htmlFor="address2">Address 2</label>
            <ClayInput
              id="address2"
              name="address2"
              placeholder="Complement your address here"
              type="text"
              onChange={(event) => {
                setAddress2(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.address2.isValid &&
              ErrorFeedback(errors.address2.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.city.helperText)}>
            <label htmlFor="city">City</label>
            <ClayInput
              id="city"
              name="city"
              placeholder="Insert your city here"
              type="text"
              onChange={(event) => {
                setCity(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.city.isValid && ErrorFeedback(errors.city.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.state.helperText)}>
            <label htmlFor="state">State</label>
            <ClaySelect
              id="state"
              name="state"
              defaultValue={state.id}
              onClick={(event) => {
                setState(event.target.value);
              }}
              onBlur={validateFields}
            >
              {stateList.map((state) => (
                <ClaySelect.Option
                  key={state.id}
                  label={state.name}
                  value={state.id}
                />
              ))}
            </ClaySelect>
            {!errors.state.isValid && ErrorFeedback(errors.state.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.zipCode.helperText)}>
            <label htmlFor="zipCode">Zip Code</label>
            <ClayInput
              id="zipCode"
              name="zipCode"
              placeholder="Insert your zip code here"
              type="number"
              onChange={(event) => {
                setZipCode(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.zipCode.isValid &&
              ErrorFeedback(errors.zipCode.helperText)}
          </ClayForm.Group>
        </ClayPanel.Body>
      </ClayPanel>

      <div className="sheet-footer">
        <ClayButton.Group>
          <div className="btn-group-item">
            <ClayButton
              displayType="secondary"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
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

export default ContactData;
