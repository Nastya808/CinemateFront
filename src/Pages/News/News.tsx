import './News.css';

const popularNews = [
  {
    image: '/news/news1.jpg',
    title: 'The director of John Wick announced the 5th film',
    text: 'Lionsgate CEO Jon Feltheimer confirmed that a script for John Wick 5 is ready, and Keanu Reeves is set to return.',
  },
  {
    image: '/news/news2.jpg',
    title: 'The director of John Wick announced the 5th film',
    text: 'Chad Stahelski also hinted at a bigger universe involving more characters.',
  },
  {
    image: '/news/news3.jpg',
    title: 'The director of John Wick announced the 5th film',
    text: 'Production is expected to begin next year after current franchise spin-offs.',
  },
  {
    image: '/news/news4.jpg',
    title: 'The director of John Wick announced the 5th film',
    text: 'Fans are excited as the announcement came shortly after the 4th film’s success.',
  },
];

const interestingNews = [
  {
    image: '/news/int1.jpg',
    date: '24.03',
    title: 'The director of John Wick announced the 5th film',
    text: 'Lionsgate CEO Jon Feltheimer confirmed that a script for John Wick 5 is ready.',
  },
  {
    image: '/news/int2.jpg',
    date: '24.03',
    title: 'The director of John Wick announced the 5th film',
    text: 'Production is expected to begin next year.',
  },
  {
    image: '/news/int3.jpg',
    date: '24.03',
    title: 'The director of John Wick announced the 5th film',
    text: 'Fans are excited as the announcement came shortly after the 4th film’s success.',
  },
  {
    image: '/news/int4.jpg',
    date: '24.03',
    title: 'The director of John Wick announced the 5th film',
    text: 'Spin-offs are planned in the same universe.',
  },
  {
    image: '/news/int5.jpg',
    date: '24.03',
    title: 'The director of John Wick announced the 5th film',
    text: 'Keanu Reeves will return to his iconic role.',
  },
  {
    image: '/news/int6.jpg',
    date: '24.03',
    title: 'The director of John Wick announced the 5th film',
    text: 'The announcement created waves among fans worldwide.',
  },
  {
    image: '/news/int7.jpg',
    date: '24.03',
    title: 'The director of John Wick announced the 5th film',
    text: 'More story arcs are being developed.',
  },
  {
    image: '/news/int8.jpg',
    date: '24.03',
    title: 'The director of John Wick announced the 5th film',
    text: 'Chad Stahelski will return as director.',
  },
  {
    image: '/news/int9.jpg',
    date: '24.03',
    title: 'The director of John Wick announced the 5th film',
    text: 'This could be the start of a new trilogy.',
  },
];

const News = () => {
    return (
      <div className="news-page">
        <section className="news-hero">
          <h1 className="news-heading">News tailored to your interests</h1>
        </section>
  
        <main className="main-content">
          <section className="news-section">
            <h2 className="news-subtitle">The most popular</h2>
            <div className="news-grid">
              {popularNews.map((item, index) => (
                <div key={index} className="news-card">
                  <img src={item.image} alt="news" className="news-image" />
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-text">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
  
          <section className="news-section">
            <h2 className="news-subtitle">You might find this interesting</h2>
            <div className="news-grid">
              {interestingNews.map((item, index) => (
                <div key={index} className="news-card">
                  <img src={item.image} alt="news" className="news-image" />
                  <div className="news-date">{item.date}</div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-text">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  };
  
export default News;
