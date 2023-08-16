import { Card, Title } from "@tremor/react";
import { FC } from "react";
import AreaChart from "./charts/AreaChart";
import KipCardGrid from "./numeric/KipCardGrid";
import CategoryBar from "./bar/CategoryBar";
import DonutChartLegend from "./charts/DonutChartLegend";
import DonutChartMetric from "./charts/DonutChartMetric";
import TicketsTable from "./tables/TicketsTable";
import Skeleton from "@/components/ui/Skeleton";

type WidgetProps = {
  type: string;
  title: string;
  data: any[];
  gridPosition: object;
  isLoading: boolean;
};

const index: FC<WidgetProps> = ({ type, title, data, gridPosition, isLoading }) => {
  const renderWidget = () => {
    switch (type) {
      case "Table":
        return <TicketsTable data={data} />;
      case "Numeric":
        return <KipCardGrid data={data} />;
      case "Chart-Line":
        return <AreaChart data={data} />;
      case "Category-Bar":
        return <CategoryBar data={data} />;
      case "DonutChart-Legend":
        // @ts-ignore
        return <DonutChartLegend data={data} />;
      case "DonutChart-Metric":
        return <DonutChartMetric data={data} />;
      default:
        break;
    }
  };

  return (
    <Card style={gridPosition}>
      {!isLoading && title && <Title className="mb-4">{title}</Title>}
      {isLoading ? <Skeleton caption={title} /> : renderWidget()}
    </Card>
  );
};
export default index;
