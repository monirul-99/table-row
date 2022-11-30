import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const TableComponent = ({ data, column }) => {
  return (
    <table className="border-collapse border table table-zebra">
      <thead>
        <tr>
          {column?.map((item, inx) => (
            <TableHead key={inx} item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, inx) => (
          <TableRow key={inx} item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
