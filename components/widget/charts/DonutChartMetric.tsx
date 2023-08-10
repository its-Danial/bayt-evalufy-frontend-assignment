import {
  BadgeDelta,
  Bold,
  Button,
  Card,
  Divider,
  DonutChart,
  Flex,
  List,
  ListItem,
  Metric,
  Tab,
  TabGroup,
  TabList,
  Text,
  Title,
} from "@tremor/react";

import { ChartPieIcon, ViewListIcon } from "@heroicons/react/outline";

// import { stocks } from "@/data/mockData";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { FC, useState } from "react";
import { StockData } from "@/types/types";

const valueFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

type DonutChartMetricProps = {
  data: StockData[];
};

const DonutChartMetric: FC<DonutChartMetricProps> = ({ data: stocks }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Card className="max-w-md mx-auto">
      <Flex className="space-x-8" justifyContent="between" alignItems="center">
        <Title>Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8">Portfolio value</Text>
      <Metric>$ 25,465</Metric>
      <Divider />
      <Text className="mt-8">
        <Bold>Asset Allocation</Bold>
      </Text>
      <Text>1 Asset class • 5 Holdings</Text>
      {selectedIndex === 0 ? (
        <DonutChart
          data={stocks}
          showAnimation={false}
          category="value"
          index="name"
          valueFormatter={valueFormatter}
          className="mt-6"
        />
      ) : (
        <>
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Stocks</Bold>
            </Text>
            <Text>Since transaction</Text>
          </Flex>
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.name}>
                <Text>{stock.name}</Text>
                <Flex justifyContent="end" className="space-x-2">
                  <Text>$ {Intl.NumberFormat("us").format(stock.value).toString()}</Text>
                  <BadgeDelta deltaType={stock.deltaType} size="xs">
                    {stock.performance}
                  </BadgeDelta>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Flex className="mt-6 pt-4 border-t">
        <Button size="xs" variant="light" icon={ArrowNarrowRightIcon} iconPosition="right">
          View more
        </Button>
      </Flex>
    </Card>
  );
};
export default DonutChartMetric;
