// src/MyApp.js
import React, { useState } from "react";
import Table from "./Table";


  function MyApp() {
    const [characters, setCharacters] = useState([
        {
          name: "Alex",
          animal: "Lion", 
          hobby: "Performing"
          
        },
        {
          name: "Joe",
          animal: "Monkey",
          hobby : "Hugging"
        },
        {
          name: "Delaney",
          animal: "Oxolotol",
          hobby: "Dancing"
        },
        {
          name: "Dennis",
          animal: "Duck",
          hobby: "Hop Scotch"
        }
      
    ]);


    function removeOneCharacter(index) {
      const updated = characters.filter((character, i) => {
        return i !== index;
      });
      setCharacters(updated);
    }

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={removeOneCharacter}
        />
      </div>
    );
  }
  export default MyApp;
  
    

    


