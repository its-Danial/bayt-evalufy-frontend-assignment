import GreetingsAndSearch from "@/components/section/GreetingsAndSearch";
import Widget from "@/components/widget";
import widgetConfig from "@/lib/widgetConfig";
import axios from "axios";
import Head from "next/head";

import { useEffect, useRef, useState } from "react";
export default function DashboardHome() {
  const [widgetData, setWidgetData] = useState<{ id: number; data: any[] }[]>();
  // Sort widgetConfig based on priority
  const prioritySortedWidgets = [...widgetConfig].sort((a, b) => a.priority - b.priority);
  const [sortedWidgets, setSortedWidgets] = useState(prioritySortedWidgets);

  const widgetContainerRef = useRef(null);

  // fetch data based on priority
  useEffect(() => {
    async function fetchData() {
      const data = await Promise.all(
        prioritySortedWidgets.map(async (widget) => {
          const response = await axios.get(widget.dataSource);
          return { id: widget.id, data: response.data };
          // return response.data;
        })
      );
      setWidgetData(data);
    }
    fetchData();
  }, [prioritySortedWidgets]);

  useEffect(() => {
    if (widgetContainerRef.current) {
      // Sort widgetConfig based on order after fetch and render
      // I added setTimeout so that the widgets order can be seen changing otherwise it happens to fast to demonstrate.
      setTimeout(() => {
        const orderSortedWidget = [...widgetConfig].sort((a, b) => a.order - b.order);
        setSortedWidgets(orderSortedWidget);
      }, 1500);
    }
  }, [widgetContainerRef]);

  return (
    <>
      <Head>
        <title>Dynamic Dashboard Builder</title>
      </Head>
      <main className="px-12 py-8" ref={widgetContainerRef}>
        <GreetingsAndSearch />
        <div className="grid gap-5 mt-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
          {widgetData &&
            sortedWidgets.map((widget, index) => (
              <Widget
                key={index}
                type={widget.type}
                title={widget.title}
                data={widgetData.find((item) => item.id === widget.id)!}
                gridPosition={{
                  gridColumn: `span ${widget.position.y}`,
                  gridRow: `span ${widget.position.x}`,
                  width: widget.size.width,
                  height: widget.size.height,
                }}
              />
            ))}
        </div>
      </main>
    </>
  );
}
