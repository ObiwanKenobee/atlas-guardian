import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { energyLoadData, energyMetrics } from "@/data/mockData";
import MetricBadge from "./MetricBadge";

const EnergyPanel = () => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-system-energy" />
          <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
            Energy Grid
          </h3>
        </div>
        <span className="text-[10px] font-mono text-severity-warning px-2 py-0.5 rounded bg-secondary">
          ELEVATED LOAD
        </span>
      </div>

      {/* Load chart */}
      <div className="h-36">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={energyLoadData}>
            <defs>
              <linearGradient id="energyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(45, 93%, 47%)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="hsl(45, 93%, 47%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "hsl(215, 15%, 50%)", fontFamily: "JetBrains Mono" }}
            />
            <YAxis
              domain={[0, 110]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "hsl(215, 15%, 50%)", fontFamily: "JetBrains Mono" }}
            />
            <ReferenceLine y={85} stroke="hsl(0, 72%, 51%)" strokeDasharray="3 3" strokeOpacity={0.6} />
            <Area
              type="monotone"
              dataKey="load"
              stroke="hsl(45, 93%, 47%)"
              strokeWidth={2}
              fill="url(#energyGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Insight */}
      <p className="text-[11px] font-mono text-severity-warning leading-relaxed px-2 py-1.5 rounded bg-secondary border border-border">
        Western corridor substations operating above 89% capacity; heat-wave-adjusted overload risk rises sharply in next 18 hours.
      </p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-2">
        {energyMetrics.map((m) => (
          <MetricBadge key={m.label} label={m.label} value={m.value} severity={m.severity} />
        ))}
      </div>
    </div>
  );
};

export default EnergyPanel;
