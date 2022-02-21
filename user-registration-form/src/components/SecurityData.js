import React, { useState, useEffect } from "react";
import ClayForm, { ClayInput, ClaySelect, ClayCheckbox } from "@clayui/form";
import ClayButton from "@clayui/button";
import ClayPanel from '@clayui/panel';
import { search } from "../api/index";
import TermsOfUseModal from "./TermsOfUseModal";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

const SecurityData = ({currentStep, setCurrentStep}) => {
    
    const [securityQuestion, setSecurityQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [acceptanceToU, setAcceptanceToU] = useState(false);

    const [securityQuestionList, setSecurityQuestionList] = useState([]);

    useEffect(() => {
        search("/security_questions", setSecurityQuestionList);
    }, []);   

    const onSubmit = (event) => {  
        event.preventDefault();         
        console.log(JSON.stringify({securityQuestion, answer, acceptanceToU}));
    }

    return (
        <ClayForm id="registration-security-data" onSubmit={onSubmit}>
            <ClayPanel displayTitle="Security Data" displayType="unstyled">
                <ClayPanel.Body>
                    <ClayForm.Group>
                        <label htmlFor="securityQuestion">Security Question</label>
                        <ClaySelect 
                            id="securityQuestion"
                            name="securityQuestion"
                            defaultValue={securityQuestion.id}
                            onClick={(event) => {
                                setSecurityQuestion(event.target.value);                            
                            }}

                        >
                            {securityQuestionList.map((securityQuestion) => (
                                <ClaySelect.Option 
                                    key={securityQuestion.id}
                                    label={securityQuestion.question}
                                    value={securityQuestion.id}
                                />
                            ))}
                        </ClaySelect>
                    </ClayForm.Group>

                    <ClayForm.Group>
                        <label htmlFor="answer">Answer</label>
                        <ClayInput 
                            id="answer"
                            name="answer"
                            placeholder="Insert your answer here"
                            type="text"
                            required
                            onChange={(event) => {
                                setAnswer(event.target.value);
                            }}
                        />
                    </ClayForm.Group>

                    <ClayForm.Group>
                        <div className="container">
                            <div className="row">
                                <ClayCheckbox
                                    id="acceptance"
                                    name="acceptance"
                                    checked={acceptanceToU}
                                    onChange={() => {
                                        if (acceptanceToU === true)
                                            setAcceptanceToU(value => !value)
                                        }
                                    }
                                >
                                    <span>&ensp;You must read, understand, and agree with the <TermsOfUseModal acceptanceToU={acceptanceToU} setAcceptanceToU={setAcceptanceToU}/> governing the access to and use of this web site.</span>
                                </ClayCheckbox>
                            </div>
                        </div>                            
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
                            onClick={() => onSubmit()}
                        >
                            Register
                        </ClayButton>
                    </div>
                </ClayButton.Group>
            </div>                
        </ClayForm>
    );

}

export default SecurityData;