import { useEffect } from "react";
import { TableProps } from "../shared/types";

export const Table: React.FC<TableProps> = ({ data }) => {
  
  useEffect(() => {
    console.log(data);
  },[]);
  
  return (
    <table>
      <thead>
        <th>Heading 1</th>
        <th>Heading 2</th>
      </thead>
      <tbody>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tbody>
    </table>
  );
}