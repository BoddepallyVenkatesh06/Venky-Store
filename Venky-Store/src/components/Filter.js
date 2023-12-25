import react from "react";
import "./Filter.css";
import { useState } from "react";

const Filter = ({ onFiltered }) => {
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState([]);
  const [type, setType] = useState("");

  // const [filter, setFilter] = useState([
  //   { color: color },
  //   { gender: gender },
  //   { price: price },
  //   { type: type }
  // ]);

  const filter = [
    { color: color },
    { gender: gender },
    { price: price },
    { type: type }
  ];

  onFiltered(filter);

  const selectColor = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
  };
  const selectGender = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);
  };
  const selectPrice = (e) => {
    const selectedPrice = e.target.value.split("-");
    setPrice(selectedPrice);
  };
  const selectType = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
  };

  return (
    <div className="filters">
      <p>Color</p>
      <ul>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="Red"
              name="color"
              id="flexCheckChecked"
              onChange={(e) => selectColor(e)}
            />
            <label class="form-check-label" htmlFor="flexCheckChecked">
              Red
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="Blue"
              name="color"
              id="flexCheckChecked"
              onChange={(e) => selectColor(e)}
            />
            <label class="form-check-label" htmlFor="flexCheckChecked">
              Blue
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="Green"
              name="color"
              id="flexCheckChecked"
              onChange={(e) => selectColor(e)}
            />
            <label class="form-check-label" htmlFor="flexCheckChecked">
              Green
            </label>
          </div>
        </li>
      </ul>
      <p>Gender</p>
      <ul>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value="Men"
              id="flexCheckChecked"
              onChange={(e) => selectGender(e)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Men
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value="Women"
              id="flexCheckChecked"
              onChange={(e) => selectGender(e)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Women
            </label>
          </div>
        </li>
      </ul>
      <p>Price</p>
      <ul>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="price"
              value="0-250"
              id="flexCheckChecked"
              onChange={(e) => selectPrice(e)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              0-Rs.250
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="price"
              value="251-450"
              id="flexCheckChecked"
              onChange={(e) => selectPrice(e)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Rs.251-450
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="price"
              value="450-10000"
              id="flexCheckChecked"
              onChange={(e) => selectPrice(e)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Rs.450
            </label>
          </div>
        </li>
      </ul>
      <p>Type</p>
      <ul>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="Polo"
              name="type"
              id="flexCheckChecked"
              onChange={(e) => selectType(e)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Polo
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="Hoodie"
              name="type"
              id="flexCheckChecked"
              onChange={(e) => selectType(e)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Hoodie
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="Basic"
              name="type"
              id="flexCheckChecked"
              onChange={(e) => selectType(e)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Basic
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
