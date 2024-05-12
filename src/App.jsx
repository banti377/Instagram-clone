import { useState } from "react";
import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [location, setLocation] = useState("");

  return (
    <BrowserRouter>
      <Router location={location} setLocation={setLocation} />
    </BrowserRouter>
  );
}

export default App;
