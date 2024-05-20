import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const dataList = [
    require("./pexels-nc-farm-bureau-mark-2886937.jpg"),
    require("./fresh-organic-vegetables-grow-greenhouse-industry-generated-by-ai.jpg"),

    require("./images.jpg"),
    require("./organic-vertical-farming-pipe-lines-vertical-farming-cultivating-plant-skyscraper-greenhouse-vertically-inclined-119549579.webp"),
    require("./vertical-farming-nvph-01-1000x1000.jpg"),
    // Add more image paths here
];

export const AddCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]} autoPlay infinite>
        {
        dataList?.map((banner, index) => (
            <div style={{ padding: "0px 15px", width: "100%", height: "500px", display: "flex", justifyContent: "center" }} key={index + 1}>
            <img style={{ width: "100%", height: "100%", objectFit: "fill", cursor: "pointer" }} src={banner} alt="Advertisement banner" />
            </div>
        ))
        }
</Carousel>
    )
}