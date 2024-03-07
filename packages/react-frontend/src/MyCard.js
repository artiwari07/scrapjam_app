// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { PhotoshopPicker } from 'react-color';
// import Modal from 'react-modal';
// import { jsx, css } from '@emotion/react';

// import { Resizable } from 're-resizable';
// import Draggable from 'react-draggable';
// const MyCard = () => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [text, setText] = useState('');
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [currentColor, setCurrentColor] = useState('#ffffff');

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setImageUrl(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleColorChange = (color) => {
//     setCurrentColor(color.hex);
//   };

//   const handleColorSubmit = () => {
//     // Handle color submit logic if needed
//     closeModal();
//   };

//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         height="140"
//         image={imageUrl}
//         alt="Image Alt Text"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           {text}
//         </Typography>
//       </CardContent>
//       <button onClick={openModal}>Upload Image</button>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter your text here"
//         style={{
//           width: '100%',
//           marginTop: '10px',
//           border: '2px solid #ccc',
//           fontSize: '16px',
//           lineHeight: '2',
//           padding: '10px',
//           backgroundColor: 'transparent',
//         }}
//       />

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Color Picker Modal"
//       >
//         <div>
//           <input type="file" onChange={handleImageUpload} />
//           <PhotoshopPicker color={currentColor} onChange={handleColorChange} />
//           <button onClick={handleColorSubmit}>Submit</button>
//         </div>
//       </Modal>
//     </Card>
//   );
// };

// export default MyCard;
