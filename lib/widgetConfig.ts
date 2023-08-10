const widgetConfig = [
  {
    id: 1,
    type: "Table",
    order: 3,
    position: { x: 3, y: 3 },
    size: { width: 3, height: 3 },
    dataSource: "https://run.mocky.io/v3/f2230af7-78e2-4242-8643-77fd72fc1ae4",
    priority: 1,
    title: "Table Widget",
  },
  {
    id: 2,
    type: "Numeric",
    order: 1,
    position: { x: 0, y: 0 },
    size: { width: 5, height: 1 },
    dataSource: "https://run.mocky.io/v3/bc3610e5-0bc6-45d2-a182-374e09b1ab63",
    priority: 3,
    title: "Numeric Widget",
  },

  {
    id: 3,
    type: "Chart-Line",
    order: 2,
    position: { x: 2, y: 2 },
    size: { width: 4, height: 2 },
    dataSource: "https://run.mocky.io/v3/89148dad-2cdd-48ce-9c61-42d1e15cfda0",
    priority: 2,
    title: "Line Chart Widget",
  },
];

export default widgetConfig;
