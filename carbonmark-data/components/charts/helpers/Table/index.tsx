import { PaginatedResponse } from "lib/charts/types";
import React from "react";
import styles from "./styles.module.scss";

export type Columns<RI> = Array<{
  header: string;
  dataKey: keyof RI;
  cellStyle: string;
  formatter:
    | ((v: string) => string | React.ReactNode)
    | ((v: number) => string | React.ReactNode);
}>;

/** Async server component that renders a DataTable */
export default async function Table<RI>(props: {
  fetchFunction: (page: number) => Promise<PaginatedResponse<RI>>;
  columns: Columns<RI>;
}) {
  const page = 0;
  const data = await props.fetchFunction(page);
  return (
    <table className={styles.table}>
      <tr className={styles.header}>
        {props.columns.map((column, index) => (
          <th key={index} className={column.cellStyle}>
            {column.header}
          </th>
        ))}
      </tr>
      {data.items.map((item, index) => (
        <tr key={index} className={styles.row}>
          {props.columns.map((column, index) => (
            <td key={index} className={column.cellStyle}>
              {column.formatter(item[column.dataKey] as never)}
            </td>
          ))}
        </tr>
      ))}
      <tr></tr>
    </table>
  );
}
