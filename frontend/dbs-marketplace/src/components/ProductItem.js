import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProductItem = (props)=>{
    const productData = 
 
        {
            "id": 20,
            "title": "DANVOUY Womens T Shirt Casual Cotton Short",
            "price": 12.99,
            "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
            "category_id": 4,
            "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            "qty": 50
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
          <Typography variant="body2" color="text.secondary">
            Price: ${props.productData.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: ${props.productData.qty}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Product Details</Button>
        </CardActions>
        </div>
        
      </Card>
    );
}
export default ProductItem;