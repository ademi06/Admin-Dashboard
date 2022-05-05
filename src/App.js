import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from "./components/pages/homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList/>}></Route>
          <Route path="/user/:userId" element={<User/>}></Route>
          <Route path="newUser" element={<NewUser/>}></Route>
          <Route path="product" element={<ProductList/>}></Route>
          <Route path="/product/:productId" element={<User/>}></Route>
          <Route path="newproduct" element={<NewUser/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
