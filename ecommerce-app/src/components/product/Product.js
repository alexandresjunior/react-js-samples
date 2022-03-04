import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { search } from "../../api";
import "../../assets/css/product.css";
import Cakes from "./Cakes";
import SugarCookies from "./SugarCookies";

const Product = () => {
  let history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    search(`/products/${id}`, setProduct);
  }, [history, id]);

  const [price, setPrice] = useState(0);
  const [number, setNumber] = useState(0);

  const updatePrice = (category) => {
    if (category === "cakes") {
      const priceValue = parseFloat(
        document.getElementById("size-options").value
      );
      const extraValue = parseFloat(
        document.getElementById("extra-options").value
      );

      const numberOfProducts = parseInt(
        document.getElementById("number-of-products").value
      );

      setPrice(parseInt(numberOfProducts)*(parseFloat(priceValue) + parseFloat(extraValue)));
    }

    if (category === "cookies") {
      const priceValue = parseFloat(
        document.getElementById("size-options").value
      );

      const numberOfProducts = parseInt(
        document.getElementById("number-of-products").value
      );

      setPrice(numberOfProducts*priceValue);
    }
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
              alt="..."
            />
          </div>

          <div className="col-md-6">
            <div className="small mb-1">{product.category}</div>
            <h1 className="display-5 fw-bolder">{product.name}</h1>

            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at dolorem quidem modi.
            </p>
            {product.category === "cakes" && (
              <Cakes product={product} updatePrice={updatePrice} setNumber={setNumber} />
            )}
            {product.category === "cookies" && (
              <SugarCookies product={product} updatePrice={updatePrice} setNumber={setNumber} />
            )}
            <div className="row">
              <div className="col col-6">
                <div className="fs-5 mt-5 mb-5">
                  <h1>
                    <span>$ {price}</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="row p-2">
              <button className="btn btn-outline-dark" type="button">
                <i className="bi-cart-fill me-1" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
