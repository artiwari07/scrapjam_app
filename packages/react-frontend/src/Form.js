import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Form(props) {
  const [entry, setEntry] = useState({
    name: "",
    date: "",
    id: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "date") setEntry({ name: entry["name"], date: value });
    else setEntry({ name: value, date: entry["date"] });
  }

  function submitForm() {
    props.handleSubmit(entry);
    setEntry({ name: "", date: "", id: "" });
  }

  return (
    <form>
      <Popup trigger=
                {<button  class="button_add" type="button">+</button>}
                position="right center">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={entry.name}
        onChange={handleChange}
      />
      <label htmlFor="date">Date</label>
      <input
        type="text"
        name="date"
        id="date"
        value={entry.date}
        onChange={handleChange}
      />
       
      <input type="button" class="button1"  value="Submit" onClick={submitForm} />
      </Popup>
    </form>
  );
}
export default Form;
