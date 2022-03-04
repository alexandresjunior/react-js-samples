import React from "react";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import Payment from "./Payment";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, items, removeItem }) => {
  return (
    <>
      <Header />
      <section className="h-100 h-custom">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card shopping-cart">
              <div className="col">
                <div className="card-body text-black">
                  <div className="row mt-3">
                    <Link to={"/"}>
                      <h5>
                        <i className="bi bi-arrow-left p-2"></i>Back to shopping
                      </h5>
                    </Link>
                  </div>
                </div>
                <div className="card-body text-black">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Your products
                      </h3>
                      {items.map((item) => (
                        <div className="d-flex align-items-center mb-5" key={item.product.id}>
                          <div className="flex-shrink-0">
                            <img
                              src={item.product.image}
                              className="img-fluid cart-item"
                              alt={item.product.name}
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <button
                              className="btn float-end"
                              onClick={() => {
                                removeItem(item);
                              }}
                            >
                              <i className="bi bi-x-circle-fill"></i>
                            </button>
                            <h5 className="text-primary">
                              {item.product.name}
                            </h5>
                            <h6 className="text-secondary">
                              Number of items: {item.number}
                            </h6>
                            <h4 className="text-black">$ {item.price}</h4>
                          </div>
                        </div>
                      ))}

                      <hr className="mb-4" />

                      <div className="d-flex justify-content-between p-2 mb-2">
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">$ {cart}</h5>
                      </div>
                    </div>

                    <Payment />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
