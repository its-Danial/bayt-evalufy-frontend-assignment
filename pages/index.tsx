import KpiCardGrid from "@/components/layouts/KpiCardGrid";
import GreetingsAndSearch from "@/components/section/GreetingsAndSearch";
import AreaChartView from "@/components/widget/charts/AreaChart";
import TicketsTable from "@/components/widget/tables/TicketsTable";
import { Card } from "@tremor/react";

export default function DashboardHome() {
  return (
    <main className="px-12 py-8">
      <GreetingsAndSearch />
      <section className="mt-6">
        <KpiCardGrid />
        <div className="mt-6">
          <Card>
            <AreaChartView />
          </Card>
        </div>
        <div className="mt-6">
          <Card>
            <TicketsTable />
          </Card>
        </div>
      </section>
    </main>
  );
}
