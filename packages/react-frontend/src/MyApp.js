// src/MyApp.js
import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
    const [characters, setCharacters] = useState([]);

    function updateList(person) {
      postUser(person)
        .then((response) => {
          if (response.status === 201) {
            console.log("User added successfully! Status code:", response.status);
            // Only attempt to parse JSON if the status is 201
            return response.json();
          } else {
            console.log("Failed to add user. Status code:", response.status);
            // Don't attempt to parse JSON if the status is not 201
            throw new Error("Failed to add user");
          }
        })
        .then((addedUser) => {
          console.log("Generated ID:", addedUser.id);
          // Only update characters if JSON parsing is successful
          console.log("Added User:", addedUser);
          setCharacters([...characters, addedUser]);
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    }

    function fetchUsers() {
      const promise = fetch("http://localhost:8000/user");
      return promise;
    }

    function postUser(person) {
      const promise = fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });
  
      return promise;
    }

    function deleteUsers(id)
    {
      const promise = fetch(`http://localhost:8000/user/${id}`, {
         method: "DELETE"
    });
    return promise;
  }

    function removeOneCharacter(id, index) {
      // fetch(`http://localhost:8000/users/${id}`, {
      //   method: "DELETE",
      // })
      deleteUsers(id)
        .then((response) => {
          if (response.status === 204) {
            console.log("User deleted successfully! Status code:", response.status);
          } 
          else if (response.status === 404) {
            console.log("User not found. Status code:", response.status);
            throw new Error("User not found");
          } 
          else {
            console.log("Failed to delete user. Status code:", response.status);
            throw new Error("Failed to delete user");
          }
        })
        .then(() => {
          // Wait for the DELETE request to be successful on the backend before updating the frontend
          const updatedCharacters = characters.filter((_, i) => i !== index);
          setCharacters(updatedCharacters);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }   
    
    useEffect(() => {
      fetchUsers()
        .then((res) => res.text())
        .then((text) => {
          console.log(text); // Log the raw response
          const json = JSON.parse(text);
          setCharacters(json["user_list"]);
        })
        .catch((error) => console.log(error));
    }, []);
    
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={removeOneCharacter}
        />
        <Form handleSubmit={updateList} />
      </div>
    );

    
}

export default MyApp;