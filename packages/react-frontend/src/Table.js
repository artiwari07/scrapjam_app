import React from "react";
import "reactjs-popup/dist/index.css";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th> </th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.entryData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.date}</td>
        <td>
          <button type="button" class="editButton"></button>
          <text> </text>
          <button
            type="button"
            class="garbageButton"
            onClick={() => props.removeEntry(row._id, index)}
          ></button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody entryData={props.entryData} removeEntry={props.removeEntry} />
    </table>
  );
}
export default Table;
