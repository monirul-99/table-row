import React from "react";

const TableRow = ({ item, column }) => {
  return (
    <tr className="text-[14px]">
      {column?.map((columnItems, inx) => {
        if (columnItems.value.includes(".")) {
          const itemsSplit = columnItems.value.split(".");
          console.log(columnItems);
          return (
            <td key={inx} className="border w-[175px] h-[40px]">
              <aside className="flex items-center">
                <img src={item[itemsSplit[0]][itemsSplit[2]]} alt="" />
                <p className="ml-[10px]">
                  {item[itemsSplit[0]][itemsSplit[1]]}
                </p>
              </aside>
            </td>
          );
        }
        if (columnItems.value.includes("email")) {
          const itemsSplit = columnItems.value;
          return (
            <td key={inx} className="border w-[220px] h-[40px]">
              <p className="ml-[10px] text-[#0071CC] underline">
                {item[`${itemsSplit}`]}
              </p>
            </td>
          );
        }
        return (
          <td key={inx} className="border w-[175px] h-[40px]">
            <p className="ml-[10px]">{item[`${columnItems.value}`]}</p>
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
