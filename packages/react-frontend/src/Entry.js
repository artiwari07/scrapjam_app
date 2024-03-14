import React, { useState, useEffect } from "react";
import "./Entry.css"; // Import the CSS file for styling
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./pages.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Entry() {
  const [inputValue, setInputValue] = useState("");
  const [imageSrcs, setImageSrcs] = useState([]);
  const [textAreaColor, setTextAreaColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [colorType, setColorType] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrcs((prevImageSrcs) => [...prevImageSrcs, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleBackToEntries = () => {
    navigate("/entries");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleResize = (event, direction, ref, delta) => {
    // Handle image resizing logic
  };

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
      setTextColor(`rgb(${newColor})`);
    } else if (colorType === "textarea") {
      setTextAreaColor(`rgb(${newColor})`);
    }

    closeModal();
  };

  useEffect(() => {
    // Fetch the specific entry data using the id
    fetch(`https://scrapjambackend.azurewebsites.net/entries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.entries_list) {
          const entry = data.entries_list;
          // Assuming 'name' and 'date' fields for this example
          setInputValue(entry.name || "");
          // Add more fields as per your entry model
          // For example: setImageSrcs(entry.images || []);
        }
      })
      .catch((error) => console.error("Failed to fetch entry:", error));
  }, [id]); // Effect dependencies, re-run if ID changes

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

            <Popup
              trigger={
                <button class="image-upload">
                  <div className="bubble-reflectionB"></div>
                  <text>Image Upload</text>
                </button>
              }
            >
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                style={{ color: "rgb(50, 50, 50)" }}
                onChange={handleImageUpload}
              />
            </Popup>

            <textarea
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter your text here"
              style={{
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
              }}
            />
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
            <label>
              Enter the new color in RGB format (e.g., '255, 0, 0'):
            </label>
            <input type="text" name="colorInput" />
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
