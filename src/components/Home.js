import React, { useState } from "react";
import ReactDOM from "react-dom";
import diffPages from "../Data";

import "../index.css";
import "./Home.css";

const List = ({ data }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        className="searching"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <br />
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
  const someStyle = {
    display: "none",
  };
  return (
    <div className="Home">
      <button onClick={toggle}> Search </button>
      <div id="myDIV" style={someStyle}>
        <List data={diffPages} />
      </div>
    </div>
  );
}

function toggle() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);

export default Home;

//put an id on the input to show only that and hide the rest of the div
