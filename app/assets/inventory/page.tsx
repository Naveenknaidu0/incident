"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Package,
  Plus,
  Search,
  Filter,
  Download,
  Server,
  Laptop,
  Monitor,
  HardDrive,
  Network,
} from "lucide-react"

const assetStats = [
  { label: "Total Assets", value: "2,847", icon: Package, color: "text-blue-600" },
  { label: "Servers", value: "156", icon: Server, color: "text-purple-600" },
  { label: "Laptops", value: "892", icon: Laptop, color: "text-emerald-600" },
  { label: "Network Devices", value: "234", icon: Network, color: "text-amber-600" },
]

const assets = [
  { id: "AST-001", name: "Production DB Server 01", type: "Server", status: "active", location: "DC-East-01", owner: "Infrastructure Team", lastUpdated: "2h ago" },
  { id: "AST-002", name: "MacBook Pro 16\" - S.Chen", type: "Laptop", status: "active", location: "HQ-Floor-3", owner: "Sarah Chen", lastUpdated: "1d ago" },
  { id: "AST-003", name: "Core Switch - Building A", type: "Network", status: "active", location: "DC-East-01", owner: "Network Team", lastUpdated: "5h ago" },
  { id: "AST-004", name: "Dell Monitor 27\" - M.Johnson", type: "Monitor", status: "active", location: "HQ-Floor-2", owner: "Mike Johnson", lastUpdated: "3d ago" },
  { id: "AST-005", name: "Storage Array SAN-01", type: "Storage", status: "maintenance", location: "DC-West-01", owner: "Storage Team", lastUpdated: "1h ago" },
]

export default function AssetInventoryPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Asset Inventory</h1>
              <p className="text-sm text-muted-foreground">Complete inventory of all organizational assets</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button size="sm" className="gap-2 bg-[#0D3133] hover:bg-[#0D3133]/90">
                <Plus className="h-4 w-4" />
                Add Asset
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="grid grid-cols-4 gap-4">
            {assetStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted/50 ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-lg font-semibold text-[#0D3133]">{stat.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Filters */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search assets..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="server">Server</SelectItem>
                <SelectItem value="laptop">Laptop</SelectItem>
                <SelectItem value="network">Network</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
                <SelectItem value="monitor">Monitor</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="retired">Retired</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto p-6">
          <Card className="border-border/50">
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Asset ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Owner</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors cursor-pointer">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-[#73847B]" />
                          <span className="text-sm font-medium text-[#0D3133]">{asset.id}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#0D3133]">{asset.name}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                          {asset.type}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          asset.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                          asset.status === 'maintenance' ? 'bg-amber-100 text-amber-700' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {asset.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{asset.location}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{asset.owner}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{asset.lastUpdated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
