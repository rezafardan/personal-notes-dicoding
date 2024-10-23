import React from "react";
import { createRoot } from "react-dom/client";

// import style
import "./styles/style.css";
import Homepage from "./pages/Homepage";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Homepage />
  </>
);
