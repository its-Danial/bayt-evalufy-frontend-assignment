import { BadgeDelta, Card, Flex, Metric, ProgressBar, Text } from "@tremor/react";

export default function KipCard() {
  return (
    // <Card className="max-w-lg mx-auto">
    <div>
      <Flex alignItems="start">
        <div className="truncate">
          <Text>Sales</Text>
          <Metric className="truncate">$ 12,699</Metric>
        </div>
        <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
      </Flex>
      <Flex className="mt-4">
        <Text className="truncate">68% ($ 149,940)</Text>
        <Text>$ 220,500</Text>
      </Flex>
      <ProgressBar value={15.9} className="mt-2" />
    </div>
    // </Card>
  );
}
