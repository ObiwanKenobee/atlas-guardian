// Mock data for Atlas Sanctum Infrastructure Dashboard

export const kpiData = [
  { label: "Infrastructure Resilience", value: "61", unit: "/100", trend: -11, severity: "warning" as const },
  { label: "Critical Assets", value: "23", unit: "assets", trend: 5, severity: "critical" as const },
  { label: "Cascade Risks", value: "7", unit: "active", trend: 2, severity: "critical" as const },
  { label: "Population Exposure", value: "2.4M", unit: "people", trend: 18, severity: "warning" as const },
  { label: "Service Downtime", value: "4.2", unit: "hrs avg", trend: 1.3, severity: "elevated" as const },
  { label: "Repair Backlog", value: "142", unit: "items", trend: 12, severity: "warning" as const },
  { label: "Supply Delay Index", value: "1.8x", unit: "baseline", trend: 0.3, severity: "elevated" as const },
];

export const energyLoadData = [
  { time: "00:00", load: 62, capacity: 100 },
  { time: "02:00", load: 55, capacity: 100 },
  { time: "04:00", load: 51, capacity: 100 },
  { time: "06:00", load: 68, capacity: 100 },
  { time: "08:00", load: 78, capacity: 100 },
  { time: "10:00", load: 85, capacity: 100 },
  { time: "12:00", load: 91, capacity: 100 },
  { time: "14:00", load: 94, capacity: 100 },
  { time: "16:00", load: 89, capacity: 100 },
  { time: "18:00", load: 82, capacity: 100 },
  { time: "20:00", load: 75, capacity: 100 },
  { time: "22:00", load: 67, capacity: 100 },
];

export const waterPressureData = [
  { district: "North", pressure: 92, normal: 95 },
  { district: "South", pressure: 68, normal: 95 },
  { district: "East", pressure: 88, normal: 95 },
  { district: "West", pressure: 45, normal: 95 },
  { district: "Central", pressure: 91, normal: 95 },
  { district: "Harbor", pressure: 78, normal: 95 },
];

export const transportDelayData = [
  { corridor: "Highway A1", delay: 34, reliability: 66, status: "warning" as const },
  { corridor: "Rail Line 3", delay: 12, reliability: 88, status: "stable" as const },
  { corridor: "Port Access", delay: 67, reliability: 33, status: "critical" as const },
  { corridor: "Airport Link", delay: 8, reliability: 92, status: "stable" as const },
  { corridor: "Bridge M4", delay: 45, reliability: 55, status: "warning" as const },
  { corridor: "Metro Line 1", delay: 22, reliability: 78, status: "elevated" as const },
];

export const telecomUptimeData = [
  { region: "North", uptime: 99.2, latency: 12 },
  { region: "South", uptime: 94.1, latency: 45 },
  { region: "East", uptime: 98.8, latency: 18 },
  { region: "West", uptime: 87.3, latency: 89 },
  { region: "Central", uptime: 99.7, latency: 8 },
  { region: "Harbor", uptime: 96.5, latency: 32 },
];

export const foodSupplyData = [
  { category: "Grains", coverage: 14, risk: "stable" as const },
  { category: "Perishables", coverage: 3, risk: "critical" as const },
  { category: "Dairy", coverage: 5, risk: "warning" as const },
  { category: "Protein", coverage: 8, risk: "elevated" as const },
  { category: "Produce", coverage: 4, risk: "warning" as const },
  { category: "Essentials", coverage: 21, risk: "stable" as const },
];

export const cascadeNodes = [
  { id: "power", label: "Power Grid", status: "warning" as const, x: 50, y: 20 },
  { id: "water", label: "Water Systems", status: "critical" as const, x: 20, y: 45 },
  { id: "telecom", label: "Telecom", status: "warning" as const, x: 80, y: 45 },
  { id: "transport", label: "Transport", status: "stable" as const, x: 35, y: 70 },
  { id: "food", label: "Food Supply", status: "elevated" as const, x: 65, y: 70 },
  { id: "finance", label: "Finance", status: "stable" as const, x: 50, y: 90 },
];

export const cascadeEdges = [
  { from: "power", to: "water", stress: 0.8 },
  { from: "power", to: "telecom", stress: 0.6 },
  { from: "power", to: "transport", stress: 0.3 },
  { from: "water", to: "food", stress: 0.7 },
  { from: "telecom", to: "finance", stress: 0.5 },
  { from: "transport", to: "food", stress: 0.6 },
  { from: "telecom", to: "transport", stress: 0.2 },
  { from: "food", to: "finance", stress: 0.4 },
];

export type AlertSeverity = "critical" | "warning" | "elevated" | "info";

export interface AlertItem {
  id: string;
  severity: AlertSeverity;
  system: string;
  location: string;
  title: string;
  confidence: number;
  cause: string;
  population: string;
  action: string;
  time: string;
}

