import React from "react";
import { Table } from "reactstrap";

function Tables(props) {
  return (
    <div className="tables">
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Finish Time</th>
            <th>Study Time</th>
          </tr>
        </thead>
        <tbody>
          {props.table.map((t, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{props.user.Name}</td>
              <td>{props.dates[i]}</td>
              <td>{t} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
