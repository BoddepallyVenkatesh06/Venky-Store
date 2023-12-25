import react from "react";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <div className=" col-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <p>{product.name}</p>
        <img
          src={product.imageURL}
          class="card-img-top"
          alt="..."
          height="150"
          width="50"
        />
        <div className="card-body d-flex justify-content-around">
          <div>Rs. {product.price}</div>
          <div>
            <button type="button" class="btn btn-secondary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
