import { transportDelayData, transportMetrics } from "@/data/mockData";
import MetricBadge from "./MetricBadge";

const statusColor = {
  critical: "bg-severity-critical",
  warning: "bg-severity-warning",
  elevated: "bg-severity-elevated",
  stable: "bg-severity-stable",
};

const TransportPanel = () => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-system-transport" />
          <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
            Transport Network
          </h3>
        </div>
        <span className="text-[10px] font-mono text-severity-warning px-2 py-0.5 rounded bg-secondary">
          PORT DELAYS
        </span>
      </div>

      {/* Corridor table */}
      <div className="overflow-hidden rounded border border-border">
        <table className="w-full text-xs font-mono">
          <thead>
            <tr className="bg-secondary text-muted-foreground">
              <th className="text-left px-3 py-1.5 font-medium">Corridor</th>
              <th className="text-right px-3 py-1.5 font-medium">Delay</th>
              <th className="text-right px-3 py-1.5 font-medium">Reliability</th>
              <th className="text-center px-3 py-1.5 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {transportDelayData.map((row) => (
              <tr key={row.corridor} className="border-t border-border hover:bg-secondary/50 transition-colors">
                <td className="px-3 py-1.5 text-foreground">{row.corridor}</td>
                <td className="px-3 py-1.5 text-right text-foreground">{row.delay} min</td>
                <td className="px-3 py-1.5 text-right text-foreground">{row.reliability}%</td>
                <td className="px-3 py-1.5 text-center">
                  <span className={`inline-block w-2 h-2 rounded-full ${statusColor[row.status]}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[11px] font-mono text-severity-warning leading-relaxed px-2 py-1.5 rounded bg-secondary border border-border">
        Port unloading delays propagating into inland trucking corridors; food distribution lead times may rise by 14–22%.
      </p>

      <div className="flex flex-wrap gap-2">
        {transportMetrics.map((m) => (
          <MetricBadge key={m.label} label={m.label} value={m.value} severity={m.severity} />
        ))}
      </div>
    </div>
  );
};

export default TransportPanel;
