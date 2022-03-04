import React from "react";

const Cakes = ({ product, updatePrice }) => {
  return (
    <>
      <div className="row mt-5 mb-3">
        <div className="col col-6">
          <select
            id="size-options"
            className="form-select"
            aria-label="size options"
            onChange={() => updatePrice(product.category, 1)}
            defaultValue="Choose a size option"
          >
            <option value={0}>Choose a size option</option>
            {product.size_options.map((size_option) => (
              <option key={size_option.id} value={size_option.price}>
                {size_option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6">
          <select
            id="dough-options"
            className="form-select"
            aria-label="dough options"
            defaultValue="Choose a dough option"
          >
            <option value={0}>Choose a dough option</option>
            {product.dough_flavor_options.map((dough_flavor_option) => (
              <option
                key={dough_flavor_option.id}
                value={dough_flavor_option.id}
              >
                {dough_flavor_option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col col-6">
          <select
            id="filling-options"
            className="form-select"
            aria-label="filling options"
            defaultValue="Choose a filling option"
          >
            <option value={0}>Choose a filling option</option>
            {product.filling_options.map((filling_option) => (
              <option key={filling_option.id} value={filling_option.id}>
                {filling_option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6">
          <select
            id="top-options"
            className="form-select"
            aria-label="top options"
            defaultValue="Choose a top option"
          >
            <option value={0}>Choose a top option</option>
            {product.top_options.map((top_option) => (
              <option key={top_option.id} value={top_option.id}>
                {top_option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col col-6">
          <select
            id="extra-options"
            className="form-select"
            aria-label="extra options"
            onChange={() => updatePrice(product.category, 1)}
            defaultValue="Any extras?"
          >
            <option value={0}>Any extras?</option>
            {product.extra_options.map((extra_option) => (
              <option key={extra_option.id} value={extra_option.price}>
                {extra_option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mt-5 mb-3">
        <label className="mb-2">How many?</label>
        <div className="col-6">
          <input
            id="number-of-products"
            className="form-control"
            type="number"
            defaultValue={1}
            min={1}
            max={5}
            onChange={(event) => {
              updatePrice(product.category, event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Cakes;
