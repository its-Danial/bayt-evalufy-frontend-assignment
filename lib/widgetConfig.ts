const widgetConfig = [
  {
    type: "Chart-Pie",
    order: 1,
    position: { x: 0, y: 0 },
    size: { width: 2, height: 2 },
    dataSource: "",
    priority: 2,
    title: "Pie Chart Widget",
  },
  {
    type: "Numeric",
    order: 2,
    position: { x: 2, y: 0 },
    size: { width: 1, height: 1 },
    dataSource: "",
    priority: 1,
    title: "Numeric Widget",
  },
  {
    type: "Chart-Line",
    order: 3,
    position: { x: 0, y: 2 },
    size: { width: 3, height: 2 },
    dataSource: "",
    priority: 3,
    title: "Line Chart Widget",
  },
];

export default widgetConfig;
