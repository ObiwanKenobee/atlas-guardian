import { Search, MapPin, Clock, Layers, AlertTriangle, Radio } from "lucide-react";
import { useState } from "react";

const GlobalCommandBar = () => {
  const [mode, setMode] = useState<"live" | "simulated">("live");

  return (
    <div className="flex items-center gap-3 px-4 py-2 border-b border-border bg-surface-overlay">
      {/* Logo */}
      <div className="flex items-center gap-2 mr-4">
        <div className="w-2 h-2 rounded-full bg-severity-critical animate-pulse-glow" />
        <span className="font-mono text-sm font-bold tracking-widest text-foreground">
          ATLAS SANCTUM
        </span>
      </div>

      {/* Location */}
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-secondary text-secondary-foreground text-xs font-mono hover:bg-muted transition-colors">
        <MapPin className="w-3 h-3" />
        <span>Nairobi Metro</span>
      </button>

      {/* Time Range */}
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-secondary text-secondary-foreground text-xs font-mono hover:bg-muted transition-colors">
        <Clock className="w-3 h-3" />
        <span>Last 24h</span>
      </button>

      {/* Layer Filter */}
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-secondary text-secondary-foreground text-xs font-mono hover:bg-muted transition-colors">
        <Layers className="w-3 h-3" />
        <span>All Systems</span>
      </button>

      {/* Severity */}
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-secondary text-secondary-foreground text-xs font-mono hover:bg-muted transition-colors">
        <AlertTriangle className="w-3 h-3" />
        <span>All Severities</span>
      </button>

      {/* Live / Simulated Toggle */}
      <div className="flex items-center gap-0.5 rounded bg-secondary p-0.5 ml-auto">
        <button
          onClick={() => setMode("live")}
          className={`flex items-center gap-1 px-3 py-1 rounded text-xs font-mono transition-all ${
            mode === "live"
              ? "bg-severity-critical text-destructive-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Radio className="w-3 h-3" />
          LIVE
        </button>
        <button
          onClick={() => setMode("simulated")}
          className={`px-3 py-1 rounded text-xs font-mono transition-all ${
            mode === "simulated"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          SIM
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-secondary text-muted-foreground">
        <Search className="w-3 h-3" />
        <input
          type="text"
          placeholder="Search asset, corridor, plant..."
          className="bg-transparent text-xs font-mono outline-none w-48 placeholder:text-muted-foreground text-foreground"
        />
      </div>
    </div>
  );
};

export default GlobalCommandBar;
