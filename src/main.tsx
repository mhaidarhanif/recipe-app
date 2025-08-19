import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./routes/about";
import { Navbar } from "./components/shared/navbar";
import { Counter } from "./routes/counter";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route index element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  </BrowserRouter>,
);
