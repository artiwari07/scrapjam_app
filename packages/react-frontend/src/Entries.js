import React, { useState, useEffect } from 'react';
import Form from "./Form";
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useNavigate } from 'react-router-dom';
const ResponsiveGridLayout = WidthProvider(Responsive);

export const Entries = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/entries")
      .then((res) => res.json())
      .then((json) => setEntries(json["entries_list"]))
      .catch((error) => { console.log(error); });
  }, []);

  const postEntry = (entry) => {
    fetch("http://localhost:8000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    })
    .then((response) => response.json())
    .then((newEntry) => {
      setEntries(prevEntries => [...prevEntries, newEntry]);
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
      h: 2,
    }));
  };
  const handleEdit = (event, entryId) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/entry/${entryId}`);
  };
  
  // comment

  return (
    <div className="container1">
      <h4 className="left">ScrapJam</h4>
      <center><h1>Entries</h1></center>
      <Form handleSubmit={postEntry} />
      
      <div style={{ height: '500px', overflow: 'auto' }}>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: generateLayout() }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          isDraggable={false}
        >
          {entries.map((entry) => (
            <div key={entry._id} className="grid-item">
              <div>
                <strong>Name:</strong> {entry.name}<br/>
                <strong>Date:</strong> {entry.date}
                <button onClick={(event) => handleEdit(event, entry._id)}>Edit</button>
              </div>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Entries;