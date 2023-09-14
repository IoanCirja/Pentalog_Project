import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_FINHUB_API_KEY;

    const fetchMarketNews = axios.get(
      `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`
    );

    const fetchCompanyNews = axios.get(
      `https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2023-08-15&to=2023-08-20&token=${apiKey}`
    );

    Promise.all([fetchMarketNews, fetchCompanyNews])
      .then(([marketResponse, companyResponse]) => {
        const marketNews = marketResponse.data.slice(0, 5);
        const companyNews = companyResponse.data.slice(0, 5);
        const mergedNews = [...marketNews, ...companyNews];
        setNews(mergedNews);
        setLoadingNews(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoadingNews(false);
      });
  }, []);

  return (
    <div>
      <div className="header">
        <div className="left">
          <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
          <h1>Stock Tracker</h1>
        </div>

        <div className="right">
          <Link to="/">
            <button>Return to Home</button>
          </Link>
        </div>
      </div>

      <div className="News">
        <h2>WHAT'S TRENDING</h2>
        {loadingNews ? (
          <p>Loading news...</p>
        ) : (
          <ul>
            {news.map((newsItem) => (
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
