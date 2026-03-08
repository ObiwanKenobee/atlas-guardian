import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";
import { telecomUptimeData, telecomMetrics } from "@/data/mockData";
import MetricBadge from "./MetricBadge";

const getUptimeColor = (uptime: number) => {
  if (uptime < 90) return "hsl(0, 72%, 51%)";
  if (uptime < 96) return "hsl(38, 92%, 50%)";
  return "hsl(160, 84%, 39%)";
};

const TelecomPanel = () => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-system-telecom" />
          <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
            Telecom / Internet
          </h3>
        </div>
        <span className="text-[10px] font-mono text-severity-elevated px-2 py-0.5 rounded bg-secondary">
          ROUTE INSTABILITY
        </span>
      </div>

      <div className="h-36">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={telecomUptimeData}>
            <XAxis
              dataKey="region"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "hsl(215, 15%, 50%)", fontFamily: "JetBrains Mono" }}
            />
            <YAxis
              domain={[80, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "hsl(215, 15%, 50%)", fontFamily: "JetBrains Mono" }}
            />
            <Bar dataKey="uptime" radius={[2, 2, 0, 0]}>
              {telecomUptimeData.map((entry, index) => (
                <Cell key={index} fill={getUptimeColor(entry.uptime)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-[11px] font-mono text-severity-elevated leading-relaxed px-2 py-1.5 rounded bg-secondary border border-border">
        Backbone instability in two regional routes increases risk of digital service disruption for payment systems and emergency communications.
      </p>

      <div className="flex flex-wrap gap-2">
        {telecomMetrics.map((m) => (
          <MetricBadge key={m.label} label={m.label} value={m.value} severity={m.severity} />
        ))}
      </div>
    </div>
  );
};

export default TelecomPanel;
