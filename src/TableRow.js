import React from "react";

const TableRow = ({ item, column }) => {
  return (
    <tr className="text-[14px]">
      {column?.map((columnItems, inx) => {
        if (columnItems.value.includes(".")) {
          const itemsSplit = columnItems.value.split(".");
          return (
            <td className="border w-[175px] h-[40px]">
              <p className="ml-[10px]">{item[itemsSplit[0]][itemsSplit[1]]}</p>
            </td>
          );
        }
        if (columnItems.value.includes("email")) {
          const itemsSplit = columnItems.value;
          return (
            <td className="border w-[220px] h-[40px]">
              <p className="ml-[10px] text-[#0071CC] underline">
                {item[`${itemsSplit}`]}
              </p>
            </td>
          );
        }
        return (
          <td className="border w-[175px] h-[40px]" key={inx}>
            <p className="ml-[10px]">{item[`${columnItems.value}`]}</p>
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
