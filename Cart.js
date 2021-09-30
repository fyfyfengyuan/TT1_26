import React, { Component, Alert } from 'react';





const Cart = ()=>{

   const quantity=0
   const total=0;
    
    const img ="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
    const itemData = 
 
        {
            "id": 20,
            "title": "DANVOUY Womens T Shirt Casual Cotton Short",
            "price": 12.99,
            "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
            "category_id": 4,
            "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            "qty": 50
        }
    const handleincrement =() =>{

      

    }

    const handledecement =() =>{

    }
  
    return(
        <section className="main-Cart-section">
         <h1 className="title-page">Shopping cart</h1>
         <p className ="total-items"> you have <span className="total-items-count"> </span>7 items inshopping card </p>
        
        <div className ="cart-items">
            <div className="cart-item-containers">
           <div >
            <h4>Item ID : {itemData.id}</h4>
            <h4>Product Name : {itemData.title}</h4>
            <img src={img }></img>
            <p> $ {itemData.price}</p>
            <p >Description : {itemData.description}</p>
            <button onClick={handleincrement}> +</button>
            <p>Quantity selected : {quantity}</p>
            <button onClick={handledecement}> - </button>
            </div>
        </div>
        </div>
       <div className ="footer-items">
           <button>Check out</button>
           <p>Total price : {total} </p>

       </div>
        </section>
        

       
    );

    }
    export default Cart