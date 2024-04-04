import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SingleView from "./components/SingleView";

function App() {
  const [dark, setDark] = useState(false);
  //{dark && "dark"}

  return (
    <div className={dark && "dark"}>
      <Routes>
        <Route path="/" element={<Content setDark={setDark} />} />
        <Route path="/:location" element={<SingleView />} />
      </Routes>
    </div>
  );
}

export default App;
