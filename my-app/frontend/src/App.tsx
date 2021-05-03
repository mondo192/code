import { useEffect, useState } from "react";
import { Table } from "./components/Table"
import { TableProps } from "./shared/types";

const App: React.FC = () => {
  const [data, setData] = useState<TableProps>();

  useEffect(() => {
    setData({
      data: "Hello"
    });
  }, []);

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default App;
