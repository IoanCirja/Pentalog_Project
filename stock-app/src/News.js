import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function News() {
  const [marketNews, setMarketNews] = useState([]);
  const [companyNews, setCompanyNews] = useState([]);
  const [loadingMarketNews, setLoadingMarketNews] = useState(true);
  const [loadingCompanyNews, setLoadingCompanyNews] = useState(true);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_FINHUB_API_KEY;

    const fetchMarketNews = async () => {
      try {
        const response = await axios.get(
          `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`
        );

        if (response.data && response.data.length > 0) {
          setMarketNews(response.data.slice(0, 10));
          setLoadingMarketNews(false);
        }
      } catch (error) {
        console.error("Error fetching market news:", error);
        setLoadingMarketNews(false);
      }
    };

    const fetchCompanyNews = async () => {
      try {
        const response = await axios.get(
          `https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2023-08-15&to=2023-08-20&token=${apiKey}`
        );

        if (response.data && response.data.length > 0) {
          setCompanyNews(response.data.slice(0, 10));
          setLoadingCompanyNews(false);
        }
      } catch (error) {
        console.error("Error fetching company news:", error);
        setLoadingCompanyNews(false);
      }
    };

    fetchMarketNews();
    fetchCompanyNews();
  }, []);

  return (
    <div className="News">
      <h1>News Page</h1>
      <Link to="/">
        <button>Retun to Home</button>
      </Link>

      <div>
        <h2>Market News</h2>
        {loadingMarketNews ? (
          <p>Loading market news...</p>
        ) : (
          <ul>
            {marketNews.map((newsItem) => (
              <li key={newsItem.id}>
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {newsItem.headline}
                </a>
                <p>{newsItem.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2>Company News</h2>
        {loadingCompanyNews ? (
          <p>Loading company news...</p>
        ) : (
          <ul>
            {companyNews.map((newsItem) => (
              <li key={newsItem.id}>
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {newsItem.headline}
                </a>
                <p>{newsItem.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default News;
