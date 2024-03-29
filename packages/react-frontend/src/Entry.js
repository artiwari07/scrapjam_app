import React, { useState, useEffect } from "react";
import "./Entry.css"; // Import the CSS file for styling
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./pages.css";
import { useAuth } from "./context/AuthProvider";
import "reactjs-popup/dist/index.css";

function Entry() {
  const [inputValue, setInputValue] = useState("");
  const [imageSrcs] = useState([]);
  const [textAreaColor, setTextAreaColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [colorType, setColorType] = useState("");
  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState([]);
  const { value } = useAuth();
  const token = value.token;

  const { id } = useParams();

  const handleBackToEntries = () => {
    navigate("/entries");
  };

  const handleAddImageUrl = () => {
    const url = prompt("Enter image URL:");
    if (url) {
      setImageUrls((prevUrls) => [...prevUrls, url]);
    }
  };

  const handleResize = (event, direction, ref, delta) => {};

  const openModal = (colorType) => {
    setColorType(colorType);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleColorSubmit = (event) => {
    event.preventDefault();
    const newColor = event.target.colorInput.value;

    if (colorType === "text") {
      setTextColor(newColor);
    } else if (colorType === "textarea") {
      setTextAreaColor(newColor);
    }

    closeModal();
  };

  const imageDisplaySectionStyle = {
    width: "1000px",
    height: "650px",
    overflowWrap: "break-word",
    textAlign: "left",
    border: "2px solid #ccc",
    fontSize: "16px",
    lineHeight: "2",
    padding: "10px",
    backgroundColor: textAreaColor,
    color: textColor,
  };

  const handleSave = async () => {
    const updatedEntryData = {
      content: inputValue,
      imageUrls: imageUrls,
      textColor: textColor, // Include textColor in the data to be saved
      textAreaColor: textAreaColor, // Include textAreaColor in the data to be saved
    };

    try {
      const response = await fetch(
        `https://scrapjambackend.azurewebsites.net/entries/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedEntryData),
        },
      );
      const data = await response.json();
      if (data.success) {
        console.log("Entry updated successfully");
        navigate("/entries");
      } else {
        console.error("Failed to update entry:", data.error);
      }
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  useEffect(() => {
    fetch(`https://scrapjambackend.azurewebsites.net/entries/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setInputValue(data.content || "");
        setImageUrls(data.imageUrls || []);
        setTextColor(data.textColor || "#000000"); // Set text color from fetched data or default to black
        setTextAreaColor(data.textAreaColor || "#ffffff"); // Set textbox color from fetched data or default to white
      })
      .catch((error) => console.error("Failed to fetch entry:", error));
  }, [id, token]);

  return (
    <div className="containerB">
      <div className="entry-container">
        <div className="centered-header" contentEditable="true">
          Entry
        </div>
        <div>
          <button className="back-to-entries" onClick={handleBackToEntries}>
            Back to Entries
          </button>
        </div>
        <div className="blue-background2"></div>
        <div
          className="centered-container2"
          onDrop={(event) => event.preventDefault()}
          onDragOver={(event) => event.preventDefault()}
        >
          <div className="resizable-textarea">
            <button onClick={handleSave} className="save-entry">
              <div className="bubble-reflectionB"></div>
              <text>Save Entry</text>
            </button>
            <button
              className="textbox-color"
              onClick={() => openModal("textarea")}
            >
              <div className="bubble-reflectionB"></div>
              Textbox Color
            </button>

            <button className="text-color" onClick={() => openModal("text")}>
              <div className="bubble-reflectionB"></div>
              Text Color
            </button>
            <button onClick={handleAddImageUrl} className="image-upload">
              <div className="bubble-reflectionB"></div>
              <text>Image URL</text>
            </button>

            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your journal text here"
              style={imageDisplaySectionStyle}
            />

            <div style={imageDisplaySectionStyle}>
              {imageUrls.map((url, index) => (
                <img key={index} src={url} alt={""} />
              ))}
            </div>

            {imageSrcs.map((imageSrc, index) => (
              <Draggable key={index}>
                <Resizable
                  defaultSize={{ width: 200, height: 150 }}
                  style={{
                    position: "absolute",
                    bottom: `${10 + 160 * index}px`,
                    right: "10px",
                  }}
                  onResize={handleResize}
                >
                  <img
                    src={imageSrc}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Resizable>
              </Draggable>
            ))}
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Color Picker Modal"
        >
          <form onSubmit={handleColorSubmit}>
            <label>Pick a new color:</label>
            <input
              type="color"
              name="colorInput"
              defaultValue={colorType === "text" ? textColor : textAreaColor}
            />
            <button style={{ color: "black" }} type="submit">
              Submit
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Entry;
