interface MetricBadgeProps {
  label: string;
  value: string;
  severity: "critical" | "warning" | "elevated" | "stable";
}

const severityStyles = {
  critical: "text-severity-critical border-severity-critical",
  warning: "text-severity-warning border-severity-warning",
  elevated: "text-severity-elevated border-severity-warning",
  stable: "text-severity-stable border-severity-stable",
};

const MetricBadge = ({ label, value, severity }: MetricBadgeProps) => (
  <div className={`flex items-center gap-1.5 px-2 py-1 rounded border text-[10px] font-mono bg-card ${severityStyles[severity]}`}>
    <span className="text-muted-foreground">{label}</span>
    <span className="font-bold">{value}</span>
  </div>
);

export default MetricBadge;
