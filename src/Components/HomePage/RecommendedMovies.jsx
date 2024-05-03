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

    const staticDataList = [
        "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=600",
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

    return (
        <div className={styles.parent} style={{ padding: "20px", border: "1px solid black" }}>
            <div className={styles.parent__text}>
                <h1>Recommended Poly Houses</h1>
                <Link to="/ncr/movies" className={styles.link}>See all <RiArrowRightSLine /></Link>
            </div>
            <div className={styles.movieCards}>
                <Carousel responsive={responsive} itemClass={styles.movieCard}>
                    {staticDataList.map((data, index) => (
                        <div key={index} className="card" style={{ width: "18rem", height: "18rem" }}>
                            <img src={data} className="card-img-top" alt="Movie Poster" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}