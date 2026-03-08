import { foodSupplyData, foodMetrics } from "@/data/mockData";
import MetricBadge from "./MetricBadge";

const riskBg = {
  critical: "bg-severity-critical",
  warning: "bg-severity-warning",
  elevated: "bg-severity-elevated",
  stable: "bg-severity-stable",
};

const FoodSupplyPanel = () => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-system-food" />
          <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
            Food Supply Chain
          </h3>
        </div>
        <span className="text-[10px] font-mono text-severity-warning px-2 py-0.5 rounded bg-secondary">
          COLD-CHAIN RISK
        </span>
      </div>

      {/* Days of coverage bars */}
      <div className="flex flex-col gap-2">
        {foodSupplyData.map((item) => (
          <div key={item.category} className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-muted-foreground w-20 text-right">
              {item.category}
            </span>
            <div className="flex-1 h-3 rounded bg-secondary overflow-hidden">
              <div
                className={`h-full rounded transition-all ${riskBg[item.risk]}`}
                style={{ width: `${Math.min((item.coverage / 21) * 100, 100)}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-foreground w-10">
              {item.coverage}d
            </span>
          </div>
        ))}
      </div>

      <p className="text-[11px] font-mono text-severity-warning leading-relaxed px-2 py-1.5 rounded bg-secondary border border-border">
        Cold-chain instability and port backlog increasing urban perishables shortage probability in next 5 days.
      </p>

      <div className="flex flex-wrap gap-2">
        {foodMetrics.map((m) => (
          <MetricBadge key={m.label} label={m.label} value={m.value} severity={m.severity} />
        ))}
      </div>
    </div>
  );
};

export default FoodSupplyPanel;
