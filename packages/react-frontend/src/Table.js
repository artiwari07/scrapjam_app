import React from "react";



function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Animal</th>
          <th>Hobby</th>
          <th> </th>
        </tr>
      </thead>
    );
  }
  
  function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.animal}</td>
          <td>{row.hobby}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>
            Delete
            </button>
          </td>
          </tr>
      );
     }
    );
    return (
        <tbody>
          {rows}
         </tbody>
     );
  }
  
  function Table(props) {
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={props.characterData}
          removeCharacter={props.removeCharacter}
        />
      </table>
    );
  }
export default Table;