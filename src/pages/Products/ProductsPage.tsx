import ProdactsHeader from "../../components/ProdactsHeader/ProdactsHeader";
import ProductsFilter from "../../components/ProductFilter/ProductsFilter";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import Pagination from "../../components/Pagination/Pagination";
import "./ProductsPage.css"

export default function ProductsPage(){

    return (<>
    <div className="productpage">
    <ProdactsHeader/>
    
    <ProductsContainer/>
     
    </div>
    </>)
}