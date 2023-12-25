import react from "react";
import "./Grid.css";
import ProductCard from "./ProductCard";
const Grid = ({ products }) => {
  return (
    <div className="grid">
      <div className="container">
        <div className="content">
          <div className="row" id="data">
            {products.length !== 0
              ? products.map((product, index) => {
                  return <ProductCard key={product.id} product={product} />;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
