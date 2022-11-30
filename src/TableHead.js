import React from "react";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";

const TableHead = ({ item }) => {
  return (
    <th className="w-[175px] h-[40px] border text-start text-[14px]">
      <div className="flex">
        <p className="ml-[10px] capitalize">{item.heading}</p>
        <div className="flex items-center -space-x-2 px-1">
          <HiArrowNarrowDown />

          <HiArrowNarrowUp />
        </div>
      </div>
    </th>
  );
};

export default TableHead;
