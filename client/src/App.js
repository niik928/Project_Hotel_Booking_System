import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/register" element={<Registerscreen />} />
        <Route path="/login" element={<Loginscreen />} />
        <Route path="/home" element={<Homescreen />} />

        {/* FIXED ROUTE */}
        <Route
          path="/book/:roomid/:fromdate/:todate"
          element={<Bookingscreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;