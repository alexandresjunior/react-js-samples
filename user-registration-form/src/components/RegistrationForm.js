import React, { useState } from "react";
import PersonalData from "./PersonalData";
import ContactData from "./ContactData";
import SecurityData from "./SecurityData";
import ClayMultiStepNav from "@clayui/multi-step-nav";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      active: currentStep === 0,
      complete: currentStep > 0,
      onClick: () => setCurrentStep(0),
      subTitle: "Personal Data",
      title: "Step 1 of 3",
    },
    {
      active: currentStep === 1,
      complete: currentStep > 1,
      onClick: () => setCurrentStep(1),
      subTitle: "Contact Data",
      title: "Step 2 of 3",
    },
    {
      active: currentStep === 2,
      complete: currentStep > 2,
      onClick: () => setCurrentStep(2),
      subTitle: "Security Data",
      title: "Step 3 of 3",
    },
  ];

  const validate = (schema) => (values) =>
    schema
      .validate(values, {
        abortEarly: false,
        strict: false,
      })
      .then(() => ({}))
      .catch(({ inner }) =>
        inner.reduce(
          (memo, { path, message }) => ({
            ...memo,
            [path]: (memo[path] || []).concat(message),
          }),
          {}
        )
      );

  const forms = [
    <PersonalData
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      validate={validate}
    />,
    <ContactData
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      validate={validate}
    />,
    <SecurityData
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      validate={validate}
    />,
  ];

  return (
    <div className="container col col-6">
      <h3 className="text-center mt-5 mb-5">Let's register your account!</h3>

      <ClayMultiStepNav indicatorLabel="top">
        {steps.map(({ active, complete, onClick, subTitle, title }, i) => (
          <ClayMultiStepNav.Item
            active={active}
            complete={complete}
            expand={i + 1 !== steps.length}
            key={i}
          >
            {/* <ClayMultiStepNav.Title>{title}</ClayMultiStepNav.Title> */}
            <ClayMultiStepNav.Divider />
            <ClayMultiStepNav.Indicator
              complete={complete}
              label={i + 1}
              onClick={onClick}
              subTitle={subTitle}
            />
          </ClayMultiStepNav.Item>
        ))}
      </ClayMultiStepNav>

      {forms[currentStep]}
    </div>
  );
};

export default RegistrationForm;
