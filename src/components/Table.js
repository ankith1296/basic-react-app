import React from "react";

export default function Table(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
        </tr>
        {props.records.map((value, i) => {
          return (
            <tr key={i}>
              <td>{value.fname}</td>
              <td>{value.age}</td>
              <td>{value.phone}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
