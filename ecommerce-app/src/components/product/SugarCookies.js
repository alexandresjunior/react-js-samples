import React from "react";

const SugarCookies = ({ product, updatePrice }) => {
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

        <div className="col col-6">
          <select
            id="flavor-options"
            className="form-select"
            aria-label="flavor options"
            defaultValue="Choose a flavor option"
          >
            <option value={0}>Choose a flavor option</option>
            {product.flavor_options.map((flavor_option) => (
              <option key={flavor_option.id} value={flavor_option.id}>
                {flavor_option.name}
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
            max={10}
            onChange={(event) => {
              updatePrice(product.category, event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SugarCookies;
