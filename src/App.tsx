import { Navigate, Route, Routes } from "react-router-dom";

import LayoutWrapper from "./pages/LayoutWrapper";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutWrapper />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
}

export default App;
