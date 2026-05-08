"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  GitBranch,
  Plus,
  Search,
  Filter,
  Download,
} from "lucide-react"

const changeRequests = [
  { id: "CHG-001", title: "Database Schema Update - Production", type: "standard", priority: "high", status: "pending-approval", requestedBy: "Sarah Chen", assignedTo: "Mike Johnson", createdAt: "2d ago", scheduledDate: "Jan 28, 2024" },
  { id: "CHG-002", title: "API Gateway Rate Limiting Configuration", type: "normal", priority: "medium", status: "approved", requestedBy: "Emily Davis", assignedTo: "James Wilson", createdAt: "3d ago", scheduledDate: "Jan 29, 2024" },
  { id: "CHG-003", title: "Network Firewall Rules Update", type: "emergency", priority: "critical", status: "in-review", requestedBy: "Mike Johnson", assignedTo: "Sarah Chen", createdAt: "1d ago", scheduledDate: "Jan 27, 2024" },
  { id: "CHG-004", title: "SSL Certificate Renewal - All Services", type: "standard", priority: "high", status: "scheduled", requestedBy: "James Wilson", assignedTo: "Emily Davis", createdAt: "5d ago", scheduledDate: "Feb 01, 2024" },
  { id: "CHG-005", title: "Load Balancer Configuration Update", type: "normal", priority: "medium", status: "draft", requestedBy: "Lisa Brown", assignedTo: "Unassigned", createdAt: "1h ago", scheduledDate: "TBD" },
]

export default function ChangeRequestsPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Change Requests</h1>
              <p className="text-sm text-muted-foreground">View and manage all change requests</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button size="sm" className="gap-2 bg-[#0D3133] hover:bg-[#0D3133]/90">
                <Plus className="h-4 w-4" />
                New Request
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search change requests..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="pending-approval">Pending Approval</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
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
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Change ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Title</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Priority</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Requested By</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Scheduled</th>
                  </tr>
                </thead>
                <tbody>
                  {changeRequests.map((change) => (
                    <tr key={change.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors cursor-pointer">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <GitBranch className="h-4 w-4 text-[#73847B]" />
                          <span className="text-sm font-medium text-[#0D3133]">{change.id}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#0D3133] max-w-xs truncate">{change.title}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          change.type === 'emergency' ? 'bg-red-100 text-red-700' :
                          change.type === 'standard' ? 'bg-blue-100 text-blue-700' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {change.type}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          change.priority === 'critical' ? 'bg-red-100 text-red-700' :
                          change.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                          change.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {change.priority}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          change.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                          change.status === 'pending-approval' ? 'bg-amber-100 text-amber-700' :
                          change.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                          change.status === 'in-review' ? 'bg-purple-100 text-purple-700' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {change.status.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{change.requestedBy}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{change.scheduledDate}</td>
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
