import React from "react";
import tableDataMain from "./tableTestData.json";
import TableComponent from "./TableComponent";
import { useSortableTable } from "./useSortableTable";

function App() {
  const [tableData, handleSorting] = useSortableTable(tableDataMain);

  const column = [
    { label: "Name", accessor: "person.name.avatar", sortable: true },
    { label: "Location", accessor: "city", sortable: true },
    { label: "E-mail", accessor: "email", sortable: true },
    { label: "Joining Date", accessor: "joiningDate", sortable: true },
    { label: "Role", accessor: "role", sortable: true },
  ];
  const columnTwo = [
    { label: "Location", accessor: "city", sortable: true },
    { label: "Role", accessor: "role", sortable: true },
  ];
  const columnThree = [
    { label: "Location", accessor: "city", sortable: true },
    { label: "E-mail", accessor: "email", sortable: true },
    { label: "Role", accessor: "role", sortable: true },
  ];
  return (
    <div className="w-full py-16 flex flex-col gap-12 justify-center items-center font-Sans">
      <TableComponent
        column={column}
        tableData={tableData}
        handleSorting={handleSorting}
      />
      <TableComponent
        column={columnTwo}
        tableData={tableData}
        handleSorting={handleSorting}
      />
      <TableComponent
        column={columnThree}
        tableData={tableData}
        handleSorting={handleSorting}
      />
    </div>
  );
}

export default App;
