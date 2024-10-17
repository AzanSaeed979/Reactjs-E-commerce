import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import SignUp from "../../pages/signup/SignUp";
import Login from "../../pages/login/Login";

const headerStyling = {
  width: "10%", // Keeps the logo at a reasonable size
  height: "auto", // Maintain aspect ratio
};

const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "-60px", // Adjusted for a less aggressive overlap
  gap: "20px", // Increased gap for better spacing between items
  listStyleType: "none", // Removes bullet points from the list
  padding: "0", // Removes default padding
};

const Header = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <header style={{ textAlign: "center", padding: "20px" }}>
      <div>
        <img style={headerStyling} src={logo} alt="No Image" />
      </div>
      <nav>
        <ul style={navStyle}>
          <li
            onClick={() => navigate("/listproduct")}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            List Product
          </li>
          <li  onClick={() => navigate(`/listproduct/:${id}`)} style={{ textDecoration: "none", color: "black", cursor: 'pointer/*--' }}>
            Product Details
          </li>
          <li
            onClick={() => navigate("/productcart")}
            style={{ textDecoration: "none", color: "black", cursor : 'pointer' }}
          >
            Product Cart
          </li>
        </ul>
        <div style={{display : 'flex', float : 'right', gap : '25px', marginTop : '-21px', cursor : 'pointer'}}>
          <Login />   
          <SignUp />    
        </div>
      </nav>
    </header>
  );
};

export default Header;
