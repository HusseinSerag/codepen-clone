import { Navigate, Route, Routes } from "react-router-dom";

import LayoutWrapper from "./pages/LayoutWrapper";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutWrapper />}>
        <Route path="/login" element={<div>login</div>} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
}

export default App;
