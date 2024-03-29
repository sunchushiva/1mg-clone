import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/UserSide/Navbar";
import Footer from "./Components/UserSide/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
      {/* <Login/> */}
      <Toaster />
    </div>
  );
}

export default App;
