import { MyContext } from "../../context/data/MyContext";
import { Link } from "react-router-dom";
import { useContext ,useState,useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader"; 

const ProductList = () => {
  const { products, fetchAllProducts, filteredProducts, searchQuery } = useContext(MyContext);

  const [whatToDisplay, setWhatToDisplay] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      if (products.length === 0) {
        await fetchAllProducts(); 
      }

      if (filteredProducts.length > 0) {
        setWhatToDisplay(filteredProducts);
      } else if (searchQuery.length > 0) {
        setWhatToDisplay(products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase())));
      } else {
        setWhatToDisplay(products);
      }
      setLoading(false);
    };

    fetchData();
  }, [products, filteredProducts, searchQuery, fetchAllProducts]);

  
  if (loading) {
    return (
      <div className="loaderContainer">
        <ClipLoader color="#36d7b7" loading={true} size={50} />
      </div>
    );
  }

  return (
    <div>
      <div className="allProductWrapper">
        {whatToDisplay.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
            className="singleProduct"
          >
            <div className="thumbnail">
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="infodiv">
              <p>
                <strong>ID:</strong> {product.id}
              </p>
              <p>
                <strong>Name:</strong> {product.title}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <Link to={`/product/${product.id}`} style={{ margin: "10px" }} className="ViewMoreDetails">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