export const alertsData: AlertItem[] = [
  {
    id: "a1",
    severity: "critical",
    system: "Water",
    location: "South Trunk Line",
    title: "Leak probability: 82%",
    confidence: 87,
    cause: "Abnormal pressure drop + vibration anomaly",
    population: "230,000",
    action: "Isolate segment, dispatch field verification",
    time: "2 min ago",
  },
  {
    id: "a2",
    severity: "critical",
    system: "Energy",
    location: "Western Corridor",
    title: "Substation overload imminent",
    confidence: 91,
    cause: "Load exceeding 89% capacity, heat-wave adjusted",
    population: "420,000",
    action: "Activate backup transformer cluster",
    time: "8 min ago",
  },
  {
    id: "a3",
    severity: "warning",
    system: "Transport",
    location: "Port Access Corridor",
    title: "Freight throughput declining",
    confidence: 74,
    cause: "Port unloading delays propagating inland",
    population: "—",
    action: "Accelerate port unloading shift rotation",
    time: "14 min ago",
  },
  {
    id: "a4",
    severity: "warning",
    system: "Telecom",
    location: "Western Region",
    title: "Backbone instability detected",
    confidence: 68,
    cause: "Two regional routes showing latency spikes",
    population: "180,000",
    action: "Reroute traffic, deploy mobile backup",
    time: "22 min ago",
  },
  {
    id: "a5",
    severity: "elevated",
    system: "Food",
    location: "Urban Distribution",
    title: "Cold-chain reliability declining",
    confidence: 72,
    cause: "Port backlog + refrigeration unit failures",
    population: "1.2M",
    action: "Release reserve inventory, reroute supply",
    time: "31 min ago",
  },
  {
    id: "a6",
    severity: "info",
    system: "Water",
    location: "North District",
    title: "Service restored",
    confidence: 99,
    cause: "Valve replacement completed",
    population: "—",
    action: "Monitor for 24h",
    time: "45 min ago",
  },
];

export interface Intervention {
  id: string;
  action: string;
  system: string;
  riskReduction: number;
  affectedPeople: string;
  cost: string;
  urgency: string;
  urgencyHours: number;
}

export const interventionsData: Intervention[] = [
  {
    id: "i1",
    action: "Activate backup transformer cluster — Western Corridor",
    system: "Energy",
    riskReduction: 34,
    affectedPeople: "420,000",
    cost: "$180K",
    urgency: "Critical",
    urgencyHours: 4,
  },
  {
    id: "i2",
    action: "Isolate South Trunk Line leak zone",
    system: "Water",
    riskReduction: 28,
    affectedPeople: "230,000",
    cost: "$45K",
    urgency: "Critical",
    urgencyHours: 2,
  },
  {
    id: "i3",
    action: "Reroute traffic from overloaded corridor",
    system: "Transport",
    riskReduction: 15,
    affectedPeople: "85,000",
    cost: "$12K",
    urgency: "High",
    urgencyHours: 8,
  },
  {
    id: "i4",
    action: "Deploy mobile connectivity backup — West",
    system: "Telecom",
    riskReduction: 19,
    affectedPeople: "180,000",
    cost: "$95K",
    urgency: "High",
    urgencyHours: 6,
  },
  {
    id: "i5",
    action: "Release food reserve inventory to urban centers",
    system: "Food",
    riskReduction: 12,
    affectedPeople: "1.2M",
    cost: "$320K",
    urgency: "Elevated",
    urgencyHours: 18,
  },
  {
    id: "i6",
    action: "Accelerate port unloading shift rotation",
    system: "Transport",
    riskReduction: 8,
    affectedPeople: "—",
    cost: "$28K",
    urgency: "Elevated",
    urgencyHours: 12,
  },
];

export const systemHealthSummary = [
  { system: "Energy", health: 61, status: "warning" as const, icon: "⚡" },
  { system: "Water", health: 42, status: "critical" as const, icon: "💧" },
  { system: "Transport", health: 71, status: "elevated" as const, icon: "🚛" },
  { system: "Telecom", health: 78, status: "stable" as const, icon: "📡" },
  { system: "Food Supply", health: 55, status: "warning" as const, icon: "🌾" },
];

export const energyMetrics = [
  { label: "Grid Load", value: "89%", severity: "warning" as const },
  { label: "Reserve Margin", value: "11%", severity: "critical" as const },
  { label: "Outage Duration", value: "2.4 hrs", severity: "elevated" as const },
  { label: "Overload Prob.", value: "67%", severity: "critical" as const },
  { label: "Renewable Share", value: "34%", severity: "stable" as const },
];

export const waterMetrics = [
  { label: "Leak Risk Score", value: "82", severity: "critical" as const },
  { label: "Water Loss", value: "28%", severity: "warning" as const },
  { label: "Treatment Output", value: "91%", severity: "stable" as const },
  { label: "Reservoir Cap.", value: "64%", severity: "elevated" as const },
  { label: "Pop. at Risk", value: "230K", severity: "critical" as const },
];

export const transportMetrics = [
  { label: "Avg Delay", value: "34 min", severity: "warning" as const },
  { label: "Freight Thru.", value: "72%", severity: "elevated" as const },
  { label: "Road Failure", value: "12%", severity: "stable" as const },
  { label: "Bridge Stress", value: "0.78", severity: "warning" as const },
  { label: "Delivery Rel.", value: "68%", severity: "elevated" as const },
];

export const telecomMetrics = [
  { label: "Uptime", value: "96.1%", severity: "stable" as const },
  { label: "Avg Latency", value: "34ms", severity: "elevated" as const },
  { label: "Packet Loss", value: "0.8%", severity: "stable" as const },
  { label: "BW Utilization", value: "71%", severity: "elevated" as const },
  { label: "Impact Pop.", value: "180K", severity: "warning" as const },
];

export const foodMetrics = [
  { label: "Days Coverage", value: "5.2", severity: "warning" as const },
  { label: "Delay Index", value: "1.8x", severity: "elevated" as const },
  { label: "Spoilage Risk", value: "23%", severity: "warning" as const },
  { label: "Bottleneck", value: "High", severity: "critical" as const },
  { label: "Market Stress", value: "0.72", severity: "warning" as const },
];
