import React, { useEffect, useState } from "react";
import { search } from "../../api/index";
import { Link } from "react-router-dom";

const Section = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    search("/products", setProducts);
  }, []);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    <h3 className="fw-bolder">
                      {product.category === "sweets"
                        ? "$ " + product.price + "/unit"
                        : "Price variable"}
                    </h3>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  {product.category === "sweets" && (
                    <div className="row">
                      <div className="col">
                        <select
                          className="form-select btn-outline-dark"
                          defaultValue="10"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="#">
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {product.category !== "sweets" && (
                    <div className="text-center">
                      <Link
                        className="btn btn-outline-dark mt-auto"
                        to={`/products/${product.id}`}
                      >
                        View options
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
