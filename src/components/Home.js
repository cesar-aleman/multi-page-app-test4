import React, { useState } from "react";
import ReactDOM from "react-dom";
import diffPages from "../Data";

import "../index.css";

const List = ({ data }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {data
        .filter((item) => {
          if (!value) return true;
          if (
            item.name.toLowerCase().includes(value) ||
            item.component.toLowerCase().includes(value) ||
            item.name.includes(value)
          ) {
            return true;
          }
          return false;
        })
        .map((item) => (
          <div className="links">
            <a href={item.component}>
              <div>
                <h1>{item.name}</h1>
              </div>
            </a>
            {/* <h1>{item.name}</h1>
            <a href={item.component}> Follow this Link to go to page. </a> */}
          </div>
        ))}
    </div>
  );
};

function Home() {
  return (
    <div className="Home">
      <List data={diffPages} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);

export default Home;
