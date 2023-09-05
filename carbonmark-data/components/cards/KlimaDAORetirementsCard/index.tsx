import { formatTonnes } from "@klimadao/lib/utils/lightIndex";
import { t } from "@lingui/macro";
import PolyscanLink from "components/charts/helpers/PolygonscanLink";
import Table, { Columns } from "components/charts/helpers/Table";
import VerraProjectLink from "components/charts/helpers/VerraProjectLink";
import { helpers } from "lib/charts";
import { queryRawKlimaRetirements } from "lib/charts/queries";
import { RawRetirementsItem } from "lib/charts/types";
import { currentLocale } from "lib/i18n";
import layout from "theme/layout.module.scss";
import ChartCard, { CardProps } from "../ChartCard";
/** Async server component that renders a Recharts client component */
export default function KlimaDAORetirementsCard(props: CardProps) {
  const locale = currentLocale();
  function fetchFunction(page: number) {
    return queryRawKlimaRetirements({
      sort_by: "retirement_date",
      sort_order: "desc",
      page_size: 10,
      page,
    });
  }
  const columns: Columns<RawRetirementsItem> = [
    {
      header: t`Beneficiary address`,
      cellStyle: layout.textLeft,
      dataKey: "beneficiary",
      formatter: (x: string | number) => x,
    },
    {
      header: t`Project`,
      cellStyle: layout.textCenter,
      dataKey: "project_id",
      formatter: (projectId: string) => (
        <VerraProjectLink projectId={projectId}></VerraProjectLink>
      ),
    },
    {
      header: t`Pool`,
      cellStyle: layout.textCenter,
      dataKey: "token",
      formatter: (x: string | number) => x,
    },
    {
      header: t`Date`,
      cellStyle: layout.textRight,
      dataKey: "retirement_date",
      formatter: helpers.formatDateAsDaysShort(locale),
    },
    {
      header: t`Tonnes`,
      cellStyle: layout.textRight,
      dataKey: "quantity",
      formatter: (amount: string | number) =>
        formatTonnes({
          amount: String(amount),
          locale,
          minimumFractionDigits: 2,
        }),
    },
    {
      header: "",
      cellStyle: layout.textLeft,
      dataKey: "transaction_id",
      formatter: (transactionId: string) => (
        <PolyscanLink transactionId={transactionId}></PolyscanLink>
      ),
    },
  ];
  /* @ts-expect-error async Server component */
  const chart = <Table fetchFunction={fetchFunction} columns={columns}></Table>;

  return (
    <ChartCard
      {...props}
      title={t`Detailed list of KlimaDAO Retirements`}
      isColumnCard={true}
      chart={chart}
    />
  );
}
