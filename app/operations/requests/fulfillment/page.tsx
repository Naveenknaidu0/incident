"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Truck,
  CheckCircle,
  Clock,
  Package,
} from "lucide-react"

const fulfillmentQueue = [
  { id: "REQ-002", title: "VPN Access Request", assignedTo: "IT Support Team", status: "in-progress", priority: "high", eta: "2h", progress: 60 },
  { id: "REQ-003", title: "Software License - Adobe CC", assignedTo: "Software Admin", status: "pending", priority: "medium", eta: "1d", progress: 0 },
  { id: "REQ-008", title: "New Laptop Setup", assignedTo: "Hardware Team", status: "in-progress", priority: "medium", eta: "4h", progress: 30 },
  { id: "REQ-009", title: "Conference Room AV Setup", assignedTo: "Facilities", status: "pending", priority: "low", eta: "2d", progress: 0 },
]

export default function FulfillmentPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Fulfillment Queue</h1>
              <p className="text-sm text-muted-foreground">Track and complete approved service requests</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-base text-[#0D3133]">Active Fulfillment Tasks</CardTitle>
              </div>
              <CardDescription>Requests currently being fulfilled</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fulfillmentQueue.map((request) => (
                  <div key={request.id} className="p-4 rounded-lg border border-border/50">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[#0D3133]">{request.id}</span>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            request.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                            request.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {request.priority}
                          </span>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            request.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {request.status.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-sm text-[#0D3133] mt-1">{request.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Assigned to: {request.assignedTo} • ETA: {request.eta}
                        </p>
                      </div>
                      <Button size="sm" className="gap-1 bg-emerald-600 hover:bg-emerald-700">
                        <CheckCircle className="h-4 w-4" />
                        Complete
                      </Button>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                        <span>Progress</span>
                        <span>{request.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#E69F50] rounded-full transition-all"
                          style={{ width: `${request.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
