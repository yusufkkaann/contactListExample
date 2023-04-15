import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import About from './components/About'
import Users from './components/Users'
import Home from './components/Home'



function App() {

  const activeStyle = {
    textDecoration: "underline",
    backgroundColor: "#ddd",
    fontSize: 18,
  }

  const activeClassName = "nav"

  return (
    <>
    {/* Rotuing işlemleri için burayı sarmalamamız gerekli */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                  {/* a href verseydik burası sayfa yenileyecekti onun yerine React'e özgü olan Link ya da NavLink hook'larını kullanıyoruz. Aralarındaki farkı ise style tanımlamalarında NavLink bize aktif olan linke özel class ya da style tanımlaması sunması. Başkar bir farkı yok aralarında */}
                <NavLink style={ ({ isActive }) => isActive ? activeStyle : undefined }  to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={ ({ isActive }) => isActive ? activeClassName : undefined} to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className={ ({ isActive }) => isActive ? activeClassName : undefined} to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
          {/* Butona basıldıktan sonra nereye gidileceğini gösteren yol haritamızı burada tanımlıyoruz. Eski adı switch. */}
          <Routes>
            {/* Buradaki elementler bir sayfayı temsil ediyor. Şart hangisine uyuyorsa onu çalıştırır. */}
            <Route path="/"  element={<Home />} /> | {" "}
            <Route path="/about" element={<About />} />
            {/* Nested yani iç içe route için başlangıçta bu alttaki yapıyı kullanmamız gerekiyor */}
            <Route path="/users/*" element={<Users />} />
            {/* Eğer herhangi bir path ile eşleşmezse bir hata sayfası döndürüyoruz */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}




export default App;