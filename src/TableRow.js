import React from "react";

const TableRow = ({ tableData, column }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id} className="text-[14px]">
            {column.map(({ accessor }, inx) => {
              if (accessor.includes(".")) {
                const itemsSplit = accessor.split(".");
                // console.log("Split", itemsSplit);
                return (
                  <td key={inx} className="border w-[175px] h-[40px]">
                    <aside className="flex items-center">
                      <img src={data[itemsSplit[0]][itemsSplit[2]]} alt="" />
                      <p className="ml-[10px]">
                        {data[itemsSplit[0]][itemsSplit[1]]}
                      </p>
                    </aside>
                  </td>
                );
              }

              const tData = data[accessor] ? data[accessor] : "——";

              return (
                <td className="border w-[175px] h-[40px]" key={inx}>
                  {tData}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableRow;
