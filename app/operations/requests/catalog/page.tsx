"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  Laptop,
  Key,
  FileCode,
  Building,
  Headphones,
  Network,
  Shield,
  Clock,
} from "lucide-react"

const categories = [
  { 
    name: "Hardware", 
    icon: Laptop, 
    color: "bg-blue-100 text-blue-700",
    items: [
      { name: "New Laptop Request", sla: "5 days" },
      { name: "Monitor Request", sla: "3 days" },
      { name: "Mobile Device", sla: "3 days" },
    ]
  },
  { 
    name: "Access & Permissions", 
    icon: Key, 
    color: "bg-amber-100 text-amber-700",
    items: [
      { name: "VPN Access", sla: "1 day" },
      { name: "Application Access", sla: "2 days" },
      { name: "Admin Privileges", sla: "3 days" },
    ]
  },
  { 
    name: "Software", 
    icon: FileCode, 
    color: "bg-purple-100 text-purple-700",
    items: [
      { name: "Software Installation", sla: "2 days" },
      { name: "License Request", sla: "3 days" },
      { name: "Software Upgrade", sla: "2 days" },
    ]
  },
  { 
    name: "Facilities", 
    icon: Building, 
    color: "bg-emerald-100 text-emerald-700",
    items: [
      { name: "Conference Room", sla: "1 day" },
      { name: "Workspace Setup", sla: "5 days" },
      { name: "Office Supplies", sla: "2 days" },
    ]
  },
  { 
    name: "IT Support", 
    icon: Headphones, 
    color: "bg-rose-100 text-rose-700",
    items: [
      { name: "Technical Support", sla: "4 hours" },
      { name: "Password Reset", sla: "1 hour" },
      { name: "Email Support", sla: "4 hours" },
    ]
  },
  { 
    name: "Network", 
    icon: Network, 
    color: "bg-cyan-100 text-cyan-700",
    items: [
      { name: "Network Port", sla: "2 days" },
      { name: "Wifi Access", sla: "1 day" },
      { name: "Firewall Exception", sla: "3 days" },
    ]
  },
]

export default function ServiceCatalogPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Service Catalog</h1>
              <p className="text-sm text-muted-foreground">Browse and request services from the catalog</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-3">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search services..." className="pl-9" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.name} className="border-border/50 hover:border-[#E69F50]/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base text-[#0D3133]">{category.name}</CardTitle>
                        <CardDescription>{category.items.length} services</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/30 cursor-pointer transition-colors">
                          <span className="text-sm text-[#0D3133]">{item.name}</span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {item.sla}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </AppShell>
  )
}
