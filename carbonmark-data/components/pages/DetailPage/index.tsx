/**
 * A UI layout component to position detail pages content
 */
export default function DetailPage(props: {
  card: React.ReactNode | Promise<React.ReactNode>;
  pageTitle: string;
  overview: string;
}) {
  return (
    <div>
      <h1>{props.pageTitle}</h1>
      {props.card}
      <div>{props.overview}</div>
    </div>
  );
}
