import { t } from "@lingui/macro";
import ChartCard, { CardProps } from "components/cards/ChartCard";
import KLineChart from "components/charts/helpers/KLineChart";
import { SimpleChartConfiguration } from "lib/charts/aggregators";
import { queryPrices } from "lib/charts/queries";
import { PricesItem } from "lib/charts/types";
import { palette } from "theme/palette";

/** Historical Prices Card */
export default function HistoricalPriceCard(props: CardProps) {
  const chart = (
    /* @ts-expect-error async Server component */
    <HistoricalPriceChart />
  );
  return (
    <ChartCard
      {...props}
      title={t`Historical prices (USD)`}
      detailUrl="/details/price-of-digital-carbon"
      chart={chart}
    />
  );
}

/** HistoricalPrice chart */
async function HistoricalPriceChart() {
  const configuration: SimpleChartConfiguration<PricesItem> = [
    {
      chartOptions: {
        id: "bct_price",
        label: "BCT",
        color: palette.charts_alternate.color1,
        legendOrder: 1,
      },
    },
    {
      chartOptions: {
        id: "nct_price",
        label: "NCT",
        color: palette.charts_alternate.color2,
        legendOrder: 2,
      },
    },
    {
      chartOptions: {
        id: "mco2_price",
        label: "MCO2",
        color: palette.charts_alternate.color3,
        legendOrder: 3,
      },
    },
    {
      chartOptions: {
        id: "ubo_price",
        label: "UBO",
        color: palette.charts_alternate.color4,
        legendOrder: 4,
      },
    },
    {
      chartOptions: {
        id: "nbo_price",
        label: "NBO",
        color: palette.charts_alternate.color5,
        legendOrder: 5,
      },
    },
  ];
  const data = (
    await queryPrices({ sort_by: "date", sort_order: "asc", page_size: -1 })
  ).items;
  return (
    <KLineChart
      configuration={configuration}
      data={data}
      dateField="date"
      YAxis="price"
    />
  );
}