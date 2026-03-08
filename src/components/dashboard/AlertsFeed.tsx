import { alertsData, type AlertSeverity } from "@/data/mockData";
import { Shield, ChevronRight } from "lucide-react";

const severityBorder = {
  critical: "border-l-severity-critical",
  warning: "border-l-severity-warning",
  elevated: "border-l-severity-elevated",
  info: "border-l-primary",
};

const severityLabel: Record<AlertSeverity, string> = {
  critical: "CRITICAL",
  warning: "WARNING",
  elevated: "ELEVATED",
  info: "INFO",
};

const severityLabelColor: Record<AlertSeverity, string> = {
  critical: "text-severity-critical bg-severity-critical/10",
  warning: "text-severity-warning bg-severity-warning/10",
  elevated: "text-severity-elevated bg-severity-elevated/10",
  info: "text-primary bg-primary/10",
};

const AlertsFeed = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
            Alerts & Anomalies
          </h3>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground">
          {alertsData.length} active
        </span>
      </div>

      <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-1">
        {alertsData.map((alert) => (
          <div
            key={alert.id}
            className={`flex flex-col gap-1.5 p-3 rounded border border-border bg-card border-l-2 ${severityBorder[alert.severity]} hover:bg-secondary/50 transition-colors cursor-pointer`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${severityLabelColor[alert.severity]}`}>
                {severityLabel[alert.severity]}
              </span>
              <span className="text-[9px] font-mono text-muted-foreground">{alert.time}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-muted-foreground">{alert.system}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-[10px] font-mono text-foreground">{alert.location}</span>
            </div>

            <p className="text-xs font-mono font-medium text-foreground">{alert.title}</p>

            <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">
              {alert.cause}
            </p>

            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-3 text-[9px] font-mono text-muted-foreground">
                <span>Conf: {alert.confidence}%</span>
                {alert.population !== "—" && <span>Pop: {alert.population}</span>}
              </div>
              <ChevronRight className="w-3 h-3 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsFeed;
