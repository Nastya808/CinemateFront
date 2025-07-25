import React, { useEffect, useState } from 'react';
import cinema from '../../assets/img/cinema.png';
import './pref.css';


const Preference: React.FC = () => {
    const [data] = useState({

        heading: "Take a quick quiz to tell us your preferences",
        heading2: "Choose genres that you prefer",
        btnFinish: "Finish quiz \u27A4",
        genres: {
            columns: [
                {
                    genre: [
                        "Anime", "Drama", "Mistery", "Western"]
                },
                {
                    genre: [
                        "Action", "Fantasy", "Romance", "History"]
                },
                {
                    genre: [
                        "Comedy", "Horror", "Thriller", "Cartoon"]
                }]
        },

    });

    useEffect(() => {
        //fetch("backApi").then(r => r.json()).then(j => setData(j.data))
    }, []);
    return (
        <section className="pref-section">
            <div className='pref-block'>
                < img src={cinema} alt="cinema" className="image"></img>
                <h1 className="heading">{data.heading}</h1>
            </div>
            <div className="genre-block">
                <h3 className="heading2">{data.heading2}</h3>
                <div className="genres">

                    {
                        data.genres.columns.map((column, index) => (

                            <div key={index} className='pref-col'>
                                <ul>
                                    {column.genre.map((genre, i) => (
                                        <li key={i}>
                                            <a href="#" className="genre-btn"> {genre}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
                <button className="sign-in">{data.btnFinish}</button>

            </div>
        </section>
    )
}
export default Preference;