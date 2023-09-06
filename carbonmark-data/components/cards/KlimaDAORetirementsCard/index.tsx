import { t } from "@lingui/macro";
import Table from "components/charts/helpers/Table";
import ChartCard, { CardProps } from "../ChartCard";

export default function KlimaDAORetirementsCard(props: CardProps) {
  /* @ts-expect-error async Server component */
  const chart = <Table configurationKey="klimaRetirements"></Table>;

  return (
    <ChartCard
      {...props}
      title={t`Detailed list of KlimaDAO Retirements`}
      isColumnCard={true}
      chart={chart}
    />
  );
}
