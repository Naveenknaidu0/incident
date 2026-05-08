"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  Clock,
} from "lucide-react"

const scheduledChanges = [
  { id: "CHG-002", title: "API Gateway Configuration", date: "Jan 29", time: "02:00 AM", type: "normal", status: "approved" },
  { id: "CHG-004", title: "SSL Certificate Renewal", date: "Feb 01", time: "03:00 AM", type: "standard", status: "scheduled" },
  { id: "CHG-008", title: "Database Migration", date: "Feb 03", time: "01:00 AM", type: "standard", status: "approved" },
  { id: "CHG-009", title: "Load Balancer Update", date: "Feb 05", time: "04:00 AM", type: "normal", status: "scheduled" },
]

const freezePeriods = [
  { name: "Q1 Release Freeze", start: "Feb 10", end: "Feb 15", reason: "Quarterly reporting period" },
]

export default function ReleaseCalendarPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Release Calendar</h1>
              <p className="text-sm text-muted-foreground">View scheduled changes and freeze periods</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-[#0D3133] px-3">January 2024</span>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Calendar View Placeholder */}
            <Card className="col-span-2 border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#E69F50]" />
                  <CardTitle className="text-base text-[#0D3133]">Calendar View</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-2 text-xs font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 2 // Start from Jan 1st (offset for the week)
                    const isCurrentMonth = day >= 0 && day < 31
                    const hasChange = [28, 31].includes(day + 1) || [1, 3, 5].includes(day - 30)
                    return (
                      <div
                        key={i}
                        className={`p-2 h-20 border border-border/30 rounded-md ${
                          isCurrentMonth ? 'bg-background' : 'bg-muted/20'
                        } ${hasChange ? 'border-[#E69F50]/50' : ''}`}
                      >
                        {isCurrentMonth && (
                          <>
                            <span className="text-xs text-muted-foreground">{day + 1}</span>
                            {hasChange && (
                              <div className="mt-1">
                                <div className="w-full h-1 rounded-full bg-[#E69F50]" />
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Changes */}
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-[#73847B]" />
                    <CardTitle className="text-base text-[#0D3133]">Upcoming Changes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {scheduledChanges.map((change) => (
                      <div key={change.id} className="p-3 rounded-lg border border-border/30 hover:bg-muted/20 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-[#0D3133]">{change.id}</span>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            change.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {change.status}
                          </span>
                        </div>
                        <p className="text-sm text-[#0D3133] mt-1 truncate">{change.title}</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{change.date}, {change.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Freeze Periods */}
              <Card className="border-border/50 border-red-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-[#0D3133]">Freeze Periods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {freezePeriods.map((period) => (
                      <div key={period.name} className="p-3 rounded-lg bg-red-50 border border-red-100">
                        <p className="text-sm font-medium text-red-700">{period.name}</p>
                        <p className="text-xs text-red-600 mt-1">{period.start} - {period.end}</p>
                        <p className="text-xs text-muted-foreground mt-1">{period.reason}</p>
                      </div>
                    ))}
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
