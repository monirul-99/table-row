import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [tableData, setTableData] = useState([]);

  console.log(tableData);
  useEffect(() => {
    axios("tableTestData.json")
      .then((res) => setTableData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return <div className=""></div>;
}

export default App;
