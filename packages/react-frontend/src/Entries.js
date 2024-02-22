import React, {useState, useEffect} from 'react';
import Table from "./Table";
import Form from "./Form";




function MyApp() {


  const [entries, setEntries] = 
      useState([]);


  function deleteEntry(id){
    const promise = fetch(`Http://localhost:8000/entries/${id}`, {
      method: "DELETE",
    });

    return promise;
  }

  function removeOneEntry(id, index) {
    deleteEntry(id)
        .then((result) => {
          if (result.status === 204) {
            const updated = entries.filter((entry, i) => {
              return i !== index;
            });
            setEntries(updated);
          }})
        .catch((error) => {
            console.log(error);
          })
        }

  function fetchEntries() {
      const promise = fetch("http://localhost:8000/");
      return promise;
    } 
  
  function postEntry(entry) {
      const promise = fetch("Http://localhost:8000/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      });
  
      return promise;
    }




  useEffect(() => {
      fetchEntries()
        .then((res) => res.json())
        .then((json) => setEntries(json["entries_list"]))
        .catch((error) => { console.log(error); });
      }, [] );

  function updateList(entry) { 
        postEntry(entry)
        .then((result) => {
          if (result.status === 201) {
            return result.json();}})
        .then((newEntry) =>{
          setEntries([...entries, newEntry])})      
        .catch((error) => {
            console.log(error);
          })
    }
    


    return (
      
    
      
    
      <div className="container">
      <h4 class = "left" >ScrapJam </h4>
     
      

        <center>
          <h1>
          Entries
          </h1>
        </center>
    
        
        {/* <PopUp updateList PopUp/> */}
        <Form handleSubmit={updateList} />

        <Table
          entryData={entries}
          removeEntry={removeOneEntry}
        />



      
      </div>
    );
  }


  export default MyApp;
  
    

