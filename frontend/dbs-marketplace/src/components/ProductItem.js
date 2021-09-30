import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router";



const ProductItem = (props)=>{
  const history = useHistory();
  const [data, setData] = useState(props.productData);

  const productDetailsHandler = ()=>{
    history.push({
      pathname: "/ProductDetailsPage",
      state: { productDetails: data },
    });
  }
    return(
        <Card style={{display:"flex", flexDirection:"row", borderColor:"black", padding:"30px", margin:"20px"}}>
        <CardMedia
          component="img"
          style= {{height:"200px",width:"auto",  objectFit:"contain"}}
          image={props.productData.image}
          alt="green iguana"
        />
        <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.productData.title}
          </Typography>
          {props.isHome && <Typography variant="body2" color="text.secondary" style={{textAlign:"left"}}>
            Price: ${props.productData.price}
          </Typography>}
          
          <Typography variant="body2" color="text.secondary" style={{textAlign:"left"}}>
            Quantity: {props.productData.qty}
          </Typography>
        </CardContent>
        {props.isHome && <CardActions>
          <Button onClick={productDetailsHandler} size="small">Product Details</Button>
        </CardActions>}
        
        </div>
        
      </Card>
    );
}
export default ProductItem;