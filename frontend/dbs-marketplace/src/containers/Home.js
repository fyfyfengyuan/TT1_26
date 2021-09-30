import React, {useState, useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import axios from "axios";
import {useHistory} from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Home = () =>{

    const history = useHistory();

    const getAllProducts = async() =>{
        const allProducts = await axios.get("http://localhost:8080/products/getAllProducts");
        setProductList(allProducts.data);
        setFilteredProductList(allProducts.data);
    }

    const getAllCategories = async() =>{
        const l = []
        for (let i=1; i<5; i++){
            const catitem = await axios.get("http://localhost:8080/category/getCategoryById?categoryId=" + i);
            l.push(catitem.data);
        }
        setCategory(l);
    }
    useEffect(() => {
        getAllProducts();
        getAllCategories();
      }, []);

    const setSelectedCategoryList = (catid)=>{
        const categoryid = catid.target.value;
        if (categoryid === "all"){
            setFilteredProductList(productList);
            return;
        }
        setSelectedCategory(categoryid);
        const items = productList.filter((item)=>
            item.category_id === categoryid
        );
        console.log(items);
        setFilteredProductList(items);
    }

    const [categories, setCategory] = useState();
    const [productList, setProductList] = useState();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredProductList, setFilteredProductList] = useState();
    
    return(
        <div style={{margin:"20px"}}>
        <h1>Home</h1>
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategory}
          label="Categories"
          onChange={setSelectedCategoryList}
        >
        {
            categories && categories.map((category)=>(
                <MenuItem value={category.id}>{category.name}</MenuItem>
            ))
        }
          <MenuItem value={"all"}>All</MenuItem>
        </Select>
      </FormControl>
    </Box>
            {filteredProductList && filteredProductList.map((product)=>(

                <ProductItem productData = {product} isHome={true}
                />
            ))}
        </div>
    );
}

export default Home;