import { useState } from "react";
import "./App.css";

const searchedProducts = [
  { name: "dell" },
  { name: "acer" },
  { name: "asus" },
  { name: "apple" },
  { name: "hp" },
];

function App() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="App">
      <h1>Search</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default App;
