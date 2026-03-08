import { TrendingUp, TrendingDown } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string;
  unit: string;
  trend: number;
  severity: "critical" | "warning" | "elevated" | "stable";
}

const severityStyles = {
  critical: "border-severity-critical glow-critical",
  warning: "border-severity-warning glow-warning",
  elevated: "border-severity-warning",
  stable: "border-severity-stable",
};

const severityTextStyles = {
  critical: "text-severity-critical",
  warning: "text-severity-warning",
  elevated: "text-severity-elevated",
  stable: "text-severity-stable",
};

const KpiCard = ({ label, value, unit, trend, severity }: KpiCardProps) => {
  const isNegativeTrend = trend > 0 && severity !== "stable";

  return (
    <div className={`flex flex-col gap-1 px-4 py-3 rounded border bg-card ${severityStyles[severity]}`}>
      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="flex items-baseline gap-1.5">
        <span className={`text-2xl font-mono font-bold ${severityTextStyles[severity]}`}>
          {value}
        </span>
        <span className="text-xs font-mono text-muted-foreground">{unit}</span>
      </div>
      <div className={`flex items-center gap-1 text-[10px] font-mono ${isNegativeTrend ? "text-severity-critical" : "text-severity-stable"}`}>
        {isNegativeTrend ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        <span>{trend > 0 ? "+" : ""}{trend}{typeof trend === "number" && !String(trend).includes(".") ? "" : ""}</span>
      </div>
    </div>
  );
};

export default KpiCard;
