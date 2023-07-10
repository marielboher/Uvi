import { useState } from "react";
import "./App.css";
import About from "./comoponents/About/About";
import Footer from "./comoponents/Footer/Footer";
import Form from "./comoponents/Form/Form";
import Home from "./comoponents/Home/Home";
import Navbar from "./comoponents/Navbar/Navbar";
import Services from "./comoponents/Services/Services";

function App() {
  const [positionAboutY, setPositionAboutY] = useState();
  function handleAction(y) {
    setPositionAboutY(y);
  }
  return (
    <div className="App">
      <Navbar dataAboutPosition={positionAboutY} />
      <Home />
      <About receiveDataAbout={handleAction} />
      <Services />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
