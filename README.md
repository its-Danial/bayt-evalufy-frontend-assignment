## **Bayt/Evalufy - Front End Assignment**

The Dynamic Dashboard Builder [website](https://bayt-evalufy-frontend-assignment.vercel.app/) is live and hosted on Vercel. It was built using Next.js with React.js and Typescript.

To run the project locally clone it and then enter one of the following:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Assignment # 1

As per the suggestion in the assignment PDF, [mocky](https://designer.mocky.io/) has been used for the API of mock data sources. Although the same data can be found in the data/mockData.ts file.

The configuration file which controls the following attributes is located in lib/widgetConfig.ts

- Widget type
- Widget order
- Widget position in the grid, size/width
- Data source
- Priority; (fetched and rendered first)

The type of widgets provided are the following:

- Bar chart
- Area chart
- Donut Chart (Legend + Dropdown + List)
- Donut Chart (Metric + Toggle + List )
- Kip Card (Numerics)

More widgets can easily be added but for the purpose of this assignment, I tried to use the ones similar to that shown in the sample dashboard.

#### Notes:

```Javascript
{
  id: 6, // widget Id
  type: "DonutChart-Metric", // widget type
  order: 6, // determines the placement order
  position: { x: 1, y: 2 }, // determines the grid span position
  size: { width: "100%", height: "100%" }, // CSS size
  dataSource: "https://run.mocky.io/v3/676e9537-9c3e-405a-8c91-80a62dbecbf7", //API data source
  priority: 2, // data fetching and rendering priority
  title: "DonutChart Metric Widget", // widget title
}
```

### Assignment # 1

The solution for both parts A and B can be found at lib/assignmentTwoSolution.ts

An interface to test the solution is also available live on the [website](https://bayt-evalufy-frontend-assignment.vercel.app/assignment-two).

If you decide to use the interface on the website, you must enter a JSON object that can be properly parsed to a Javascript object to be searched.
