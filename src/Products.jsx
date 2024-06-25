import React from "react";

const Products = ({ title, description, category, price, images }) => {
  return (
    <div className="card">
      <img src={images[0]} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">Category: {category}</small>
        </p>
        <p className="card-text">Price: ${price}</p>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default Products;
