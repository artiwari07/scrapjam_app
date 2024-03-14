import React, { useState, useEffect } from "react";
import Form from "./Form";
import { Responsive, WidthProvider } from "react-grid-layout";
import "./Entries.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Entries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("https://scrapjambackend.azurewebsites.net/entries")
      .then((res) => res.json())
      .then((json) => setEntries(json["entries_list"]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const postEntry = (entry) => {
    fetch("https://scrapjambackend.azurewebsites.net/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    })
      .then((response) => response.json())
      .then((newEntry) => {
        setEntries((prevEntries) => [...prevEntries, newEntry]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const generateLayout = () => {
    return entries.map((entry, index) => ({
      i: entry._id.toString(), // Ensuring we use the MongoDB `_id` field
      x: (index * 2) % 12,
      y: Math.floor(index / 6),
      w: 2,
      h: 1.3,
    }));
  };

  return (
    <div className="containerA">
      {/* header */}
      {/* <div className="header">
        <div className="ScrapJam_title"> </div>
        <div className="about"> about </div>
        <div className="tutorial"> tutorial </div>

        <div className="header_rec"> </div>
      </div> */}

      <div className="EntryTitle"> Journal Entries</div>

      {/* <h4 className="left">ScrapJam</h4> */}
      {/* <center><h1>Entries</h1></center> */}
      <div className="blue_background">
        <Form handleSubmit={postEntry} />

        <div style={{ height: "500px", overflow: "auto" }}>
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: generateLayout() }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >
            {entries.map((entry) => (
              <div key={entry._id} className="grid-item-Entries">
                <div className="bubble_reflection"></div>
                <div className="entry-name">
                  {entry.name} <br />
                </div>
                _________________
                <div>{entry.date}</div>
                <button type="button" class="garbageButton"></button>
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Entries;
