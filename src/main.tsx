import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./routes/about";
import { Navbar } from "./components/shared/navbar";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route index element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
);
