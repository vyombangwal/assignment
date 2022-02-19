import logo from "./logo.svg";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const url = "http://3.109.141.224:5000";
  const [data, setData] = useState(null);
  useEffect(() => {
    const response = axios.get(url + "/api/user-access-token").then((res) => {
      axios
        .get(url + "/api/data?search_string=", {
          headers: {
            Authorization: "Bearer " + res.data.token,
          },
        })
        .then((res) => {
          setData(res.data);
        });
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;
