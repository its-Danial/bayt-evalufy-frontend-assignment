import { cities, regions } from "@/data/mockData";
import { CityData } from "@/types/types";
import { BadgeDelta, Card, DonutChart, Flex, Legend, List, ListItem, Select, SelectItem, Title } from "@tremor/react";
import { useEffect, useState } from "react";
import { FC } from "react";

type DonutChartLegendProps = {};

const filterByRegion = (region: string, data: CityData[]) =>
  region === "all" ? data : data.filter((city) => city.region === region);

const DonutChartLegend: FC<DonutChartLegendProps> = (props) => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [filteredData, setFilteredData] = useState(cities);

  useEffect(() => {
    const data = cities;
    setFilteredData(filterByRegion(selectedRegion, data));
  }, [selectedRegion]);

  return (
    <Card className="max-w-md mx-auto">
      <Flex className="space-x-8" justifyContent="start" alignItems="center">
        <Title>Sales</Title>
        <Select onValueChange={setSelectedRegion} placeholder="Region Selection">
          {regions.map((region) => (
            <SelectItem key={region.key} value={region.key}>
              {region.name}
            </SelectItem>
          ))}
        </Select>
      </Flex>
      <Legend categories={filteredData.map((city) => city.name)} className="mt-6" />
      <DonutChart
        data={filteredData}
        category="sales"
        index="name"
        valueFormatter={(number: number) => `${Intl.NumberFormat("us").format(number).toString()} $`}
        className="mt-6"
      />
      <List className="mt-6">
        {filteredData.map((city) => (
          <ListItem key={city.name}>
            {city.name}
            <BadgeDelta deltaType={city.deltaType} size="xs">
              {city.delta}
            </BadgeDelta>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default DonutChartLegend;
