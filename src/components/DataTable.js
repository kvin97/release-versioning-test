import { Table } from "antd";
import { dataSource, columns } from "../Mocks/DataSource";

function DataTable() {
  return <Table dataSource={dataSource} columns={columns} />;
}

export default DataTable;
