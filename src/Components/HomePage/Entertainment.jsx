import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "../Styling/RecommendedMovies.module.css";
import { Link } from 'react-router-dom';

const data = [
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20699318/pexels-photo-20699318/free-photo-of-a-white-sand-desert-with-tracks-in-the-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
]

export const Entertainment = () => {
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
    return (
        <div className={styles.parent} style={{ margin: 10 }}>
            <div className={styles.parent__text}>
                <h1>List of Poly Houses</h1>
            </div>


            <div className={styles.entertainment_container}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} >
                    {
                        data?.map((image, index) => (
                            <div key={index + 1}>
                                <Link to={`/movies/${index + 1}`}>
                                    <img src={image} alt="Entertainment" />
                                </Link>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}