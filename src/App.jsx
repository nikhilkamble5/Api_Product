import React, { Component } from "react";
import Products from "./Products";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [], // Initialize products state to hold fetched data
    };
  }

  componentDidMount() {
    // Fetch data from API when component mounts
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data.products }); // Update products state with API data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center my-4">Product List</h1>
          <div className="row">
            {this.state.products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <Products
                  title={product.title}
                  description={product.description}
                  category={product.category}
                  price={product.price}
                  images={product.images}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
