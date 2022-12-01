import React, { useState } from "react";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";

const TableHead = ({ column, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";

    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  return (
    <thead>
      <tr>
        {column.map(({ label, accessor, sortable }, inx) => {
          // const cl = sortable
          //   ? sortField === accessor && order === "asc"
          //     ? "up"
          //     : sortField === accessor && order === "desc"
          //     ? "down"
          //     : "default"
          //   : "";
          return (
            <th
              className="w-[175px] h-[40px] border text-start text-[14px] capitalize"
              key={inx}
            >
              <div className="flex">
                <p className="ml-[10px] capitalize font-semibold">{label}</p>
                <div
                  onClick={
                    sortable ? () => handleSortingChange(accessor) : null
                  }
                  className="flex items-center -space-x-2 px-1 cursor-pointer"
                >
                  <HiArrowNarrowDown />
                  <HiArrowNarrowUp />
                </div>
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
