
import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [products, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [accessToken,setAccessTocken]=useState("");

  useEffect(() => {
    fetchAllProducts();
  }, []);

  async function getDataFromAPI(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }
  const fetchAllProducts = async () => {
    try {
      const data = await getDataFromAPI("https://dummyjson.com/products");
      setAllProducts(data.products);
      setFilteredProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
 

  const fetchProductsByCategory = async (category) => {
    
    try {
      const data = await getDataFromAPI(`https://dummyjson.com/products/category/${category}`);
      console.log(data);
      setFilteredProducts(data.products);
    } catch (error) {
      console.error('Error fetching products by category:', error);
    }
  };

  const fetchSearchedProducts = async (query) => {
    try {
      const data = await getDataFromAPI(`https://dummyjson.com/products/search?q=${searchQuery}`);
      setFilteredProducts(data.products);
      console.log(data,"auj");
    } catch (error) {
      console.error('Error fetching searched products:', error);
    }
  };

  const addToCart = (product) => {
    setCart(prevCart=>{
      const updatedCart=[...prevCart,product];
      return updatedCart
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <MyContext.Provider
      value={{
        products,
        filteredProducts,
        searchQuery,
        setAllProducts,
        setFilteredProducts,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        fetchProductsByCategory,
        fetchSearchedProducts,
        fetchAllProducts,
        cart,
        setCart,
        addToCart,
        removeFromCart,accessToken,setAccessTocken
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
