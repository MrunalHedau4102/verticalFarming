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
      title: "Poly House 1",
      imageurl: "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium quam deleniti corrupti doloribus quibusdam nulla atque incidunt odit libero, maiores repellendus! Architecto deserunt dolorum dolore, exercitationem accusamus, consectetur ullam perferendis quibusdam saepe libero enim aliquid facere repudiandae vel maiores non expedita autem molestiae amet sed? Fugiat, consectetur alias? Commodi pariatur minus voluptatibus quidem voluptatum dicta soluta labore, ratione earum, consequuntur saepe quasi, asperiores molestias. Possimus fugit non dignissimos id quas aliquid blanditiis, earum obcaecati. Delectus provident necessitatibus magnam quos, quis ipsum. Mollitia ut qui et dignissimos deserunt inventore sit explicabo, cupiditate neque amet esse, animi adipisci libero nihil itaque!",
    cropName: ["Crop 1", "Crop 2", "Crop 3"],
    posterUrl: "https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      _id: 2,
      title: "Poly House 2",
      imageurl: "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "This is a description of Movie 1",
      cropName: ["Crop 1", "Crop 2", "Crop 3"],
    posterUrl: "https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      _id: 3,
      title: "Poly House 2",
      imageurl: "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "This is a description of Movie 1",
      cropName: ["Crop 1", "Crop 2", "Crop 3"],
    posterUrl: "https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    // Add more movie objects as needed
  ];
  const movie = movies.find(movie => movie._id === Number(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }


  return (
    <div>
      <Container fluid style={{ padding: "0", height: "50vh", width: "100vw", backgroundImage: `url(${movie.posterUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      </Container>
      <Container>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#333", fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{movie.title}</h2>
          <p style={{ color: "#666", fontSize: "16px", marginBottom: "10px" }}>{movie.description}</p>
          {movie.cropName.map((crop, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", color:"black"}}>
              <span style={{ marginRight: "10px", fontSize: "18px",  color:"black"}}>Crop: {crop}</span>
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
      <Button variant="primary" style={{ marginTop: "20px" }}>
        Total items in cart: {Object.values(cart).reduce((a, b) => a + b, 0)}
      </Button>
    </div>
  );
};

export default MoviePage;