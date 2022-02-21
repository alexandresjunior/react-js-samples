import React, { useState, useEffect } from "react";
import ClayForm, { ClayInput, ClaySelect } from "@clayui/form";
import ClayButton from "@clayui/button";
import ClayPanel from '@clayui/panel';
import { search } from "../api/index";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

const ContactData = () => {

    const [homePhone, setHomePhone] = useState([]);
    const [mobilePhone, setMobilePhone] = useState([]);
    const [address1, setAddress1] = useState([]);
    const [address2, setAddress2] = useState([]);
    const [city, setCity] = useState([]);
    const [state, setState] = useState([]);
    const [zipCode, setZipCode] = useState([]);

    const [stateList, setStateList] = useState([]);

    useEffect(() => {
        search("/states", setStateList);
    }, []);

    const onSubmit = (event) => {  
        event.preventDefault();         
        console.log(JSON.stringify({homePhone, mobilePhone, address1, address2, city, state, zipCode}));
    }

    return (
        <div className="container col col-6">
            <div className="text-center mt-3 mb-3">
                <span>Step 2 of 3</span>
            </div>

            <h3 className="text-center mb-3">
                Let's register your account!
            </h3>

            <ClayForm id="registration-contact-data" onSubmit={onSubmit}>
                <ClayPanel displayTitle="Contact Data" displayType="unstyled">
                    <ClayPanel.Body>
                        <ClayForm.Group>
                            <label htmlFor="homePhone">Home Phone</label>
                            <ClayInput 
                                id="homePhone"
                                name="homePhone"
                                placeholder="Insert your home phone here"
                                type="text"
                                required
                                onChange={(event) => {
                                    setHomePhone(event.target.value);
                                }}
                            />
                        </ClayForm.Group>

                        <ClayForm.Group>
                            <label htmlFor="mobilePhone">Mobile Phone</label>
                            <ClayInput 
                                id="mobilePhone"
                                name="mobilePhone"
                                placeholder="Insert your mobile phone here"
                                type="text"
                                required
                                onChange={(event) => {
                                    setMobilePhone(event.target.value);
                                }}
                            />
                        </ClayForm.Group>

                        <ClayForm.Group>
                            <label htmlFor="address1">Address 1</label>
                            <ClayInput 
                                id="address1"
                                name="address1"
                                placeholder="Insert your address here"
                                type="text"
                                required
                                onChange={(event) => {
                                    setAddress1(event.target.value);
                                }}
                            />
                        </ClayForm.Group>

                        <ClayForm.Group>
                            <label htmlFor="address2">Address 2</label>
                            <ClayInput 
                                id="address2"
                                name="address2"
                                placeholder="Complement your address here"
                                type="text"
                                required
                                onChange={(event) => {
                                    setAddress2(event.target.value);
                                }}
                            />
                        </ClayForm.Group>

                        <ClayForm.Group>
                            <label htmlFor="city">City</label>
                            <ClayInput 
                                id="city"
                                name="city"
                                placeholder="Insert your city here"
                                type="text"
                                required
                                onChange={(event) => {
                                    setCity(event.target.value);
                                }}
                            />
                        </ClayForm.Group>

                        <ClayForm.Group>
                            <label htmlFor="state">State</label>
                            <ClaySelect 
                                id="state"
                                name="state"
                                defaultValue={state.id}
                                onClick={(event) => {
                                    setState(event.target.value);                            
                                }}

                            >
                                {stateList.map((state) => (
                                    <ClaySelect.Option 
                                        key={state.id}
                                        label={state.name}
                                        value={state.id}
                                    />
                                ))}
                            </ClaySelect>
                        </ClayForm.Group>

                        <ClayForm.Group>
                            <label htmlFor="zipCode">Zip Code</label>
                            <ClayInput 
                                id="zipCode"
                                name="zipCode"
                                placeholder="Insert your zip code here"
                                type="number"
                                required
                                onChange={(event) => {
                                    setZipCode(event.target.value);
                                }}
                            />
                        </ClayForm.Group>
                    </ClayPanel.Body>
                </ClayPanel>

                <div className="sheet-footer">
                    <ClayButton.Group>
                        <div className="btn-group-item">
                            <ClayButton
                                onClick={() => {
                                    // TODO: Back to Personal Data form
                                }}                    
                                displayType="secondary"
                            >
                                Previous
                            </ClayButton>
                        </div>

                        <div className="btn-group-item">
                            <ClayButton
                                type="submit"
                                displayType="primary"
                            >
                                Next
                            </ClayButton>
                        </div>
                    </ClayButton.Group>
                </div>                
            </ClayForm>
        </div>
    )

}

export default ContactData;