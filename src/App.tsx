import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import articles from "./md/manifest.json";

function App() {
  const [code, setCode] = useState("");

  return (
    <div className="App">
      <Header
        articles={articles}
        showArticle={(code: string) => setCode(code)}
      ></Header>
      <div dangerouslySetInnerHTML={{ __html: code }}></div>
    </div>
  );
}

export default App;
