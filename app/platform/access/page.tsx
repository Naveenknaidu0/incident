"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  Lock,
  Users,
  Shield,
  Key,
  Eye,
} from "lucide-react"

const accessStats = [
  { label: "Active Users", value: "432", icon: Users },
  { label: "Roles Defined", value: "12", icon: Shield },
  { label: "API Keys", value: "28", icon: Key },
  { label: "SSO Enabled", value: "Yes", icon: Lock },
]

const roles = [
  { name: "Administrator", users: 5, permissions: 42, description: "Full system access" },
  { name: "Incident Manager", users: 18, permissions: 28, description: "Manage incidents and escalations" },
  { name: "Analyst", users: 45, permissions: 18, description: "View and analyze incidents" },
  { name: "On-Call Responder", users: 32, permissions: 22, description: "Respond to and update incidents" },
  { name: "Viewer", users: 120, permissions: 8, description: "Read-only access to dashboards" },
]

const recentAccess = [
  { user: "sarah.chen@company.com", action: "Role changed", details: "Analyst → Incident Manager", time: "1h ago" },
  { user: "new.user@company.com", action: "Account created", details: "Role: Viewer", time: "3h ago" },
  { user: "api-service-prod", action: "API key rotated", details: "New key generated", time: "1d ago" },
]

export default function AccessVisibilityPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Access Visibility</h1>
              <p className="text-sm text-muted-foreground">Manage roles, permissions, and access controls</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="grid grid-cols-4 gap-4">
            {accessStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0D3133]/5">
                    <Icon className="h-5 w-5 text-[#0D3133]" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#0D3133]">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Roles */}
            <Card className="col-span-2 border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#73847B]" />
                    <CardTitle className="text-base text-[#0D3133]">Roles & Permissions</CardTitle>
                  </div>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search roles..." className="pl-9 h-8" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {roles.map((role) => (
                    <div key={role.name} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-muted/50">
                          <Shield className="h-4 w-4 text-[#0D3133]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#0D3133]">{role.name}</p>
                          <p className="text-xs text-muted-foreground">{role.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{role.users} users</span>
                        <span>{role.permissions} permissions</span>
                        <Eye className="h-4 w-4 cursor-pointer hover:text-[#0D3133]" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Access Changes */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-[#E69F50]" />
                  <CardTitle className="text-base text-[#0D3133]">Recent Changes</CardTitle>
                </div>
                <CardDescription>Access modifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAccess.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-border/30">
                      <p className="text-sm font-medium text-[#0D3133]">{item.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.user}</p>
                      <p className="text-xs text-muted-foreground">{item.details}</p>
                      <p className="text-xs text-[#73847B] mt-1">{item.time}</p>
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
