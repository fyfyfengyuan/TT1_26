import React from "react";

const ProductDetailsPage = () => {
  const dummyProduct = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category_id: 3,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      qty: 50,
    },
  ];

  //const [product, setProduct] = useState(dummyProduct);

  return (
    <div className="product" margin="50px" padding="50px">
      <div className="product-image">
        <img
          align="left"
          border="1"
          margin-left="100px"
          width="400px"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          //src=dummyProduct.
        />
      </div>
      <div className="text-details" align="right">
        <h1 className="product-title" align="center">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h4 className="product-category" align="center">
          Backpacks
        </h4>
        <p className="product-details" align="center" margin-top="50px">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className="Button" align="center">
          <button className="btn btn-danger btn-sm m-2">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
