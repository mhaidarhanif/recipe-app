import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./routes/about";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
);
