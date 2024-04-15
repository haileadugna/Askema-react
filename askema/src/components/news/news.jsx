import React, {useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './news.css';
import image4 from '../../Assets/news4.jpeg';
import image2 from '../../Assets/news2.jpeg';
import image1 from '../../Assets/news1.webp';


const newsData = [
    {
        id: 1,
        source: 'Shega Media',
        title: ' Inspiring ASKEMA\'s  entrepreneurial journey',
        image: image1,
        link: 'https://shega.co/post/childhood-mechanic-turns-entrepreneur-manufacturing-eco-friendly-brake-pads/',
        date: "",
    },
    {
        id: 2,
        source: 'Startup Ethiopia',
        title: 'ASKEMA , Ethiopian brake pad manufacturing startup, is attending Startup Ethiopia Exhibition .',
        image: image2,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7185199359750197249/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7185199359750197249%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29',
        date: "April 11-15,2024",

    },
    {
        id: 3,
        source: 'Ashewa Technologies',
        title: 'ASKEMA & Ashewa Technologies signed an agreement to work together.',
        image: image4,
        link: 'https://www.linkedin.com/feed/hashtag/?keywords=ethiopian&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7161231769927643136',
        date: "",
    },
    {
        id: 4,
        source: 'JICA',
        title: 'ASKEMA attended JICA - Road show -African startups networking and experience sharing event.',
        image: image4,
        link: 'https://www.linkedin.com/feed/hashtag/?keywords=ethiopian&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7161231769927643136',
        date: "Tokyo, Japan in Feb, 2024",
    }
];

function News() {
    const [newsItems, setNewsItems] = useState([]);

    return (
        <section id="news">
            <h2>Our new stories</h2>
            <div className="news_container">
                {newsData.map((news, index) => (
                    <div className="news-item" key={index}>
                        <img src={news.image} alt="News Image" />
                        <a href={news.link}>{news.source}</a>
                        <h3>{news.title}</h3>
                        <p>{news.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default News;
