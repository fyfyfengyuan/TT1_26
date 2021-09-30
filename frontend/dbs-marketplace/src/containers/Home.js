import React, {useState, useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import axios from "axios";
import {useHistory} from "react-router-dom";

const Home = () =>{
    const history = useHistory();

    const getAllProducts = async() =>{
        const allProducts = await axios.get("http://localhost:8080/products/getAllProducts");
        setProductList(allProducts.data);
    }
    useEffect(() => {
        getAllProducts();
      }, []);


    const [productList, setProductList] = useState();

    return(
        <div style={{margin:"20px"}}>
            {productList && productList.map((product)=>(
                <ProductItem productData = {product} isHome={true}
                />
            ))}
        </div>
    );
}

export default Home;