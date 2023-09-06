import ClientTable from "./ClientTable";
import { ConfigurationKey, fetch } from "./configurations";

/** The table component is tricky because of those two constraints:
 * - 1. Data must be fetched by server components
 * - 2. Number of pages must be known by the pagination (client component)
 * - 3. Functions cannot be passed to client components
 *
 * Because of 1 and 2 we have one server component fetching the number of pages
 * It calls a client component to handle pagination
 * The client component calls a server component to actualy render the page
 *
 * Because of 3 and the fact that there is a client component layer before the actual rendering of the table server side
 * all tables configurations are indexed in a dictionnary and only the dictionnary key is passed down to the final server component
 *
 */

/** An async server component that does an initial data fetching to know the number of pages this dataset has
 * fetchFunction: Callback that must return the content displayed by that table
 * columns: Columns configuration
 */
export default async function Table(props: {
  configurationKey: ConfigurationKey;
}) {
  const data = await fetch(props.configurationKey, 0);
  return (
    <div>
      <ClientTable {...props} pages_count={data.pages_count}></ClientTable>
    </div>
  );
}
