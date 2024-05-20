import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
const MoviePage = () => {


  const [cart, setCart] = useState([]);
  const addToCart = (crop) => {
    setCart(prevCart => ({
      ...prevCart,
      [crop]: (prevCart[crop] || 0) + 1, // Add the crop to the cart or increment its quantity
    }));
  };

  const removeFromCart = (crop) => {
    setCart(prevCart => {
      if (!prevCart[crop]) return prevCart; // If the crop is not in the cart, return the previous cart

      if (prevCart[crop] === 1) {
        const { [crop]: _, ...newCart } = prevCart; // If the crop's quantity is 1, remove it from the cart
        return newCart;
      }

      return {
        ...prevCart,
        [crop]: prevCart[crop] - 1, // Otherwise, decrement the crop's quantity
      };
    });
  };

  const cartQuantity = cart.length; // Calculate the total number of items in the cart

  const { id } = useParams();

  const movies = [
    {
      _id: 1,
      title: "Krishikan",
      imageurl: require("./vertical-farm.png"),
      description: "Sustainable farming services and solutions provider for farmers Vertically Integrated Spices Value Chain Platform! sBeing a farmer is a way of life and most do not realize that they are blessed with a skill to transform their farmland into an income source. We enable the business of farming and support them to maintain a growing income. Krishikan is primarily focusing on regenerative farming approaches to improve the efficiency and productivity of the spices value chain.",
      cropName: ["Tomato", "Letus", "Spices"],
      // posterUrl: require("./path/to/poster1.jpg")
    },
    {
      _id: 2,
      title: "PlantFarmula",
      imageurl: require("./Vertical-Farming-Companies4-1024x768.jpg"),
      description: "PlantFarmula an urban vertical farming technology startup. Introducing 'SMAR'- Smart Modular Aeroponics farming systems to farm and cater the urban consumers with a range of premium super crops leafy vegetables (lettuces) and salad greens (Kale, Arugula, Spinach, Amarantus, leafy lettuce, spice mix etc..) at affordable prices.      ",
      cropName: ["leafy vegetable", "green salads"],
      // posterUrl: require("./path/to/poster2.jpg")
    },
    {
      _id: 3,
      title: "WAY2GROW",
      imageurl: require("./organic-vertical-farming-pipe-lines-vertical-farming-cultivating-plant-skyscraper-greenhouse-vertically-inclined-119549579.webp"),
      description: "To improve agriculture production and revolutionize it by technology WAY2GROW is an agri-tech company with expertise in vertical farming, IoT. We supply fresh local foods which grown by means of technology like hydroponics, data analytics through controlled environment agriculture(CEA) technique to the customers. We are into the construction of Hi-Tech farming and also into the development of automated products for agriculture. Our mission is to provide food security, reduce food wastage, food transparency and zero-pest food to the people. Our goal is to make available food to everyone fresh that creates a healthy impact.",
      cropName: ["lettus", "tomatoes"],
      // posterUrl: require("./path/to/poster3.jpg")
    },
    {
      _id: 4,
      title: "Triton Foodworks",
      imageurl: require("./images.jpg"),
      description: "We are Triton Foodworks, a new age horticulture company that designs, builds and operates cost-effective greenhouse facilities in and around urban areas to grow fresh, premium-quality fruits and vegetables.      ",
      cropName: ["fruits", "vegetables"],
      // posterUrl: require("./path/to/poster4.jpg")
    },
    {
      _id: 5,
      title: "Macrogardens",
      imageurl: require("./images.jpg"),
      description: "We make vertical towers for growing plants aeroponically. Our towers can grow 20 times more food in the same amount of area, using up to 90% less water.      ",
      cropName: ["berries", "cucumber"],
      // posterUrl: require("./path/to/poster5.jpg")
    },
  ];
  const movie = movies.find(movie => movie._id === Number(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }


  return (
    <div>
      <Container fluid style={{ padding: "0", height: "50vh", width: "100vw", backgroundImage: `url(${movie.imageurl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      </Container>
      <Container style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#333", fontSize: "24px", fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>{movie.title}</h2>
          <p style={{ color: "#666", fontSize: "16px", marginBottom: "10px" }}>{movie.description}</p>
          {movie.cropName.map((crop, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", color: "black" }}>
              <span style={{ marginRight: "10px", fontSize: "18px", color: "black" }}>Crop: {crop}</span>
              <div>
                <button style={{ marginRight: "10px", padding: "5px 10px", fontSize: "18px" }} onClick={() => removeFromCart(crop)}> - </button>
                <span style={{ marginRight: "10px", fontSize: "18px" }}>{cart[crop] || 0}</span>
                <button style={{ marginRight: "10px", padding: "5px 10px", fontSize: "18px" }} onClick={() => addToCart(crop)}> + </button>
                <span style={{ fontSize: "18px" }}> Crop(s) in Cart</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" style={{ marginTop: "20px" }}>
          Total items in cart: {Object.values(cart).reduce((a, b) => a + b, 0)}
        </Button>
      </div>
      <span>
        <h2> </h2>
      </span>
    </div>
  );
};

export default MoviePage;