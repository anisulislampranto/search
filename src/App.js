import { useState } from "react";
import "./App.css";

const searchedProducts = [
  { name: "dell", link: "https://en.wikipedia.org/wiki/Dell" },
  { name: "acer", link: "https://www.acer.com/ac/en/GB/content/home" },
  { name: "asus", link: "https://www.asus.com/bd/" },
  { name: "apple", link: "https://www.apple.com/" },
  { name: "hp", link: "https://www.hp.com/us-en/home.html" },
];

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h1>Search</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {search === ""
        ? null
        : searchedProducts
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
              <li style={{ listStyleType: "none" }} key={index}>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href={product.link}
                >
                  {product.name}
                </a>
              </li>
            ))}
    </div>
  );
}

export default App;
