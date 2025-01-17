import { helpers } from "lib/charts";
import { ChartData } from "lib/charts/types";
import { currentLocale } from "lib/i18n";
import { Text, YAxisProps } from "recharts";
import { ChartConfiguration } from "./Configuration";
/** Base parameters for all Axis Props */
const BASE_AXIS_PROPS = {
  tickLine: false,
  tick: { fontSize: 12 },
};
/** Base parameters for XAxis */
const BASE_XAXIS_PROPS = Object.assign({}, BASE_AXIS_PROPS, {
  dy: 10,
  axisLine: false,
  interval: 0,
});
/** Base parameters for YAxis */
const BASE_YAXIS_PROPS = Object.assign({}, BASE_AXIS_PROPS, {
  dx: -10,
  axisLine: true,
});
/** XAxis Tick formatter that optimize anchoring for the first and last ticks */
function XAxisTickFormatter(props: any) {
  const textAnchor =
    props.index == 0
      ? "begin"
      : props.index == props.visibleTicksCount - 1
      ? "end"
      : "middle";

  return (
    <Text {...props} textAnchor={textAnchor} fontSize={props.dy}>
      {props.tickFormatter(props.payload.value)}
    </Text>
  );
}
/** XAxis props to display ticks as months */
export function KlimaXAxisMonthlyProps<T>(
  data: ChartData<T>,
  dataKey: keyof T
) {
  return Object.assign({}, BASE_XAXIS_PROPS, {
    // FIXME: We should not need to hard cast here
    dataKey: dataKey as string,
    tickFormatter: helpers.formatDateAsMonths,
    ticks: helpers.niceTicks(data, dataKey),
    tick: <XAxisTickFormatter />,
  });
}
/** XAxis props to display ticks as days */
export function KlimaXAxisDailyProps<T>(data: ChartData<T>, dataKey: keyof T) {
  return Object.assign({}, BASE_XAXIS_PROPS, {
    // FIXME: We should not need to hard cast here
    dataKey: dataKey as string,
    tickFormatter: helpers.formatDateAsDays,
    ticks: helpers.niceTicks(data, dataKey),
  });
}
/** XAxis props to display vintage dates */
export function KlimaXAxisVintageProps<T>(
  data: ChartData<T>,
  dataKey: keyof T
) {
  return Object.assign({}, BASE_XAXIS_PROPS, {
    // FIXME: We should not need to hard cast here
    dataKey: dataKey as string,
    ticks: helpers.niceTicks(data, dataKey),
    tickFormatter: (x: number) => String(x),
  });
}

/** XAxis props to display methodologies */
export function KlimaXAxisMethodologyProps<T>(
  data: ChartData<T>,
  dataKey: keyof T
) {
  return Object.assign({}, BASE_XAXIS_PROPS, {
    // FIXME: We should not need to hard cast here
    dataKey: dataKey as string,
    tickFormatter: (x: number) => String(x),
    ticks: [],
    tick: { fontSize: 8 },
    angle: -22,
  });
}

/** YAxis props to display quantity in an appropriate format */
export function KlimaYAxisTonsProps<CI, T>(
  data: ChartData<CI>,
  conf: ChartConfiguration<T>
) {
  // Find maximum value in data
  const dataKeys: Array<keyof CI> = conf.map(
    (confItem) => confItem.id as keyof CI
  );
  const max = helpers.getDataChartMax(data, dataKeys);
  // Select formatter
  const tickFormatter =
    max < 10 ** 4
      ? helpers.formatQuantityAsTons
      : max < 10 ** 7
      ? helpers.formatQuantityAsKiloTons
      : helpers.formatQuantityAsMillionsOfTons;

  return Object.assign({}, BASE_YAXIS_PROPS, {
    tickFormatter,
    width: 70,
  } as YAxisProps);
}

/** YAxis props to display prices in an appropriate format */
export function KlimaYAxisPriceProps() {
  const locale = currentLocale();
  const formatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
  });
  const tickFormatter = (value: number) => formatter.format(value);
  return Object.assign({}, BASE_YAXIS_PROPS, {
    tickFormatter,
    width: 40,
  } as YAxisProps);
}

/** YAxis props to display percentages with a fixed axis in an appropriate format */
export function KlimaYAxisPercentageProps() {
  const tickFormatter = (x: number) =>
    helpers.formatPercentage({ value: x, fractionDigits: 0 });
  const scaleProps = {
    domain: [0, 1],
    ticks: [0, 0.2, 0.4, 0.6, 0.8, 1],
  };
  return { ...BASE_YAXIS_PROPS, ...scaleProps, ...{ tickFormatter } };
}

/** YAxis props to display percentages in an appropriate format */
export function KlimaYAxisPercentageAutoscaleProps() {
  const tickFormatter = (x: number) =>
    helpers.formatPercentage({ value: x, fractionDigits: 2 });
  return { ...BASE_YAXIS_PROPS, ...{ tickFormatter } };
}

/** YAxis props to display value as is */
export function KlimaYAxisIdentityProps() {
  const tickFormatter = (x: number) => String(x);
  return { ...BASE_YAXIS_PROPS, ...{ tickFormatter } };
}
