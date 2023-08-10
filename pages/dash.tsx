import Widget from "@/components/widget";
import widgetConfig from "@/lib/widgetConfig";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

const Dash: NextPage = (props) => {
  const [widgetData, setWidgetData] = useState<{ id: number; data: any[] }[]>();
  // Sort widgetConfig based on priority
  const prioritySortedWidgets = [...widgetConfig].sort((a, b) => a.priority - b.priority);
  const [sortedWidgets, setSortedWidgets] = useState(prioritySortedWidgets);

  const widgetRef = useRef(null);

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
    if (widgetRef.current) {
      // Sort widgetConfig based on order
      setTimeout(() => {
        const orderSortedWidget = [...widgetConfig].sort((a, b) => a.order - b.order);
        setSortedWidgets(orderSortedWidget);
      }, 1000);
    }
  }, [widgetRef]);

  return (
    <div
      ref={widgetRef}
      className="grid gap-5 px-12 py-8"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
    >
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
  );
};
export default Dash;
