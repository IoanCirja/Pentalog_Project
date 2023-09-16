import React, { useState, useEffect } from "react";
import axios from "axios";

function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <h2>Calendar Data</h2>
      {loading ? (
        <p>Loading calendar data...</p>
      ) : (
        <ul>
          {calendarData.map((event, index) => (
            <li key={index}>
              <div>
                <strong>Event Description:</strong> {event.eventDescription}
              </div>
              <div>
                <strong>From Date:</strong> {event.fromDate}
              </div>
              <div>
                <strong>To Date:</strong> {event.toDate}
              </div>
              <div>
                <strong>URL:</strong>{" "}
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.url}
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Calendar;
