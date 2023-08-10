import { Card, Title } from "@tremor/react";
import { FC } from "react";
import AreaChart from "./charts/AreaChart";
import KipCardGrid from "./numeric/KipCardGrid";

import CategoryBar from "./bar/CategoryBar";
import DonutChartLegend from "./charts/DonutChartLegend";
import DonutChartMetric from "./charts/DonutChartMetric";
import TicketsTable from "./tables/TicketsTable";

type WidgetProps = {
  type: string;
  title: string;
  data: { id: number; data: any[] };
  gridPosition: object;
};

const index: FC<WidgetProps> = ({ type, title, data, gridPosition }) => {
  console.log(type, data.data);

  const renderWidget = () => {
    switch (type) {
      case "Table":
        return <TicketsTable data={data.data} />;
      case "Numeric":
        return <KipCardGrid data={data.data} />;
      case "Chart-Line":
        return <AreaChart data={data.data} />;
      case "Category-Bar":
        return <CategoryBar data={data.data} />;
      case "DonutChart-Legend":
        // @ts-ignore
        return <DonutChartLegend data={data.data} />;
      case "DonutChart-Metric":
        return <DonutChartMetric data={data.data} />;
      default:
        break;
    }
  };

  return (
    <Card style={gridPosition}>
      {title && <Title className="mb-4">{title}</Title>}
      {renderWidget()}
    </Card>
  );
};
export default index;
