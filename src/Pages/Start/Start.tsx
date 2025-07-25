import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import net2 from '../../assets/img/net2.png';
import pic2start from '../../assets/img/pic2start.png';
import pic3tv from '../../assets/img/pic3tv.png';
import pic5download from '../../assets/img/pic5download.png';
import cosmo1 from '../../assets/img/cosmo1.png';
import Footage from '../../Components/Shared/Footage';
import { useLang } from '../../Hooks/useLang';
import './Start.css';

const Start: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, switchLang } = useLang();

  const langsMap: Record<string, 'en' | 'ru'> = {
    English: 'en',
    Русский: 'ru'
  };

  return (
    <div className="start-page">
      <section className="start-section">
        <div className='start-block'>
          <header className="start-header">
            <h1 className="title">Cinemate</h1>
            <div className="btns">
              <select
                className='lang-select'
                value={t.langs.find(lang => langsMap[lang] === language)}
                onChange={(e) => switchLang(langsMap[e.target.value])}
              >
                {t.langs.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <button className='sign-in' onClick={() => navigate("/login")}>
                {t.start.signIn}
              </button>
            </div>
          </header>
        </div>

        <div className="start-content"
          style={{
            background: `linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.9) 55%),url(${net2}) center/cover no-repeat`,
            width: '100%',
            maxWidth: '1440px',
            minHeight: '620px',
            margin: '0 auto',
            position: 'relative'
          }}>
          <h2 className="main-text">{t.start.heading}</h2>
          <p className="text2">{t.start.text1}</p>
          <p className="text3">{t.start.text2}</p>
          <button className="get-started" onClick={() => navigate("/auth")}>
  {t.start.getStarted}
</button>
        </div>

        <hr className="divider" />

        <section className="block">
          <div className='text'>
            <h2 className="main-text">{t.start.enjoyHeading}</h2>
            <p className="text2">{t.start.enjoyText}</p>
          </div>
          <img src={pic2start} alt="TV" className="image" />
        </section>

        <hr className="divider" />

        <section className="block">
          <img src={pic3tv} alt="TV" className="image" />
          <div className='text'>
            <h2 className="main-text">{t.start.watchHeading}</h2>
            <p className="text2">{t.start.watchText}</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="block">
          <div>
            <h2 className="main-text">{t.start.kidsHeading}</h2>
            <p className="text2">{t.start.kidsText}</p>
          </div>
          <img src={cosmo1} alt="TV" className="imageCosmo" />
        </section>

        <hr className="divider" />

        <section className="block">
          <img src={pic5download} alt="TV" className="image" />
          <div className='text'>
            <h2 className="main-text">{t.start.downloadHeading}</h2>
            <p className="text2">{t.start.downloadText}</p>
          </div>
        </section>

        <hr className="divider" />

        <div className='bottom'>
          <h2 className="main-text">{t.start.preferencesHeading}</h2>
          <button className="get-started" onClick={() => navigate("/auth")}>
  {t.start.preferencesBtn}
</button>
        </div>

        <hr className="divider" />

        <Footage />
        <Outlet />
      </section>
    </div>
  );
};

export default Start;
