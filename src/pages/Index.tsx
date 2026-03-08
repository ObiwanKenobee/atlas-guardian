import GlobalCommandBar from "@/components/dashboard/GlobalCommandBar";
import KpiCard from "@/components/dashboard/KpiCard";
import SystemHealthOverview from "@/components/dashboard/SystemHealthOverview";
import EnergyPanel from "@/components/dashboard/EnergyPanel";
import WaterPanel from "@/components/dashboard/WaterPanel";
import TransportPanel from "@/components/dashboard/TransportPanel";
import TelecomPanel from "@/components/dashboard/TelecomPanel";
import FoodSupplyPanel from "@/components/dashboard/FoodSupplyPanel";
import CascadeRiskPanel from "@/components/dashboard/CascadeRiskPanel";
import AlertsFeed from "@/components/dashboard/AlertsFeed";
import InterventionPlanner from "@/components/dashboard/InterventionPlanner";
import { kpiData } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Command Bar */}
      <GlobalCommandBar />

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Primary content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 flex flex-col gap-4">
            {/* KPI Strip */}
            <div className="grid grid-cols-7 gap-2">
              {kpiData.map((kpi) => (
                <KpiCard
                  key={kpi.label}
                  label={kpi.label}
                  value={kpi.value}
                  unit={kpi.unit}
                  trend={kpi.trend}
                  severity={kpi.severity as "critical" | "warning" | "elevated" | "stable"}
                />
              ))}
            </div>

            {/* System Health Overview */}
            <SystemHealthOverview />

            {/* Infrastructure Panels - 2 columns */}
            <div className="grid grid-cols-2 gap-4">
              <EnergyPanel />
              <WaterPanel />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <TransportPanel />
              <TelecomPanel />
              <FoodSupplyPanel />
            </div>

            {/* Cascade Risk + Intervention */}
            <div className="grid grid-cols-2 gap-4">
              <CascadeRiskPanel />
              <InterventionPlanner />
            </div>
          </div>
        </div>

        {/* Alerts Rail - Right Side */}
        <div className="w-80 border-l border-border bg-surface-overlay p-4 overflow-y-auto">
          <AlertsFeed />
        </div>
      </div>
    </div>
  );
};

export default Index;
