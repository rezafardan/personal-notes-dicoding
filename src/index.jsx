import React from "react";
import { createRoot } from "react-dom/client";

// import style
import "./styles/style.css";
import Header from "./components/Header";
import Body from "./components/Body";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Body />
  </>
);
