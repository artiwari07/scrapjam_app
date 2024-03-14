import React, { useState, useEffect } from "react";
import { useAuth } from "./context/AuthProvider";
import Form from "./Form";
import { Responsive, WidthProvider } from "react-grid-layout";
import "./Entries.css";
import { useNavigate } from "react-router-dom";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Entries = () => {
  const [entries, setEntries] = useState([]);
  const { value } = useAuth();
  const navigate = useNavigate();
  const token = value.token;
  useEffect(() => {
    fetch("http://localhost:8000/entries", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEntries(data.entries || []);
      })
      .catch((error) => {
        console.error("Failed to fetch entries:", error);
      });
  }, [token]);

  const postEntry = (entry) => {
    fetch("http://localhost:8000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(entry),
    })
      .then((response) => response.json())
      .then((newEntry) => {
        setEntries((prevEntries) => [...prevEntries, newEntry]);
      })
      .catch((error) => {
        console.error("Failed to post entry:", error);
      });
  };
  const handleEdit = (id) => {
    navigate(`/entry/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      fetch(`http://localhost:8000/entries/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.ok) {
          setEntries((prevEntries) => prevEntries.filter(entry => entry._id !== id));
        }
      })
      .catch((error) => {
        console.error("Failed to delete entry:", error);
      });
    }
  };
  
  const generateLayout = () => {
    return entries.map((entry, index) => {
      // Ensure that entry._id exists before calling toString
      const entryId = entry._id ? entry._id.toString() : `entry-${index}`;
      return {
        i: entryId,
        x: (index * 2) % 12,
        y: Math.floor(index / 6),
        w: 2,
        h: 1.3,
      };
    });
  };

  return (
    <div className="containerA">
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
            isDraggable={false}
          >
            {entries.map((entry) => (
              <div key={entry._id} className="grid-item-Entries">
                <div className="bubble_reflection"></div>
                <div className="entry-name">
                  {entry.name} <br />
                </div>
                _________________
                <div>{entry.date}</div>
                <button
                  className="editButton"
                  onClick={() => handleEdit(entry._id)}
                >
                  Edit
                </button>
                <button type="button" className="garbageButton" onClick={() => handleDelete(entry._id)}></button>
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
