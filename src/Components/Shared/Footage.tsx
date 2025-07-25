import React, { useEffect, useState } from 'react';
import './Footage.css';


const Footage: React.FC = () => {
    // const links: { link: string[] }[] =
    const [data] = useState({
        links: {
            heading: "Questions? Call 1-844-505-2993",
            columns: [
                {
                    link: [
                        "FAQ", "Investor Relations", "Buy Gift Cards", "Cookie preferences", "Legal Notices"]
                },
                {
                    link: [
                        "Help Center", "Jobs", "Ways to Watch", "Corporate Information", "Only on Netflix"]
                },
                {
                    link: [
                        "Account", "Netflix Shop", "Terms of Use", "Contact Us", "Do Not Sell or Share my Personal Information"]
                },
                {
                    link: [
                        "Media Center", "Redeem Gift Cards", "Privacy", "Speed Test", "Ad Choices"]
                },
            ]
        }
    });

  useEffect(() => {
        //fetch("backApi").then(r => r.json()).then(j => setData(j.data))
    }, []);
    return (
        <div className='footage'>
            <p>{ data.links.heading}</p>
            <div className="footage-columns">
                {
                    data.links.columns.map((column, index) => (

                        <div key={index} className='footage-col'>
                            <ul>
                                {column.link.map((link, i) => (
                                    <li key={i}><a href="#"> {link}</a> </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
};


export default Footage;