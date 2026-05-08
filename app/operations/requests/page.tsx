"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ShoppingCart,
  Inbox,
  CheckSquare,
  Truck,
  Clock,
  CheckCircle,
  Plus,
  ArrowRight,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

const kpis = [
  { label: "Open Requests", value: "34", change: "+5", icon: Inbox, color: "text-blue-600" },
  { label: "Awaiting Approval", value: "12", change: "-3", icon: Clock, color: "text-amber-600" },
  { label: "In Fulfillment", value: "8", change: "+2", icon: Truck, color: "text-purple-600" },
  { label: "Completed Today", value: "15", change: "+7", icon: CheckCircle, color: "text-emerald-600" },
]

const recentRequests = [
  { id: "REQ-001", title: "New Laptop Request", category: "Hardware", status: "pending-approval", requestedBy: "John Smith", createdAt: "2h ago" },
  { id: "REQ-002", title: "VPN Access Request", category: "Access", status: "in-fulfillment", requestedBy: "Sarah Chen", createdAt: "4h ago" },
  { id: "REQ-003", title: "Software License - Adobe CC", category: "Software", status: "approved", requestedBy: "Mike Johnson", createdAt: "1d ago" },
  { id: "REQ-004", title: "Conference Room Booking", category: "Facilities", status: "completed", requestedBy: "Emily Davis", createdAt: "1d ago" },
]

const quickActions = [
  { label: "Service Catalog", href: "/operations/requests/catalog", icon: ShoppingCart },
  { label: "My Approvals", href: "/operations/requests/approvals", icon: CheckSquare },
  { label: "Fulfillment Queue", href: "/operations/requests/fulfillment", icon: Truck },
  { label: "Request Analytics", href: "/operations/requests/analytics", icon: BarChart3 },
]

export default function ServiceRequestsPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Service Requests</h1>
              <p className="text-sm text-muted-foreground">Manage and fulfill service requests from users</p>
            </div>
            <Link href="/operations/requests/catalog">
              <Button size="sm" className="gap-2 bg-[#0D3133] hover:bg-[#0D3133]/90">
                <Plus className="h-4 w-4" />
                New Request
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* KPI Strip */}
            <div className="grid grid-cols-4 gap-4">
              {kpis.map((kpi) => {
                const Icon = kpi.icon
                return (
                  <Card key={kpi.label} className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{kpi.label}</p>
                          <p className="text-2xl font-semibold text-[#0D3133]">{kpi.value}</p>
                          <p className="text-xs text-muted-foreground">{kpi.change} from yesterday</p>
                        </div>
                        <div className={`p-2 rounded-lg bg-muted/50 ${kpi.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Recent Requests */}
              <Card className="col-span-2 border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base text-[#0D3133]">Recent Requests</CardTitle>
                      <CardDescription>Latest service requests</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1 text-[#0D3133]">
                      View All <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Inbox className="h-4 w-4 text-[#73847B]" />
                          <div>
                            <p className="text-sm font-medium text-[#0D3133]">{request.title}</p>
                            <p className="text-xs text-muted-foreground">{request.id} • {request.requestedBy}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                            {request.category}
                          </span>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            request.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                            request.status === 'approved' ? 'bg-blue-100 text-blue-700' :
                            request.status === 'in-fulfillment' ? 'bg-purple-100 text-purple-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {request.status.replace('-', ' ')}
                          </span>
                          <span className="text-xs text-muted-foreground">{request.createdAt}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-[#0D3133]">Quick Actions</CardTitle>
                  <CardDescription>Common service request tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {quickActions.map((action) => {
                      const Icon = action.icon
                      return (
                        <Link key={action.label} href={action.href}>
                          <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 hover:border-[#E69F50]/30 transition-colors cursor-pointer">
                            <div className="p-2 rounded-md bg-[#0D3133]/5">
                              <Icon className="h-4 w-4 text-[#0D3133]" />
                            </div>
                            <span className="text-sm font-medium text-[#0D3133]">{action.label}</span>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
