import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
