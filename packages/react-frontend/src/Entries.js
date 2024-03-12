import React, { useState, useEffect } from "react";
import Form from "./Form";
import { Responsive, WidthProvider } from "react-grid-layout";
// import Lottie from "react-lottie-player";
import seaweed from "./seaweed.json";
// import { useNavigate } from "react-router-dom";
import "./Entries.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Entries = () => {
  const [entries, setEntries] = useState([]);
  // const navigate = useNavigate();
  console.log(seaweed, "json");

  useEffect(() => {
    fetch("https://scrapjambackend.azurewebsites.net/entries")
      .then((res) => res.json())
      .then((json) => setEntries(json["entries_list"]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const handleEdit = (event, entryId) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   navigate(`/entry/${entryId}`);
  // };

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

  // comment

  return (
    <div className="entries_container">
      {/* header */}
      <div className="header">
        <div className="ScrapJam_title"> ScrapJam </div>
        <div className="about"> about </div>
        <div className="tutorial"> tutorial </div>
        <div className="logout"> logout</div>
        <div className="header_rec"> </div>
      </div>

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
                <div>
                  <strong>{entry.name}</strong> <br />
                  Date: {entry.date}
                </div>
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </div>

      <div className="footer">
        {/* <div  id="containerF" class="cols">
            <div class="module"> 
              <Lottie
              loop
              animationData={seaweed}
              play
                style={{ width: 80, height: 80 }}
              /> 
            </div>
            <div class="module">
              <Lottie
              loop
              animationData={seaweed}
              play
                style={{ width: 80, height: 80 }}
              /> 
            </div>
            <div class="module">
              <Lottie
              loop
              animationData={seaweed}
              play
                style={{ width: 80, height: 80 }}
              /> 
            </div>
            <div class="module">
              <Lottie
              loop
              animationData={seaweed}
              play
                style={{ width: 80, height: 80 }}
              /> 
            </div>
            <div class="module">
              <Lottie
              loop
              animationData={seaweed}
              play
                style={{ width: 80, height: 80 }}
              /> 
            </div>
            <div class="module">
              <Lottie
              loop
              animationData={seaweed}
              play
                style={{ width: 80, height: 80 }}
              /> 
            </div>
            
        </div> */}
      </div>
    </div>
  );
};

export default Entries;
