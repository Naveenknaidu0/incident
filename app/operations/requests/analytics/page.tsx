"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react"

const metrics = [
  { label: "Total Requests (MTD)", value: "234", change: "+12%", icon: BarChart3 },
  { label: "Avg. Fulfillment Time", value: "2.3 days", change: "-15%", icon: Clock },
  { label: "Completion Rate", value: "94%", change: "+3%", icon: CheckCircle },
  { label: "User Satisfaction", value: "4.7/5", change: "+0.2", icon: TrendingUp },
]

const categoryBreakdown = [
  { category: "Hardware", count: 45, percentage: 19 },
  { category: "Software", count: 67, percentage: 29 },
  { category: "Access", count: 58, percentage: 25 },
  { category: "IT Support", count: 42, percentage: 18 },
  { category: "Facilities", count: 22, percentage: 9 },
]

export default function RequestAnalyticsPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Request Analytics</h1>
              <p className="text-sm text-muted-foreground">Service request metrics and insights</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Metrics */}
            <div className="grid grid-cols-4 gap-4">
              {metrics.map((metric) => {
                const Icon = metric.icon
                return (
                  <Card key={metric.label} className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                          <p className="text-2xl font-semibold text-[#0D3133]">{metric.value}</p>
                          <p className={`text-xs ${metric.change.startsWith('+') ? 'text-emerald-600' : metric.change.startsWith('-') ? 'text-red-600' : 'text-muted-foreground'}`}>
                            {metric.change} vs last month
                          </p>
                        </div>
                        <div className="p-2 rounded-lg bg-muted/50 text-[#73847B]">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Category Breakdown */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-[#0D3133]">Requests by Category</CardTitle>
                <CardDescription>Distribution of requests across categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryBreakdown.map((item) => (
                    <div key={item.category}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-[#0D3133]">{item.category}</span>
                        <span className="text-muted-foreground">{item.count} requests ({item.percentage}%)</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#0D3133] rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
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
