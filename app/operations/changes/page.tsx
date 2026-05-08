"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  GitBranch,
  FileText,
  CheckSquare,
  Users,
  Calendar,
  Plus,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const kpis = [
  { label: "Pending Changes", value: "12", change: "+3", icon: Clock, color: "text-amber-600" },
  { label: "Awaiting Approval", value: "5", change: "-2", icon: AlertTriangle, color: "text-orange-600" },
  { label: "Scheduled", value: "8", change: "+1", icon: Calendar, color: "text-blue-600" },
  { label: "Completed This Week", value: "23", change: "+5", icon: CheckCircle, color: "text-emerald-600" },
]

const recentChanges = [
  { id: "CHG-001", title: "Database Schema Update", status: "pending-approval", priority: "high", requestedBy: "Sarah Chen", scheduledDate: "Jan 28" },
  { id: "CHG-002", title: "API Gateway Configuration", status: "approved", priority: "medium", requestedBy: "Mike Johnson", scheduledDate: "Jan 29" },
  { id: "CHG-003", title: "Network Firewall Rules", status: "scheduled", priority: "high", requestedBy: "Emily Davis", scheduledDate: "Jan 30" },
  { id: "CHG-004", title: "SSL Certificate Renewal", status: "in-review", priority: "critical", requestedBy: "James Wilson", scheduledDate: "Feb 01" },
]

const quickActions = [
  { label: "Create Change Request", href: "/operations/changes/requests", icon: Plus },
  { label: "View Approvals", href: "/operations/changes/approvals", icon: CheckSquare },
  { label: "CAB Schedule", href: "/operations/changes/cab", icon: Users },
  { label: "Release Calendar", href: "/operations/changes/calendar", icon: Calendar },
]

export default function ChangeManagementPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Change Management</h1>
              <p className="text-sm text-muted-foreground">Plan, approve, and track changes across your infrastructure</p>
            </div>
            <Button size="sm" className="gap-2 bg-[#0D3133] hover:bg-[#0D3133]/90">
              <Plus className="h-4 w-4" />
              New Change Request
            </Button>
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
                          <p className="text-xs text-muted-foreground">{kpi.change} from last week</p>
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
              {/* Recent Changes */}
              <Card className="col-span-2 border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base text-[#0D3133]">Recent Changes</CardTitle>
                      <CardDescription>Latest change requests and their status</CardDescription>
                    </div>
                    <Link href="/operations/changes/requests">
                      <Button variant="ghost" size="sm" className="gap-1 text-[#0D3133]">
                        View All <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentChanges.map((change) => (
                      <div key={change.id} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <GitBranch className="h-4 w-4 text-[#73847B]" />
                          <div>
                            <p className="text-sm font-medium text-[#0D3133]">{change.title}</p>
                            <p className="text-xs text-muted-foreground">{change.id} • {change.requestedBy}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            change.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                            change.status === 'pending-approval' ? 'bg-amber-100 text-amber-700' :
                            change.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {change.status.replace('-', ' ')}
                          </span>
                          <span className="text-xs text-muted-foreground">{change.scheduledDate}</span>
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
                  <CardDescription>Common change management tasks</CardDescription>
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
