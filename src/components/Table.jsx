import React from "react";
import TableRow from "./TableRow";

const Table = function (props) {
  return (
    <table>
      <thead>
        <tr>
          {props.headers.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <TableRow className="tr" rowData={row} key={row.code} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
