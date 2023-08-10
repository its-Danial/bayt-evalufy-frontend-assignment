import { Card, Title } from "@tremor/react";
import { FC } from "react";
import AreaChart from "./charts/AreaChart";
import KipCardGrid from "./numeric/KipCardGrid";
import TicketsTable from "./tables/TicketsTable";
import CategoryBar from "./bar/CategoryBar";
import DonutChartLegend from "./charts/DonutChartLegend";
import DonutChartMetric from "./charts/DonutChartMetric";

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
        return <TicketsTable />;
      case "Numeric":
        return <KipCardGrid data={data.data} />;
      case "Chart-Line":
        return <AreaChart />;
      case "Category-Bar":
        return <CategoryBar />;
      case "DonutChart-Legend":
        return <DonutChartLegend />;
      case "DonutChart-Metric":
        return <DonutChartMetric />;
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
