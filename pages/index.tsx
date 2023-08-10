import KpiCardGrid from "@/components/layouts/KpiCardGrid";
import GreetingsAndSearch from "@/components/section/GreetingsAndSearch";
import CategoryBar from "@/components/widget/bar/CategoryBar";
import AreaChartView from "@/components/widget/charts/AreaChart";
import TicketsTable from "@/components/widget/tables/TicketsTable";
import { Card, Col, Grid } from "@tremor/react";

export default function DashboardHome() {
  return (
    <main className="px-12 py-8">
      <GreetingsAndSearch />
      <Grid numItemsLg={6} className="gap-6 mt-6">
        {/* Main section */}
        <Col numColSpanLg={4} className="space-y-6">
          <KpiCardGrid />
          <AreaChartView />
          <TicketsTable />
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2} className="space-y-6">
          <CategoryBar />
          <Card>
            <div className="h-24" />
          </Card>
          <Card>
            <div className="h-24" />
          </Card>
        </Col>
      </Grid>
    </main>
  );
}
