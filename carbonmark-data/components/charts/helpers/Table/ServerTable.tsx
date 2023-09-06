import { PaginatedResponse } from "lib/charts/types";
import { currentLocale } from "lib/i18n";
import { ConfigurationKey, fetch, getColumns } from "./configurations";
import { Columns } from "./configurations/types";
import styles from "./styles.module.scss";

/** An async server component that renders a Data Table
 * fetchFunction: Callback that must return the content displayed by that table
 * page: the page of the dataset to render
 * columns: Columns configuration
 */
export default async function ServerTable<RI>(props: {
  page: number;
  configurationKey: ConfigurationKey;
}) {
  const locale = currentLocale();
  /* FIXME: Unfortunately we have to hardcast these */
  const data = (await fetch(
    props.configurationKey,
    props.page
  )) as PaginatedResponse<RI>;
  const columns = getColumns(props.configurationKey, locale) as Columns<RI>;
  return (
    <table className={styles.table}>
      <tr className={styles.header}>
        {columns.map((column, index) => (
          <th key={index} className={column.cellStyle}>
            {column.header}
          </th>
        ))}
      </tr>
      {data.items.map((item, index) => (
        <tr key={index} className={styles.row}>
          {columns.map((column, index) => (
            <td key={index} className={column.cellStyle}>
              {column.formatter(item[column.dataKey] as never)}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
