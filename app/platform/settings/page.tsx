"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Settings,
  Building,
  Globe,
  Bell,
  Database,
  Shield,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

const settingsCategories = [
  {
    name: "Organization",
    icon: Building,
    items: [
      { name: "General Settings", description: "Company name, timezone, and branding", href: "#" },
      { name: "Business Hours", description: "Define operational hours", href: "#" },
      { name: "Locations", description: "Manage office locations", href: "#" },
    ]
  },
  {
    name: "Security",
    icon: Shield,
    items: [
      { name: "Authentication", description: "SSO, MFA, and password policies", href: "#" },
      { name: "Session Management", description: "Session timeout and controls", href: "#" },
      { name: "IP Whitelisting", description: "Restrict access by IP", href: "#" },
      { name: "Data Encryption", description: "Encryption settings", href: "#" },
    ]
  },
  {
    name: "Notifications",
    icon: Bell,
    items: [
      { name: "Email Templates", description: "Customize notification emails", href: "#" },
      { name: "Alert Rules", description: "Configure notification triggers", href: "#" },
      { name: "Channels", description: "Manage notification channels", href: "#" },
    ]
  },
  {
    name: "Data Management",
    icon: Database,
    items: [
      { name: "Data Retention", description: "Configure data retention policies", href: "#" },
      { name: "Backup & Recovery", description: "Backup schedules and restore", href: "#" },
      { name: "Import/Export", description: "Bulk data operations", href: "#" },
    ]
  },
]

export default function PlatformSettingsPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Platform Settings</h1>
              <p className="text-sm text-muted-foreground">Configure platform-wide settings and preferences</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 gap-6">
            {settingsCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.name} className="border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#0D3133]/5">
                        <Icon className="h-5 w-5 text-[#0D3133]" />
                      </div>
                      <CardTitle className="text-base text-[#0D3133]">{category.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer group">
                            <div>
                              <p className="text-sm font-medium text-[#0D3133]">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-[#0D3133] transition-colors" />
                          </div>
                        </Link>
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
