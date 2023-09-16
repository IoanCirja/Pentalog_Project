import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import "./Calendar.css";

function CalendarComponent() {
  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tooltipContent, setTooltipContent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  
  useEffect(() => {
    const apiKey = process.env.REACT_APP_FINHUB_API_KEY;
    const calendarApiUrl = `https://finnhub.io/api/v1/fda-advisory-committee-calendar?token=${apiKey}`;

    axios
      .get(calendarApiUrl)
      .then((response) => {
        const calendarEventData = response.data;
        setCalendarData(calendarEventData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching calendar data:", error);
        setLoading(false);
      });
  }, []);

  const eventDates = calendarData.map(event => new Date(event.fromDate));

  const handleDayClick = (date) => {
    const eventForDate = calendarData.find(event => {
      const eventDate = new Date(event.fromDate);
      return eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear();
    });

    setSelectedDate(date);
    setTooltipContent(eventForDate);
  };

  return (
    <div>
      <div className="header">
        <div className="left">
          <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
          <h1>Stock Tracker</h1>
        </div>
        <button className="scroll-to-top-button fade-out" id="scroll">↑</button>
        <div className="right">
          <Link to="/">
            <button>Return to Home</button>
          </Link>
        </div>
      </div>
      {loading ? (
        <p>Loading calendar data...</p>
      ) : (
        <div>
          <Calendar
            value={eventDates}
            tileContent={({ date }) => {
              const eventForDate = calendarData.find(event => {
                const eventDate = new Date(event.fromDate);
                return eventDate.getDate() === date.getDate() &&
                  eventDate.getMonth() === date.getMonth() &&
                  eventDate.getFullYear() === date.getFullYear();
              });

              return eventForDate ? (
                <div
                  className={`event-tile ${selectedDate && date.getDate() === selectedDate.getDate() ? 'selected' : ''}`}
                  onClick={() => handleDayClick(date)} 
                >
                  FDA Event
                </div>
              ) : null;
            }}
            tileClassName={({ date }) => {
              const eventForDate = calendarData.find(event => {
                const eventDate = new Date(event.fromDate);
                return eventDate.getDate() === date.getDate() &&
                  eventDate.getMonth() === date.getMonth() &&
                  eventDate.getFullYear() === date.getFullYear();
              });

              return eventForDate ? 'has-event' : null;
            }}
            onClickDay={(date) => handleDayClick(date)}
          />
        </div>
      )}
      {tooltipContent && (
        <div className="tooltip">
          <div><strong>Event Description:</strong> {tooltipContent.eventDescription}</div>
          <div id="url"><strong>URL:</strong> <a href={tooltipContent.url} target="_blank" rel="noopener noreferrer">{tooltipContent.url}</a></div>
        </div>

      )}
    </div>
  );
}

export default CalendarComponent;

