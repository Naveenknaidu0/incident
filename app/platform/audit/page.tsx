"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ScrollText,
  Search,
  Download,
  Filter,
  User,
  Settings,
  AlertCircle,
  Shield,
} from "lucide-react"

const auditLogs = [
  { id: "AUD-001", action: "incident.created", actor: "Sarah Chen", target: "INC-1234", timestamp: "2 min ago", ip: "192.168.1.100", result: "success" },
  { id: "AUD-002", action: "user.login", actor: "Mike Johnson", target: "-", timestamp: "5 min ago", ip: "192.168.1.105", result: "success" },
  { id: "AUD-003", action: "settings.updated", actor: "Emily Davis", target: "SLA Policies", timestamp: "15 min ago", ip: "192.168.1.102", result: "success" },
  { id: "AUD-004", action: "user.login", actor: "Unknown", target: "-", timestamp: "20 min ago", ip: "45.33.32.156", result: "failed" },
  { id: "AUD-005", action: "incident.escalated", actor: "System", target: "INC-1230", timestamp: "30 min ago", ip: "-", result: "success" },
  { id: "AUD-006", action: "user.permission_changed", actor: "James Wilson", target: "alex.thompson", timestamp: "1h ago", ip: "192.168.1.108", result: "success" },
]

const actionIcons: Record<string, React.ElementType> = {
  "incident.created": AlertCircle,
  "incident.escalated": AlertCircle,
  "user.login": User,
  "user.permission_changed": Shield,
  "settings.updated": Settings,
}

export default function PlatformAuditPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Audit Logs</h1>
              <p className="text-sm text-muted-foreground">Platform-wide audit trail and activity logs</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export Logs
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search logs..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="incident">Incidents</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="settings">Settings</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Result" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Results</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
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
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actor</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Target</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">IP Address</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Result</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {auditLogs.map((log) => {
                    const Icon = actionIcons[log.action] || ScrollText
                    return (
                      <tr key={log.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-[#73847B]" />
                            <span className="text-sm text-[#0D3133]">{log.action}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#0D3133]">{log.actor}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{log.target}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground font-mono">{log.ip}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            log.result === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {log.result}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{log.timestamp}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
