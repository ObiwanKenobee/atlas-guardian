import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Cell } from "recharts";
import { waterPressureData, waterMetrics } from "@/data/mockData";
import MetricBadge from "./MetricBadge";

const getBarColor = (pressure: number) => {
  if (pressure < 60) return "hsl(0, 72%, 51%)";
  if (pressure < 80) return "hsl(38, 92%, 50%)";
  return "hsl(199, 89%, 48%)";
};

const WaterPanel = () => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-system-water" />
          <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
            Water Systems
          </h3>
        </div>
        <span className="text-[10px] font-mono text-severity-critical px-2 py-0.5 rounded bg-secondary">
          LEAK ALERT
        </span>
      </div>

      {/* Pressure chart */}
      <div className="h-36">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={waterPressureData}>
            <XAxis
              dataKey="district"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "hsl(215, 15%, 50%)", fontFamily: "JetBrains Mono" }}
            />
            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "hsl(215, 15%, 50%)", fontFamily: "JetBrains Mono" }}
            />
            <ReferenceLine y={95} stroke="hsl(199, 89%, 48%)" strokeDasharray="3 3" strokeOpacity={0.4} />
            <Bar dataKey="pressure" radius={[2, 2, 0, 0]}>
              {waterPressureData.map((entry, index) => (
                <Cell key={index} fill={getBarColor(entry.pressure)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-[11px] font-mono text-severity-critical leading-relaxed px-2 py-1.5 rounded bg-secondary border border-border">
        Leak probability increased across southern trunk line due to pressure instability and declining night-flow consistency.
      </p>

      <div className="flex flex-wrap gap-2">
        {waterMetrics.map((m) => (
          <MetricBadge key={m.label} label={m.label} value={m.value} severity={m.severity} />
        ))}
      </div>
    </div>
  );
};

export default WaterPanel;
