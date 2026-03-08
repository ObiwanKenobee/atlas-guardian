import { interventionsData } from "@/data/mockData";
import { ArrowDown, Clock, Users, DollarSign, Shield } from "lucide-react";

const urgencyColor: Record<string, string> = {
  Critical: "text-severity-critical bg-severity-critical/10",
  High: "text-severity-warning bg-severity-warning/10",
  Elevated: "text-severity-elevated bg-severity-elevated/10",
};

const systemDot: Record<string, string> = {
  Energy: "bg-system-energy",
  Water: "bg-system-water",
  Transport: "bg-system-transport",
  Telecom: "bg-system-telecom",
  Food: "bg-system-food",
};

const InterventionPlanner = () => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded border border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
            Intervention Planner
          </h3>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground">
          Ranked by risk reduction
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {interventionsData.map((item, idx) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 p-3 rounded border border-border bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <span className="text-xs font-mono text-muted-foreground font-bold mt-0.5">
                #{idx + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${systemDot[item.system]}`} />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">
                    {item.system}
                  </span>
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ml-auto ${urgencyColor[item.urgency]}`}>
                    {item.urgency}
                  </span>
                </div>
                <p className="text-xs font-mono text-foreground leading-relaxed">
                  {item.action}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 ml-7 text-[10px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <ArrowDown className="w-3 h-3 text-severity-stable" />
                <span className="text-severity-stable font-bold">-{item.riskReduction}%</span> risk
              </span>
              {item.affectedPeople !== "—" && (
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {item.affectedPeople}
                </span>
              )}
              <span className="flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                {item.cost}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.urgencyHours}h window
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterventionPlanner;
