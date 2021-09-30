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
    <div className="product">
      <div className="product-image">
        <img
          align="left"
          border="1"
          margin="50px"
          width="400px"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
      </div>
      <div className="text-details" align="right">
        <div className="product-title" align="center">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </div>
        <div className="product-category" align="center">
          Backpacks
        </div>
        <div className="product-details" align="center">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </div>
        <div className="Button" align="center">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
