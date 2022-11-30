import React from "react";

const TableHead = ({ item }) => {
  return (
    <th className="w-[175px] h-[40px] border text-start">
      <p className="ml-[10px]">{item.heading}</p>
    </th>
  );
};

export default TableHead;