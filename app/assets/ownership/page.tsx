"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  UserCheck,
  Package,
  Users,
} from "lucide-react"

const ownershipStats = [
  { label: "Active Owners", value: "432", description: "Users with assigned assets" },
  { label: "Unassigned Assets", value: "23", description: "Assets without owners" },
  { label: "Avg. Assets/User", value: "4.2", description: "Average assets per owner" },
]

const owners = [
  { name: "Sarah Chen", department: "Engineering", role: "Senior Engineer", assetCount: 5, assets: ["MacBook Pro 16\"", "Monitor 27\"", "Headset", "Keyboard", "Mouse"] },
  { name: "Mike Johnson", department: "IT Operations", role: "IT Manager", assetCount: 8, assets: ["Server Access", "Network Console", "Laptop", "Monitor", "Phone"] },
  { name: "Emily Davis", department: "Security", role: "Security Lead", assetCount: 4, assets: ["MacBook Pro 14\"", "YubiKey", "Monitor", "Phone"] },
  { name: "James Wilson", department: "Infrastructure", role: "Infrastructure Lead", assetCount: 6, assets: ["Desktop", "Server Keys", "Network Tools", "Monitor x2", "Phone"] },
]

export default function AssetOwnershipPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Asset Ownership</h1>
              <p className="text-sm text-muted-foreground">Track asset assignments and ownership</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="grid grid-cols-3 gap-6">
            {ownershipStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#0D3133]/5">
                  <UserCheck className="h-5 w-5 text-[#0D3133]" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#0D3133]">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-3">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search owners or assets..." className="pl-9" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 gap-4">
            {owners.map((owner) => (
              <Card key={owner.name} className="border-border/50 hover:border-[#E69F50]/30 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#0D3133]/10 flex items-center justify-center text-sm font-medium text-[#0D3133]">
                        {owner.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <CardTitle className="text-base text-[#0D3133]">{owner.name}</CardTitle>
                        <CardDescription>{owner.role} • {owner.department}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-[#73847B]">
                      <Package className="h-4 w-4" />
                      <span>{owner.assetCount}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {owner.assets.map((asset) => (
                      <span key={asset} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                        {asset}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  )
}
