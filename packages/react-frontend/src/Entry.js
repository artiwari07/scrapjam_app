import React, { useState } from 'react';
import { Resizable } from 're-resizable';
import Draggable from 'react-draggable';
import Modal from 'react-modal';
import { PhotoshopPicker } from 'react-color'; // Import the color picker component
import './Entry.css';

function Entry() {
  const [inputValue, setInputValue] = useState('');
  const [imageSrcs, setImageSrcs] = useState([]);
  const [textAreaColor, setTextAreaColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [colorType, setColorType] = useState('');
  const [currentColor, setCurrentColor] = useState('#ffffff'); // Track the currently selected color

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

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleResize = (event, direction, ref, delta) => {
    // Handle image resizing logic
  };

  const openModal = (colorType) => {
    setColorType(colorType);
    setCurrentColor(colorType === 'textarea' ? textAreaColor : textColor); // Set initial color in the color picker
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
  };

  const handleColorSubmit = () => {
    if (colorType === 'text') {
      setTextColor(currentColor);
    } else if (colorType === 'textarea') {
      setTextAreaColor(currentColor);
    }

    closeModal();
  };

  return (
    <div>
      <div className="centered-header" contentEditable="true">
        Entry
      </div>

      <div
        className="centered-container2"
        onDrop={(event) => event.preventDefault()}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className="resizable-textarea">
          <button
            onClick={() => openModal('textarea')}
            style={{ backgroundColor: '#B0B8F9', color: 'black', marginRight: '10px' }}
          >
            Textbox Color
          </button>
          <button
            onClick={() => openModal('text')}
            style={{ backgroundColor: '#B0B8F9', color: 'black', marginRight: '10px' }}
          >
            Text Color
          </button>
          <button>
            {/* <label htmlFor="imageUpload" style={{ color: 'black' }}>
              Image Upload
            </label> */}
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              style={{ color: 'rgb(50, 50, 50)' }}
              onChange={handleImageUpload}
            />
          </button>
          <div className='.centered-container3'>
            <div className='child'>
            <div className = 'resizable-text'>
          <textarea
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your text here"
          />
          </div>
          </div>

          </div>
          {imageSrcs.map((imageSrc, index) => (
            <Draggable key={index}>
              <Resizable
                defaultSize={{ width: 200, height: 150 }}
                style={{
                  position: 'absolute',
                  bottom: `${10 + 160 * index}px`,
                  right: '10px',
                }}
                onResize={handleResize}
              >
                <img
                  src={imageSrc}
                  alt={`Dropped Image ${index + 1}`}
                  style={{ width: '100%', height: '100%' }}
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
        <div>
          <PhotoshopPicker color={currentColor} onChange={handleColorChange} />
          <button style={{ color: 'black' }} onClick={handleColorSubmit}>
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Entry;
