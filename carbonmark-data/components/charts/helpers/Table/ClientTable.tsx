"use client";
import { useState } from "react";
import { ConfigurationKey } from "./configurations";
import Pagination from "./Pagination";
import ServerTable from "./ServerTable";

/** A client component that renders a Data Table
 * fetchFunction: Callback that must return the content displayed by that table
 * columns: Columns configuration
 */
export default function ClientTable(props: {
  pages_count: number;
  configurationKey: ConfigurationKey;
}) {
  const [page, setPage] = useState<number>(0);

  return (
    <div>
      {/* @ts-expect-error async Server component */}
      <ServerTable configurationKey={props.configurationKey}></ServerTable>
      <Pagination
        page={page}
        pages_count={props.pages_count}
        onPageChange={setPage}
      ></Pagination>
    </div>
  );
}
