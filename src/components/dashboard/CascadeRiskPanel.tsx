import { cascadeNodes, cascadeEdges } from "@/data/mockData";

const statusColor = {
  critical: "#ef4444",
  warning: "#f59e0b",
  elevated: "#f97316",
  stable: "#22c55e",
};

const statusGlow = {
  critical: "0 0 12px rgba(239,68,68,0.5)",
  warning: "0 0 8px rgba(245,158,11,0.3)",
  elevated: "0 0 6px rgba(249,115,22,0.3)",
  stable: "0 0 6px rgba(34,197,94,0.2)",
};

const CascadeRiskPanel = () => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded border border-border bg-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
          Cascade Risk Engine
        </h3>
        <span className="text-[10px] font-mono text-severity-critical px-2 py-0.5 rounded bg-secondary">
          FRAGILITY INDEX: 0.72
        </span>
      </div>

      {/* Dependency graph */}
      <div className="relative h-64 rounded bg-surface-sunken border border-border overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Edges */}
          {cascadeEdges.map((edge) => {
            const from = cascadeNodes.find((n) => n.id === edge.from)!;
            const to = cascadeNodes.find((n) => n.id === edge.to)!;
            const opacity = 0.2 + edge.stress * 0.6;
            const color = edge.stress > 0.6 ? "#ef4444" : edge.stress > 0.3 ? "#f59e0b" : "#3b82f6";
            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={color}
                strokeWidth={edge.stress * 1.5 + 0.3}
                strokeOpacity={opacity}
                strokeDasharray={edge.stress < 0.4 ? "2 2" : "none"}
              />
            );
          })}

          {/* Nodes */}
          {cascadeNodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={4}
                fill={statusColor[node.status]}
                style={{ filter: `drop-shadow(${statusGlow[node.status]})` }}
              >
                {(node.status === "critical" || node.status === "warning") && (
                  <animate
                    attributeName="r"
                    values="4;5;4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                )}
              </circle>
              <text
                x={node.x}
                y={node.y + 8}
                textAnchor="middle"
                fill="hsl(215, 15%, 50%)"
                fontSize="3"
                fontFamily="JetBrains Mono"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Domino simulation */}
      <div className="flex flex-col gap-2 p-3 rounded bg-secondary border border-border">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          Active Cascade Scenario
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          {["Power Overload", "→ Water Pumping ↓", "→ Telecom Battery ↓", "→ Payment Disruption", "→ Food Logistics ↓"].map(
            (step, i) => (
              <span
                key={i}
                className={`text-[10px] font-mono px-2 py-1 rounded ${
                  i === 0
                    ? "bg-severity-critical/20 text-severity-critical"
                    : i < 3
                    ? "bg-severity-warning/20 text-severity-warning"
                    : "bg-severity-elevated/20 text-severity-elevated"
                }`}
              >
                {step}
              </span>
            )
          )}
        </div>
        <div className="flex gap-4 text-[10px] font-mono text-muted-foreground mt-1">
          <span>Time to escalation: <span className="text-severity-critical font-bold">8 hrs</span></span>
          <span>Population: <span className="text-foreground font-bold">420,000</span></span>
        </div>
      </div>
    </div>
  );
};

export default CascadeRiskPanel;
