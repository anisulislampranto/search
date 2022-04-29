import { useState } from "react";
import "./App.css";

const searchedProducts = [
  { name: "dell supar" },
  { name: "acer" },
  { name: "asus" },
  { name: "apple" },
  { name: "hp" },
];

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h1>Search</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {searchedProducts
        .filter((product) => {
          if (
            product.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          ) {
            return product;
          }
          return null;
        })
        .map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
    </div>
  );
}

export default App;
