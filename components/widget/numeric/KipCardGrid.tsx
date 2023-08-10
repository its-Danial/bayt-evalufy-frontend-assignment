import { Card, Flex, Grid, Text, Metric, BadgeDelta, ProgressBar } from "@tremor/react";
import { FC } from "react";

type KipCardGridProps = {
  data: any[];
};

const KipCardGrid: FC<KipCardGridProps> = ({ data }) => {
  return (
    <Grid numItemsLg={3} className="gap-6">
      {data.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <div className="truncate">
              <Text>{item.title}</Text>
              <Metric className="truncate">{item.metric}</Metric>
            </div>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex className="mt-4 space-x-2">
            <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar value={item.progress} className="mt-2" />
        </Card>
      ))}
    </Grid>
  );
};
export default KipCardGrid;
