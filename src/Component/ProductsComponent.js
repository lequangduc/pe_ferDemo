import React from "react";
import { useState } from "react";
import PhoneForm from "./FormComponent";
import PhoneList from "./ListComponent";
import { PHONES } from "../Shared/phones";
function Main() {
  // Initial phones to localStorage
  const [items, updateItems] = useState(() => {
    const store = JSON.parse(localStorage.getItem("items"));
    if (store) {
      return store;
    } else {
      localStorage.setItem("items", JSON.stringify(PHONES));
      return PHONES;
    }
  });
  const addItems = (item) => {
    updateItems(() => {
      const tempItem = [...items, item];
      localStorage.setItem("items", JSON.stringify(tempItem));
      return tempItem;
    });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <PhoneForm addItems={addItems} />
        </div>
        <div className="row">
          <PhoneList localitems={items} />
        </div>
      </div>
    </div>
  );
}
export default Main;
