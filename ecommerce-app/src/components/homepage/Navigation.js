import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ cart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-chocolate">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to={"/"}>
          E-commerce React App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <form className="d-flex">
            <button className="btn btn-outline-light" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-light text-dark ms-1 rounded-pill">
                {cart}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
