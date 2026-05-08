"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckSquare,
  XCircle,
  CheckCircle,
  Clock,
  Inbox,
} from "lucide-react"

const pendingApprovals = [
  { id: "REQ-005", title: "New MacBook Pro Request", requestedBy: "Alex Thompson", department: "Engineering", createdAt: "1h ago", cost: "$2,499" },
  { id: "REQ-006", title: "Admin Access - Production DB", requestedBy: "Sarah Chen", department: "Data", createdAt: "3h ago", cost: "N/A" },
  { id: "REQ-007", title: "Adobe Creative Cloud License", requestedBy: "Mike Johnson", department: "Marketing", createdAt: "5h ago", cost: "$599/yr" },
]

export default function RequestApprovalsPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Request Approvals</h1>
              <p className="text-sm text-muted-foreground">Review and approve pending service requests</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="text-muted-foreground">{pendingApprovals.length} Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-600" />
                <CardTitle className="text-base text-[#0D3133]">Pending Your Approval</CardTitle>
              </div>
              <CardDescription>Requests awaiting your review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((request) => (
                  <div key={request.id} className="p-4 rounded-lg border border-border/50 hover:border-[#E69F50]/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <Inbox className="h-5 w-5 text-[#73847B] mt-0.5" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-[#0D3133]">{request.id}</span>
                            <span className="px-2 py-0.5 text-xs rounded-full bg-amber-100 text-amber-700">
                              pending
                            </span>
                          </div>
                          <p className="text-sm text-[#0D3133] mt-1">{request.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Requested by {request.requestedBy} ({request.department}) • {request.createdAt}
                          </p>
                          {request.cost !== "N/A" && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Estimated cost: <span className="font-medium">{request.cost}</span>
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-1 text-red-600 hover:text-red-700 hover:bg-red-50">
                          <XCircle className="h-4 w-4" />
                          Reject
                        </Button>
                        <Button size="sm" className="gap-1 bg-emerald-600 hover:bg-emerald-700">
                          <CheckCircle className="h-4 w-4" />
                          Approve
                        </Button>
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
