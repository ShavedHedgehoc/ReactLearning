import React, { useState } from "react";

const TableRow = function (props) {
  return (
    <tr>
      <td>{props.rowData.name}</td>
      <td>{props.rowData.date}</td>
      <td>{props.rowData.marking}</td>
      <td>{props.rowData.plant}</td>
    </tr>
  );
};

export default TableRow;
