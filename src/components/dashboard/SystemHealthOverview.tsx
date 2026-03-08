import { systemHealthSummary } from "@/data/mockData";

const statusBg = {
  critical: "bg-severity-critical",
  warning: "bg-severity-warning",
  elevated: "bg-severity-elevated",
  stable: "bg-severity-stable",
};

const statusText = {
  critical: "text-severity-critical",
  warning: "text-severity-warning",
  elevated: "text-severity-elevated",
  stable: "text-severity-stable",
};

const SystemHealthOverview = () => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {systemHealthSummary.map((sys) => (
        <div
          key={sys.system}
          className="flex flex-col items-center gap-2 p-4 rounded border border-border bg-card hover:bg-secondary transition-colors cursor-pointer"
        >
          <span className="text-2xl">{sys.icon}</span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            {sys.system}
          </span>
          {/* Health bar */}
          <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${statusBg[sys.status]}`}
              style={{ width: `${sys.health}%` }}
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`text-lg font-mono font-bold ${statusText[sys.status]}`}>
              {sys.health}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase">
              {sys.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SystemHealthOverview;
