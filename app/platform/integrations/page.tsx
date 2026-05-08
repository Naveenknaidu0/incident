"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Link2,
  Search,
  Plus,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Mail,
  Webhook,
  Activity,
  Users,
  Settings,
} from "lucide-react"

const integrationCategories = [
  {
    name: "Communication",
    integrations: [
      { name: "Slack", icon: MessageSquare, status: "connected", description: "Real-time incident notifications" },
      { name: "Microsoft Teams", icon: Users, status: "not_connected", description: "Team collaboration and alerts" },
      { name: "Email (SMTP)", icon: Mail, status: "connected", description: "Email notifications and escalations" },
    ]
  },
  {
    name: "Monitoring",
    integrations: [
      { name: "Datadog", icon: Activity, status: "connected", description: "APM and infrastructure monitoring" },
      { name: "PagerDuty", icon: AlertCircle, status: "connected", description: "Incident alerting and on-call" },
      { name: "New Relic", icon: Activity, status: "not_connected", description: "Application performance monitoring" },
    ]
  },
  {
    name: "Webhooks",
    integrations: [
      { name: "Incoming Webhooks", icon: Webhook, status: "connected", description: "Receive events from external systems" },
      { name: "Outgoing Webhooks", icon: Webhook, status: "connected", description: "Send events to external systems" },
    ]
  },
]

export default function IntegrationsPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Integrations</h1>
              <p className="text-sm text-muted-foreground">Connect external services and tools</p>
            </div>
            <Button size="sm" className="gap-2 bg-[#0D3133] hover:bg-[#0D3133]/90">
              <Plus className="h-4 w-4" />
              Add Integration
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-3">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search integrations..." className="pl-9" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {integrationCategories.map((category) => (
              <Card key={category.name} className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-[#0D3133]">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {category.integrations.map((integration) => {
                      const Icon = integration.icon
                      return (
                        <div key={integration.name} className="p-4 rounded-lg border border-border/50 hover:border-[#E69F50]/30 transition-colors cursor-pointer">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-muted/50">
                                <Icon className="h-5 w-5 text-[#0D3133]" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-[#0D3133]">{integration.name}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{integration.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <span className={`flex items-center gap-1 text-xs ${
                              integration.status === 'connected' ? 'text-emerald-600' : 'text-muted-foreground'
                            }`}>
                              {integration.status === 'connected' ? (
                                <><CheckCircle className="h-3 w-3" /> Connected</>
                              ) : (
                                <><AlertCircle className="h-3 w-3" /> Not Connected</>
                              )}
                            </span>
                            <Button variant="ghost" size="sm" className="h-7 px-2">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )
                    })}
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
