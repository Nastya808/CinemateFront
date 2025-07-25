import React, { useEffect, useState } from 'react';
import './topbar.css';
import { FaSearch, FaBell } from 'react-icons/fa';
import ava1 from '../../assets/img/ava1.avif';


const Topbar: React.FC = () => {
    //     // const links: { link: string[] }[] =

    const [data] = useState({
        title: "Cinemate",
        langs: ["English", "Ukrainian", "Spain"],
        userimg: ava1,
        icons: {
            search: true,
            bell:true
        }

    });
    const [selectedLang, setSelectedLang] = useState("English"); 
        // U + 27A4
        useEffect(() => {
            //fetch("backApi").then(r => r.json()).then(j => setData(j.data))
        }, []);
    return (   
        <section>
            <header className='topbar'>
                <div className='topbarleft'>
                    <div className="title">{data.title}</div>
                </div>
                <div className='topbarright'>
                    {data.icons.search && <FaSearch className="icon" />}
                    <select className='lang-select'
                        value={selectedLang}
                        onChange={(e) => setSelectedLang(e.target.value)}
                        >
                        {data.langs.map(lang => (<option key={lang} value={lang}>{lang}</option>))}
                    </select>
                    {data.icons.bell && <FaBell className="icon" />}
                    <img className="user" src={data.userimg } alt="user"/>
                </div>
            </header>
                </section >

    )
}



 export default Topbar;