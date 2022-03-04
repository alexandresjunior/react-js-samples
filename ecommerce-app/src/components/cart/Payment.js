import React from "react";

const Payment = () => {
  return (
    <div className="col-lg-6 px-5 py-4">
      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

      <form className="mb-5">
        <div className="form-outline mb-5">
          <input
            type="text"
            id="card-number"
            className="form-control form-control-lg"
            size="17"
            minLength="19"
            maxLength="19"
            defaultValue="1234 5678 9012 3457"
          />
          <label className="form-label" htmlFor="card-number">
            Card Number
          </label>
        </div>

        <div className="form-outline mb-5">
          <input
            type="text"
            id="name-on-card"
            className="form-control form-control-lg"
            size="17"
            defaultValue="Alexandre de Souza Jr."
          />
          <label className="form-label" htmlFor="name-on-card">
            Name on card
          </label>
        </div>

        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="form-outline">
              <input
                type="text"
                id="card-expiration-date"
                className="form-control form-control-lg"
                size="7"
                minLength="7"
                maxLength="7"
                defaultValue="01/22"
              />
              <label className="form-label" htmlFor="card-expiration-date">
                Expiration
              </label>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="form-outline">
              <input
                type="password"
                id="security-code"
                className="form-control form-control-lg"
                size="1"
                minLength="3"
                maxLength="3"
                defaultValue="&#9679;&#9679;&#9679;"
              />
              <label className="form-label" htmlFor="security-code">
                CVV
              </label>
            </div>
          </div>
        </div>

        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit{" "}
          <a href="#!">obcaecati sapiente</a>.
        </p>

        <button type="button" className="btn btn-primary btn-block btn-lg">
          Buy now
        </button>
      </form>
    </div>
  );
};

export default Payment;
