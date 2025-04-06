import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="save-the-date-container">
        <h1 className="couple-names">Shiva Kumar & Rakshitha </h1>
        <h1 className="couple-names">Welcome You </h1>

        {/* <h4 className="save-the-date">Save the Date</h4> */}
        <div className="event-dates">
          <p className="event">Reception: May 18, 7 PM</p>
          <p className="event">Marriage: May 19, 10:30 AM</p>
        </div>
        <div className="map-link">
          <a
            href="https://maps.app.goo.gl/Robpfux4FRWYGUE67?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            View Convention Hall on Map
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
