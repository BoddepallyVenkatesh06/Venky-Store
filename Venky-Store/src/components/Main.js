import react, { useEffect, useState } from "react";
import Grid from "./Grid";
import Filter from "./Filter";
import "./Main.css";
import axios from "axios";
const Main = ({ products }) => {
  const [filter, setFilter] = useState([]);

  // const [updatedProducts, setUpdatedProducts] = useState([]);

  const filtered = (filterArr) => {
    setFilter(filterArr);
  };

  // const updateProducts = () => {
  //   let color = filter[0];
  //   let gender = filter[1];
  //   let price = filter[2];
  //   let type = filter[3];

  //   if (color == "" && gender == "" && price.length === 0 && type == "") {
  //     console.log("ok");
  //   } else if (
  //     color !== "" ||
  //     gender !== "" ||
  //     price.length !== 0 ||
  //     type !== ""
  //   ) {
  //     console.log(color, gender, price, type);
  //   }
  // };

  // if(filterArr.length)
  // let filtredProducts = products.filter((product) =>{

  // })

  // useEffect(() => {
  //   updateProducts();
  // }, [filter]);

  return (
    <div className="main">
      <Filter className="main__filters" onFiltered={filtered} />
      <Grid className="main__grid" products={products} />
    </div>
  );
};

export default Main;
