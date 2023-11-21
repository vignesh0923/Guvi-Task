import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Newaccount from "./Newaccount";
import Signin from "./Signin";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Newaccount />} />
          <Route path="/signinpage" element={<Signin />} />
          <Route path="/profilepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
