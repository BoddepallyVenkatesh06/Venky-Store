import "./styles.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [updatedProducts, setupdatedProducts] = useState([]);

  const [search, setSearch] = useState("");

  const getProducts = async () => {
    const res = await axios.get(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    const data = await res.data;
    return data;
  };

  const searchProduct = () => {
    let updatedProducts = [];
    if (products.length !== 0) {
      updatedProducts = products.filter((product) => {
        return product.type === search;
      });
    }
    if (updatedProducts.length !== 0) {
      setupdatedProducts(updatedProducts);
    }
  };

  useEffect(() => {
    const onloadHandler = async () => {
      let data = await getProducts();
      setProducts(data);
      setupdatedProducts(data);
    };
    onloadHandler();
  }, []);

  return (
    <div className="App">
      <h1>Venkys Store</h1>
      <Nav />
      <div className="searchbox">
        <input
          className="hero-input"
          placeholder="Search products"
          id="search-city"
          onChange={(event) => setSearch(event.target.value)}
          // onKeyPress="searchCity(event)"
        />
        <button id="searchBtn" onClick={searchProduct}>
          search
        </button>
      </div>
      <Main products={updatedProducts} />
    </div>
  );
}
