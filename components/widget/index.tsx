import { Card } from "@tremor/react";
import { FC } from "react";
import AreaChart from "./charts/AreaChart";
import KipCardGrid from "./numeric/KipCardGrid";
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
        return <TicketsTable />;
      case "Numeric":
        return <KipCardGrid data={data.data} />;
      case "Chart-Line":
        return <AreaChart />;
      default:
        break;
    }
  };

  return (
    <div style={gridPosition}>
      {title && <h2>{title}</h2>}
      {renderWidget()}
    </div>
  );
};
export default index;
