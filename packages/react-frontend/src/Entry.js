import React, { useState } from "react";
import "./Entry.css"; // Import the CSS file for styling
import { Resizable } from "re-resizable";
import Draggable from 'react-draggable';

import Modal from "react-modal";

function Entry() {
    const [inputValue, setInputValue] = useState("");
    // const [title, setTitle] = useState("Entry Title"); // Default title
    const [imageSrcs, setImageSrcs] = useState([]); // Array to store image sources
    const [textAreaColor, setTextAreaColor] = useState("#ffffff");
    const [textColor, setTextColor] = useState("#000000"); // Default text color
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [colorType, setColorType] = useState(""); // To track whether to change text or textarea color

  const handleImageDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrcs((prevImageSrcs) => [...prevImageSrcs, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };  

  const handleResize = (event, direction, ref, delta) => {
    // Handle image resizing logic
    // You can use this function to update the image size as per your requirements
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
    // Handle button click logic
    const newColor = event.target.colorInput.value;

    if (colorType === "text") {
      setTextColor(`rgb(${newColor})`);
    } else if (colorType === "textarea") {
      setTextAreaColor(`rgb(${newColor})`);
    }

    closeModal();
  };

  return (
    <div>
      <div className="centered-header" contentEditable="true">
        <h3>Entry{handleChange}</h3>
      </div>

      <div
        className="centered-container2"
        onDrop={handleImageDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className="resizable-textarea">
          <button
            onClick={() => openModal("textarea")}
            style={{ backgroundColor: "#B0B8F9", color: "black", marginRight: "10px" }}
          >
            Textbox Color
          </button>
          <button
            onClick={() => openModal("text")}
            style={{ backgroundColor: "#B0B8F9", color: "black" }}
          >
            Text Color
          </button>
          {/* <Draggable> */}
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
                backgroundColor: textAreaColor, // Set textarea background color dynamically
                color: textColor, // Set text color dynamically
                }}
                
          />
             {/* </Draggable> */}
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
                  alt={`Dropped Image ${index + 1}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </Resizable>
            </Draggable>
          ))}
        </div>
      </div>

      {/* <div
        className="centered-container2"
        onDrop={handleImageDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className="resizable-textarea">
          <button
            onClick={() => openModal("textarea")}
            style={{ backgroundColor: "#B0B8F9", color: "black", marginRight: "10px" }}
          >
            Change Textarea Color
          </button>
          <button
            onClick={() => openModal("text")}
            style={{ backgroundColor: "#B0B8F9", color: "black" }}
          >
            Change Text Color
          </button>
          <textarea
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your text here"
            style={{
              width: "1000px",
              height: "650px",
              overflowWrap: "break-word",
              textAlign: "left",
              resize: "none",
              border: "2px solid #ccc",
              fontSize: "16px",
              lineHeight: "2",
              padding: "10px",
              backgroundColor: textAreaColor, // Set textarea background color dynamically
              color: textColor, // Set text color dynamically
            }}
          />
          {imageSrcs.map((imageSrc, index) => (
            <Resizable
              key={index}
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
                alt={`Dropped Image ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </Resizable>
          ))}
        </div>
      </div> */}

      {/* Color Picker Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Color Picker Modal"
      >
        <form onSubmit={handleColorSubmit}>
          <label>Enter the new color in RGB format (e.g., '255, 0, 0'):</label>
          <input type="text" name="colorInput" />
          <button style={{ color: "black" }} type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Entry;
// import React, { useState } from "react";
// import "./Entry.css"; // Import the CSS file for styling
// import { Resizable } from "re-resizable";
// import Modal from "react-modal";

// function Entry() {
//   const [inputValue, setInputValue] = useState("");
//   const [imageSrc, setImageSrc] = useState(null);
//   const [textAreaColor, setTextAreaColor] = useState("#ffffff");
//   const [textColor, setTextColor] = useState("#000000"); // Default text color
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [colorType, setColorType] = useState(""); // To track whether to change text or textarea color

//   const handleImageDrop = (event) => {
//     event.preventDefault();

//     const file = event.dataTransfer.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setImageSrc(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleResize = (event, direction, ref, delta) => {
//     // Handle image resizing logic
//     // You can use this function to update the image size as per your requirements
//   };

//   const openModal = (colorType) => {
//     setColorType(colorType);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleColorSubmit = (event) => {
//     event.preventDefault();
//     // Handle button click logic
//     const newColor = event.target.colorInput.value;

//     if (colorType === "text") {
//       setTextColor(`rgb(${newColor})`);
//     } else if (colorType === "textarea") {
//       setTextAreaColor(`rgb(${newColor})`);
//     }

//     closeModal();
//   };

//   return (
//     <div>
//       <div className="centered-container1">
//         <h1>Adventures in Morro Bay</h1>
//       </div>

//       <div className="centered-container2" onDrop={handleImageDrop} onDragOver={(event) => event.preventDefault()}>
//         <div className="resizable-textarea">
//           <button
//             onClick={() => openModal("textarea")}
//             style={{ backgroundColor: '#B0B8F9' , color: 'black', marginRight: '10px' }}
//           >
//             Change Textarea Color
//           </button>
//           <button
//             onClick={() => openModal("text")}
//             style={{ backgroundColor: '#B0B8F9', color: 'black'}}
//           >
//             Change Text Color
//           </button>
//           <textarea
//             value={inputValue}
//             onChange={handleChange}
//             placeholder="Enter your text here"
//             style={{
//               width: "1000px",
//               height: "650px",
//               overflowWrap: "break-word",
//               textAlign: "left",
//               resize: "none",
//               border: "2px solid #ccc",
//               fontSize: "16px",
//               lineHeight: "2",
//               padding: "10px",
//               backgroundColor: textAreaColor, // Set textarea background color dynamically
//               color: textColor, // Set text color dynamically
//             }}
//           />
//           {imageSrc && (
//             <Resizable
//               defaultSize={{ width: 200, height: 150 }}
//               style={{
//                 position: "absolute",
//                 bottom: "10px",
//                 right: "10px",
//               }}
//               onResize={handleResize}
//             >
//               <img
//                 src={imageSrc}
//                 alt="Dropped Image"
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Resizable>
//           )}
//         </div>
//       </div>

//       {/* Color Picker Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Color Picker Modal"
//       >
//         <form onSubmit={handleColorSubmit}>
//           <label>
//             Enter the new color in RGB format (e.g., '255, 0, 0'):
//           </label>
//           <input type="text" name="colorInput" />
//           <button style= {{color: 'black'}} type="submit">Submit</button>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// export default Entry;
