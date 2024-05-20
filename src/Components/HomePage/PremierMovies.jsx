import React from "react";
import { useSelector } from "react-redux";
import { MovieCarousel } from "./MovieCarousel";
import styles from "../Styling/RecommendedMovies.module.css";

export const PremierMovies = () => {
    const movies_data = useSelector(state => state.app.movies_data);

    const filteredPremierMovies = movies_data.filter(movie => (
        movie.is_premier
    ));

    const premierMovieContainerStyle = `${styles.parent} ${styles.premier__container}`;
    // const formContainerStyle = {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100vh',
    // };

    const formStyle = {
        maxWidth: '800px', // Increased horizontal size
        margin: '0 auto',
        padding: '10px', // Decreased vertical padding
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
    };

    const labelStyle = {
        marginBottom: '8px', // Slightly decreased margin
        display: 'block',
        fontWeight: 'bold',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px', // Decreased padding
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginTop: '4px', // Decreased margin
        marginBottom: '12px', // Decreased margin
        resize: 'vertical',
    };

    const submitStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 15px', // Adjusted padding
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const submitHoverStyle = {
        backgroundColor: '#45a049',
    };

    return (
        <div className={premierMovieContainerStyle} >
            <form action="action_page.php" style={formStyle}>
                <h2 style={{textAlign: "center"}}>Contact Us</h2>

                <label htmlFor="fname" style={labelStyle}>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." style={inputStyle} />

                <label htmlFor="lname" style={labelStyle}>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." style={inputStyle} />

                <label htmlFor="lname" style={labelStyle}>Email</label>
                <input type="text" id="lname" name="lastname" placeholder="Your Email" style={inputStyle} />


                <label htmlFor="subject" style={labelStyle}>Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{ ...inputStyle, height: '100px' }}></textarea>

                <input type="submit" value="Submit" style={submitStyle} onMouseOver={(e) => e.target.style.backgroundColor = submitHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = submitStyle.backgroundColor} />
            </form>
        </div>
    );
};
