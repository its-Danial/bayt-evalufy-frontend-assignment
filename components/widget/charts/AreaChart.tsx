import { InformationCircleIcon } from "@heroicons/react/solid";
import {
  AreaChart as TremorAreaChart,
  Color,
  Flex,
  Icon,
  Tab,
  TabGroup,
  TabList,
  Text,
  Title,
  Card,
} from "@tremor/react";
import { useState } from "react";
// import { performanceData } from "@/data/mockData";

const usNumberformatter = (number: number, decimals = 0) =>
  Intl.NumberFormat("us", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(Number(number))
    .toString();

const formatters: { [key: string]: any } = {
  Sales: (number: number) => `$ ${usNumberformatter(number)}`,
  Profit: (number: number) => `$ ${usNumberformatter(number)}`,
  Customers: (number: number) => `${usNumberformatter(number)}`,
  Delta: (number: number) => `${usNumberformatter(number, 2)}%`,
};

const Kpis = {
  Sales: "Sales",
  Profit: "Profit",
  Customers: "Customers",
};

const kpiList = [Kpis.Sales, Kpis.Profit, Kpis.Customers];

import { FC } from "react";
import { DailyPerformance } from "@/types/types";

type AreaChartProps = {
  data: DailyPerformance[];
};

const AreaChart: FC<AreaChartProps> = ({ data: performanceData }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedKpi = kpiList[selectedIndex];

  const areaChartArgs = {
    className: "mt-5 h-72",
    data: performanceData,
    index: "date",
    categories: [selectedKpi],
    colors: ["blue"] as Color[],
    showLegend: false,
    valueFormatter: formatters[selectedKpi],
    yAxisWidth: 56,
  };

  return (
    <Card>
      <div className="md:flex justify-between">
        <div>
          <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
            <Title> Performance History </Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Shows daily increase or decrease of particular domain"
            />
          </Flex>
          <Text> Daily change per domain </Text>
        </div>
        <div>
          <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
            <TabList color="gray" variant="solid">
              <Tab>Sales</Tab>
              <Tab>Profit</Tab>
              <Tab>Customers</Tab>
            </TabList>
          </TabGroup>
        </div>
      </div>
      {/* web */}
      <div className="mt-8 hidden sm:block">
        <TremorAreaChart {...areaChartArgs} />
      </div>
      {/* mobile */}
      <div className="mt-8 sm:hidden">
        <TremorAreaChart {...areaChartArgs} startEndOnly={true} showGradient={false} showYAxis={false} />
      </div>
    </Card>
  );
};
export default AreaChart;
