import React, { useState, useEffect, useContext } from "react";
import AmazonLogo from "../../assets/Amazonlogo.png";
import IndianFlag from "../../assets/flag.png";
import IndiaGate from "../../assets/IndiaGate.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { MyContext } from "../../context/data/MyContext";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

function Navbar() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const context = useContext(MyContext);
  const {
    fetchAllProducts,
    fetchProductsByCategory,
    searchQuery,
    setSearchQuery,
    fetchSearchedProducts,
    cart,
    accessToken,
  } = context;

  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSearch = async () => {
    if (searchQuery) {
      fetchSearchedProducts();
    } else {
      fetchAllProducts();
    }
  };

  const handleCategoryChange = async (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "All") {
      setSearchQuery("");
      fetchAllProducts();
    } else {
      fetchProductsByCategory(category);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="upperPart">
        <div className="upperleftpart">
          <div className="logo">
            <Link to="/">
              <img src={AmazonLogo} alt="Amazon Logo" />
            </Link>
          </div>
        </div>
        <div className="locationpart">
          <div className="locationImg">
            <LocationOnOutlinedIcon
              style={{ fontSize: "19px", marginTop: "15px" }}
            />
          </div>
          <div className="location">
            <p>Deliver to Durg 491441</p>
            <h4>
              <b>Update location</b>
            </h4>
          </div>
        </div>

        <div className="searchBar">
          <div className="selector">
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="All">All</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search Amazon.in"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleKeyPress}
            />
          </div>
          <div className="searchbutton" onClick={handleSearch}>
            <SearchOutlinedIcon className="SearchIcon" />
          </div>
        </div>

        <div className="upper-right">
          <div className="language">
            <img src={IndianFlag} alt="Indian flag" className="IndianFlag" />
            <h3>EN</h3>
            <ArrowDropDownIcon style={{ marginTop: "10px" }} />
          </div>

          <div className="signin">
            <p>Hello</p>
            <div className="accountinfo">
              <h5>Account and Lists </h5>
              <ArrowDropDownIcon />
            </div>
          </div>

          <div className="return">
            <p>Returns <b>& Order</b></p>
            
          </div>

          <div>
            {accessToken ? (
              <Link to="/cart" className="cart">
                <div className="cartlogo">
                  <ShoppingCartOutlinedIcon style={{ fontSize: "35px" }} />
                  <p>{cart.length}</p>
                </div>
                <div className="cartname">
                  <p style={{ fontSize: "30px" }}>Cart</p>
                </div>
              </Link>
            ) : (
              <Link
                to="/SignIn"
                className="SignInButton"
              >
                <b>SignIn</b>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="lowerPart">
        <div className="lowerleft">
        <MenuSharpIcon className="hamburger" />
          <ul>
            <li>
              <MenuSharpIcon />
              
            </li>
            <li>Amazon miniTV</li>
            <li>Sell</li>
            <li>Best Sellers</li>
            <li>Today's Deals</li>
            <li>Mobiles</li>
            <li>Prime</li>
            <li>Fashion</li>
            <li>New Releases</li>
            <li>Home & Kitchen</li>
          </ul>
        </div>
        <div className="lowerright">
          <img src={IndiaGate} alt="India Gate" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
