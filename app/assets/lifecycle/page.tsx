"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  Package,
  AlertTriangle,
  RefreshCw,
  Trash2,
  CheckCircle,
  Clock,
} from "lucide-react"

const lifecycleStats = [
  { label: "Active", value: "2,456", color: "text-emerald-600", bgColor: "bg-emerald-100" },
  { label: "Nearing EOL", value: "89", color: "text-amber-600", bgColor: "bg-amber-100" },
  { label: "Under Maintenance", value: "34", color: "text-blue-600", bgColor: "bg-blue-100" },
  { label: "Retired", value: "268", color: "text-muted-foreground", bgColor: "bg-muted" },
]

const assetTimeline = [
  { id: "AST-005", name: "Storage Array SAN-01", event: "Maintenance Started", timestamp: "1h ago", type: "maintenance" },
  { id: "AST-102", name: "Dell Server R740", event: "Approaching EOL (30 days)", timestamp: "2h ago", type: "warning" },
  { id: "AST-089", name: "Cisco Switch 3850", event: "Retired", timestamp: "1d ago", type: "retired" },
  { id: "AST-201", name: "HP Laptop EliteBook", event: "Warranty Expiring", timestamp: "2d ago", type: "warning" },
  { id: "AST-156", name: "Production Server DB-02", event: "Maintenance Completed", timestamp: "3d ago", type: "completed" },
]

const upcomingActions = [
  { asset: "Network Switch - Floor 2", action: "Scheduled Replacement", date: "Feb 15, 2024" },
  { asset: "Server Cluster A", action: "Warranty Renewal", date: "Feb 20, 2024" },
  { asset: "Laptop Fleet (Q1)", action: "Refresh Cycle", date: "Mar 01, 2024" },
]

export default function AssetLifecyclePage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Asset Lifecycle</h1>
              <p className="text-sm text-muted-foreground">Track asset lifecycle stages and maintenance</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="grid grid-cols-4 gap-4">
            {lifecycleStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Activity className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#0D3133]">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Activity Timeline */}
            <Card className="col-span-2 border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#73847B]" />
                  <CardTitle className="text-base text-[#0D3133]">Lifecycle Activity</CardTitle>
                </div>
                <CardDescription>Recent lifecycle events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assetTimeline.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${
                        item.type === 'maintenance' ? 'bg-blue-100' :
                        item.type === 'warning' ? 'bg-amber-100' :
                        item.type === 'retired' ? 'bg-muted' :
                        'bg-emerald-100'
                      }`}>
                        {item.type === 'maintenance' && <RefreshCw className="h-4 w-4 text-blue-600" />}
                        {item.type === 'warning' && <AlertTriangle className="h-4 w-4 text-amber-600" />}
                        {item.type === 'retired' && <Trash2 className="h-4 w-4 text-muted-foreground" />}
                        {item.type === 'completed' && <CheckCircle className="h-4 w-4 text-emerald-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-[#0D3133]">{item.name}</p>
                          <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.id} • {item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Actions */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-[#E69F50]" />
                  <CardTitle className="text-base text-[#0D3133]">Upcoming Actions</CardTitle>
                </div>
                <CardDescription>Scheduled lifecycle events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingActions.map((item) => (
                    <div key={item.asset} className="p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                      <p className="text-sm font-medium text-[#0D3133]">{item.asset}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.action}</p>
                      <p className="text-xs text-[#E69F50] mt-1">{item.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
