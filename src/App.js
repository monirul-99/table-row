import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";

function App() {
  const [tableData, setTableData] = useState([]);

  console.log(tableData);
  useEffect(() => {
    axios("tableTestData.json")
      .then((res) => setTableData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const column = [
    { heading: "Name", value: "person.name" },
    { heading: "Location", value: "city" },
    { heading: "E-mail", value: "email" },
    { heading: "Joining Date", value: "joiningDate" },
    { heading: "Role", value: "role" },
  ];
  return (
    <div className="w-full h-screen flex justify-center items-center font-Sans">
      <TableComponent data={tableData} column={column} />
    </div>
  );
}

export default App;
