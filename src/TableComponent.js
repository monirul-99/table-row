import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const TableComponent = ({ column, handleSorting, tableData }) => {
  return (
    <table className="border-collapse border table table-zebra">
      <TableHead {...{ column, handleSorting }} />
      <TableRow {...{ column, tableData }} />
    </table>
  );
};

export default TableComponent;
