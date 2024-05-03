import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const dataList = [
    "https://images.pexels.com/photos/5478921/pexels-photo-5478921.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6508401/pexels-photo-6508401.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6508402/pexels-photo-6508402.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7299994/pexels-photo-7299994.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/11534647/pexels-photo-11534647.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/1087905/pexels-photo-1087905.jpeg?auto=compress&cs=tinysrgb&w=600"
]

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