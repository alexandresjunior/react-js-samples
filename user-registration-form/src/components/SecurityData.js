import React, { useState, useEffect, useContext } from "react";
import ClayForm, { ClayInput, ClaySelect, ClayCheckbox } from "@clayui/form";
import ClayButton from "@clayui/button";
import ClayPanel from "@clayui/panel";
import { search } from "../api/index";
import TermsOfUseModal from "./TermsOfUseModal";
import { initSecurityData } from "../model/index";
import { SecurityDataValidationContext } from "../contexts/RegistrationValidation";
import useErrors from "../hooks/useErrors";
import ErrorFeedback from "./ErrorFeedback";
import { getClassName } from "../util/index";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

const SecurityData = ({ currentStep, setCurrentStep, validate }) => {
  const [securityQuestion, setSecurityQuestion] = useState(
    initSecurityData.securityQuestion
  );
  const [answer, setAnswer] = useState(initSecurityData.answer);
  const [acceptanceToU, setAcceptanceToU] = useState(
    initSecurityData.acceptanceToU
  );

  const [securityQuestionList, setSecurityQuestionList] = useState([]);

  useEffect(() => {
    search("/security_questions", setSecurityQuestionList);
  }, []);

  const validation = useContext(SecurityDataValidationContext);

  const [errors, validateFields, allFieldsAreValid] = useErrors(validation);

  const onSubmit = () => {
    if (allFieldsAreValid) {
      console.log(JSON.stringify({ securityQuestion, answer, acceptanceToU }));

      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <ClayForm id="registration-security-data" onSubmit={onSubmit}>
      <ClayPanel displayTitle="Security Data" displayType="unstyled">
        <ClayPanel.Body>
          <ClayForm.Group
            className={getClassName(errors.securityQuestion.helperText)}
          >
            <label htmlFor="securityQuestion">Security Question</label>
            <ClaySelect
              id="securityQuestion"
              name="securityQuestion"
              defaultValue={securityQuestion.id}
              onClick={(event) => {
                setSecurityQuestion(event.target.value);
              }}
              onBlur={validateFields}
            >
              {securityQuestionList.map((securityQuestion) => (
                <ClaySelect.Option
                  key={securityQuestion.id}
                  label={securityQuestion.question}
                  value={securityQuestion.id}
                />
              ))}
            </ClaySelect>
            {!errors.securityQuestion.isValid &&
              ErrorFeedback(errors.securityQuestion.helperText)}
          </ClayForm.Group>

          <ClayForm.Group className={getClassName(errors.answer.helperText)}>
            <label htmlFor="answer">Answer</label>
            <ClayInput
              id="answer"
              name="answer"
              placeholder="Insert your answer here"
              type="text"
              onChange={(event) => {
                setAnswer(event.target.value);
              }}
              onBlur={validateFields}
            />
            {!errors.answer.isValid && ErrorFeedback(errors.answer.helperText)}
          </ClayForm.Group>

          <ClayForm.Group
            className={getClassName(errors.acceptanceToU.helperText)}
          >
            <div className="container">
              <div className="row">
                <ClayCheckbox
                  id="acceptanceToU"
                  name="acceptanceToU"
                  checked={acceptanceToU}
                  onChange={() => {
                    if (acceptanceToU === true)
                      setAcceptanceToU((value) => !value);
                  }}
                  onBlur={validateFields}
                >
                  <span>
                    &ensp;You must read, understand, and agree with the{" "}
                    <TermsOfUseModal
                      acceptanceToU={acceptanceToU}
                      setAcceptanceToU={setAcceptanceToU}
                    />{" "}
                    governing the access to and use of this web site.
                  </span>
                </ClayCheckbox>
              </div>
            </div>
            {!errors.acceptanceToU.isValid &&
              ErrorFeedback(errors.acceptanceToU.helperText)}
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
              displayType="primary"
              onClick={() => {
                onSubmit();
              }}
              disabled={!allFieldsAreValid()}
            >
              Register
            </ClayButton>
          </div>
        </ClayButton.Group>
      </div>
    </ClayForm>
  );
};

export default SecurityData;
