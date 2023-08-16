import GreetingsAndSearch from "@/components/section/GreetingsAndSearch";
import Widget from "@/components/widget";
import widgetConfig from "@/lib/widgetConfig";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function DashboardHome() {
  const orderSortedWidgets = [...widgetConfig].sort((a, b) => a.order - b.order); // Sort widgetConfig based on order
  // Reshape the widgets
  const reshapedWidgetConfig = orderSortedWidgets.map((widgetConfig) => ({
    widgetConfig,
    data: null,
    isLoading: true,
  }));

  const [widgets, setWidgets] = useState(reshapedWidgetConfig); // widgets with reshaped data as a state

  // fetch data based on priority and then update widget state
  useEffect(() => {
    // Sort widgets based on priority in widgetConfig for fetching and rending
    const prioritySortedReshapedWidgetConfig = reshapedWidgetConfig
      .slice()
      .sort((a, b) => a.widgetConfig.priority - b.widgetConfig.priority);

    async function fetchData() {
      for (const widget of prioritySortedReshapedWidgetConfig) {
        try {
          const response = await axios.get(widget.widgetConfig.dataSource);
          // Update the widgets state to include the fetched data and mark isLoading as false
          setTimeout(() => {
            // added a timeout so that the priority fetch and rending effect can be observed
            setWidgets((prevState) =>
              prevState.map((prevWidget) =>
                prevWidget.widgetConfig.id === widget.widgetConfig.id
                  ? {
                      ...prevWidget,
                      data: response.data, // Update with the fetched data
                      isLoading: false, // Set isLoading to false
                    }
                  : prevWidget
              )
            );
          }, 2500);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }
    fetchData();
  }, [reshapedWidgetConfig]);

  return (
    <>
      <Head>
        <title>Dynamic Dashboard Builder</title>
      </Head>
      <main className="px-12 py-8">
        <GreetingsAndSearch />
        <div className="grid gap-5 mt-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
          {widgets.map((widget, index) => (
            <Widget
              key={index}
              type={widget.widgetConfig.type}
              title={widget.widgetConfig.title}
              data={widget.data!}
              gridPosition={{
                gridColumn: `span ${widget.widgetConfig.position.y}`,
                gridRow: `span ${widget.widgetConfig.position.x}`,
                width: widget.widgetConfig.size.width,
                height: widget.widgetConfig.size.height,
              }}
              isLoading={widget.isLoading}
            />
          ))}
        </div>
      </main>
    </>
  );
}
