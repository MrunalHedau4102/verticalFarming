import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Styling/RecommendedMovies.module.css";
import { RiArrowRightSLine } from "react-icons/ri";
import Carousel from 'react-multi-carousel';

export const RecommendedMovies = () => {
    const movies_data = useSelector(state => state.app.movies_data);

    const filteredRecommendedMovies = movies_data.filter(movie => (
        !movie.is_premier
    ));

    const polyhouses = [
        {
            name: "Krishikan",
            location: "Bangalore, India [Founded 2020]",
            size: "Size 1",
            cropsGrown: "Spices",
            image: "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "PlantFarmula",
            location: "Hyderabad, India [Founded 2021]",
            size: "Size 2",
            cropsGrown: "lettuces, Kale, Arugula, Spinach, Amarantus, leafy lettuce, spice mix etc..",
            image: "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "WAY2GROW",
            location: "Chennai, India [Founded 2020]",
            size: "Size 1",
            cropsGrown: "lettus, tomatoes, etc..",
            image: "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Triton Foodworks",
            location: "New Delhi, India [Founded 2015]",
            size: "Size 2",
            cropsGrown: "premium-quality fruits and vegetables.",
            image: "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Macrogardens",
            location: "Lucknow, India [Founded 2020]",
            size: "Size 1",
            cropsGrown: "berries, cucumber, etc..",
            image: "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        // {
        //     name: "Polyhouse 2",
        //     location: "Location 2",
        //     size: "Size 2",
        //     cropsGrown: "Crops Grown 2",
        //     image: "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600"
        // },
        // Add more polyhouses as needed
    ];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const customStyles = {
        entertainmentContainer: {
            padding: '1rem',
        },
        cardCustom: {
            width: '100%',
            margin: '1rem',
            border: '5px solid #ddd',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff', // Optional for better visibility
        },
        cardImgTop: {
            width: '100%',
            height: 'auto',
        },
        cardBody: {
            padding: '1rem',
        },
        cardLinks: {
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
        },
    };
    return (
        <div className={styles.parent} style={{ padding: "20px", border: "1px solid black" }}>
            <div className={styles.parent__text}>
                <h1>Recommended Polyhouses</h1>
                <Link to="/ncr/movies" className={styles.link}>See all <RiArrowRightSLine /></Link>
            </div>
            <div style={customStyles.entertainmentContainer}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {polyhouses.map((polyhouse, index) => (
                        <div key={index + 1} style={customStyles.cardCustom}>
                            <Link to={`/movies/${index + 1}`}>
                                <img style={customStyles.cardImgTop} src={polyhouse.image} alt="Entertainment" />
                            </Link>
                            <div className="card-body" style={customStyles.cardBody}>
                                <h5 className="card-title">{polyhouse.name}</h5>
                                <ul className="list-group list-group-flush" style={styles.listGroup}>
                                    <li className="list-group-item" style={styles.listItem}>Location: {polyhouse.location}</li>
                                    <li className="list-group-item" style={styles.listItem}>Size: {polyhouse.size}</li>
                                    <li className="list-group-item" style={styles.listItem}>Crops Grown: {polyhouse.cropsGrown}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}