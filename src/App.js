import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/home-screen";
import ApproverScreen from "./screen/approver-screen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/approvers" element={<ApproverScreen />} />
    </Routes>
  );
}

export default App;
