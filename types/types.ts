import { DeltaType } from "@tremor/react";
import { type } from "os";

export type Kpi = {
  title: string;
  metric: string;
  progress: number;
  target: string;
  delta: string;
  deltaType: DeltaType;
};

export type DailyPerformance = {
  date: string;
  Sales: number;
  Profit: number;
  Customers: number;
};

export type SalesPerson = {
  name: string;
  leads: number;
  sales: string;
  quota: string;
  variance: string;
  region: string;
  status: string;
};

export type CityData = {
  name: string;
  region: string;
  sales: number;
  delta: string;
  deltaType: DeltaType;
};

export type StockData = {
  name: string;
  value: number;
  performance: string;
  deltaType: DeltaType;
};

export type DonutChartLegendDataType = {
  regions: Region[];
  cities: City[];
};

export interface City {
  name: string;
  region: string;
  sales: number;
  delta: string;
  deltaType: string;
}

export interface Region {
  key: string;
  name: string;
}
