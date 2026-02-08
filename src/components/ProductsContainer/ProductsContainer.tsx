import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ProductsContainer.module.css";
import Pagination from "../Pagination/Pagination";
import ProductsFilter from "../ProductFilter/ProductsFilter.jsx";

export default function ProductsContainer() {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages,setTotalPages]=useState(1);
  const [filters,setFilters]=useState({from:"", to:"",price:""});
const handleFilterChange = (newFilters: { from: string; to: string ,price:string}) =>
   { setFilters(newFilters); console.log("Filters in parent:", newFilters); 
    };
  

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await axios.get(
          `https://api.redseam.redberryinternship.ge/api/products?page=${currentPage}&filter%5Bprice_from%5D=${filters.from}&filter%5Bprice_to%5D=${filters.to}&sort=${filters.price}`


        );
        setProducts(response.data.data);
        setTotalPages(response.data.meta.last_page);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProductData();
  }, [currentPage,filters]); // <-- refetch whenever page changes

  return (
    <>
    <ProductsFilter number={currentPage} onFilterChange={handleFilterChange}/>
      <div className={styles.container}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.cover_image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pass setCurrentPage to Pagination */}
      <Pagination
        totalPages={Math.floor(totalPages)}
        initialPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
