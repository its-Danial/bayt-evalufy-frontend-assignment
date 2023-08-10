// import { categoriesBarData } from "@/data/mockData";
import { BadgeDelta, Card, Flex, Metric, Text, CategoryBar as TremorCategoryBar } from "@tremor/react";
import { FC } from "react";

type CategoryBarProps = {
  data: {
    title: string;
    metric: string;
  }[];
};

const CategoryBar: FC<CategoryBarProps> = ({ data: categoriesBarData }) => {
  return (
    <div className="max-w-lg mx-auto">
      <Card>
        <Flex>
          <Text className="truncate">Overall Performance Score</Text>
          <BadgeDelta deltaType="moderateIncrease">13.1%</BadgeDelta>
        </Flex>
        <Flex justifyContent="start" alignItems="baseline" className="space-x-1">
          <Metric>65</Metric>
          <Text>/100</Text>
        </Flex>
        <TremorCategoryBar
          // @ts-ignore
          values={[10, 25, 45, 20]}
          colors={["emerald", "yellow", "orange", "red"]}
          markerValue={65}
          tooltip="65%"
          className="mt-2"
        />
      </Card>
      {/* <Grid numItemsSm={2} className="mt-4 gap-4">
        {categoriesBarData.map((item) => (
          <Card key={item.title}>
            <Metric className="mt-2 truncate">{item.metric}</Metric>
            <Text>{item.title}</Text>
          </Card>
        ))}
      </Grid> */}
    </div>
  );
};
export default CategoryBar;
