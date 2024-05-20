import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "../Styling/RecommendedMovies.module.css";
import { Link } from 'react-router-dom';
const cropData = [
    {
        name: "Tomatoes",
        image: require("./tomatoes.jpg"),
        polyhouses: ["Krishikan", "PlantFarmula", "WAY2GROW"]
    },
    {
        name: "Carrots",
        image: require("./carrot-orange-500-g-product-images-o590000186-p590000186-0-202207291751.jpg"),
        polyhouses: ["PlantFarmula", "Triton Foodworks"]
    },
    {
        name: "Lettuce",
        image: require("./lettuce.webp"),
        polyhouses: ["WAY2GROW"]
    },
    {
        name: "Cucumbers",
        image: require("./images (1).jpg"),
        polyhouses: ["Triton Foodworks"]
    },
    {
        name: "Raspberries",
        image: require("./raspbery.jpg"),
        polyhouses: ["Macrogardens"]
    },
    {
        name: "Peaches",
        image: require("./peach.jpg"),
        polyhouses: ["Polyhouse 6"]
    },
    // Add more crops as needed
];

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
                <h1>List of Polyhouses Growing Each Crop</h1>
            </div>


            <div className={styles.entertainment_container}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {cropData?.map((crop, index) => (
                        <div key={index + 1} style={styles.cardCustom}>
                            <Link to={`/movies/${index + 1}`}>
                                <img style={styles.cardImgTop} src={crop.image} alt="Entertainment" />
                            </Link>
                            <ul className="list-group list-group-flush" style={styles.listGroup}>
                                {crop.polyhouses.map((polyhouse, polyIndex) => (
                                    <li key={polyIndex} className="list-group-item" style={styles.listItem}>{polyhouse}</li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}