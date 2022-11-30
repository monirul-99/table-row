import React from "react";

const TableRow = ({ item, column }) => {
  return (
    <tr>
      {column?.map((columnItems, inx) => {
        if (columnItems.value.includes(".")) {
          const itemsSplit = columnItems.value.split(".");
          return (
            <td>
              <p className="ml-[10px]">{item[itemsSplit[0]][itemsSplit[1]]}</p>
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
