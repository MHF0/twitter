import "./App.css";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      {/* <Register /> */}
      <Home />
    </div>
  );
};

export default App;
