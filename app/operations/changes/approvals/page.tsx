"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckSquare,
  XCircle,
  Clock,
  AlertTriangle,
  CheckCircle,
  GitBranch,
} from "lucide-react"

const pendingApprovals = [
  { id: "CHG-001", title: "Database Schema Update - Production", priority: "high", requestedBy: "Sarah Chen", requestedAt: "2d ago", riskLevel: "high", impactedServices: 3 },
  { id: "CHG-003", title: "Network Firewall Rules Update", priority: "critical", requestedBy: "Mike Johnson", requestedAt: "1d ago", riskLevel: "critical", impactedServices: 8 },
  { id: "CHG-006", title: "Storage Volume Expansion", priority: "medium", requestedBy: "Emily Davis", requestedAt: "4h ago", riskLevel: "low", impactedServices: 2 },
]

const recentDecisions = [
  { id: "CHG-002", title: "API Gateway Rate Limiting", decision: "approved", decidedBy: "James Wilson", decidedAt: "1d ago" },
  { id: "CHG-004", title: "SSL Certificate Renewal", decision: "approved", decidedBy: "Lisa Brown", decidedAt: "2d ago" },
  { id: "CHG-007", title: "Deprecated API Removal", decision: "rejected", decidedBy: "Sarah Chen", decidedAt: "3d ago" },
]

export default function ChangeApprovalsPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Change Approvals</h1>
              <p className="text-sm text-muted-foreground">Review and approve pending change requests</p>
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
          <div className="space-y-6">
            {/* Pending Approvals */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <CardTitle className="text-base text-[#0D3133]">Pending Your Approval</CardTitle>
                </div>
                <CardDescription>Changes awaiting your review and decision</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((change) => (
                    <div key={change.id} className="p-4 rounded-lg border border-border/50 hover:border-[#E69F50]/30 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <GitBranch className="h-5 w-5 text-[#73847B] mt-0.5" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-[#0D3133]">{change.id}</span>
                              <span className={`px-2 py-0.5 text-xs rounded-full ${
                                change.priority === 'critical' ? 'bg-red-100 text-red-700' :
                                change.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                                'bg-amber-100 text-amber-700'
                              }`}>
                                {change.priority}
                              </span>
                              <span className={`px-2 py-0.5 text-xs rounded-full ${
                                change.riskLevel === 'critical' ? 'bg-red-100 text-red-700' :
                                change.riskLevel === 'high' ? 'bg-orange-100 text-orange-700' :
                                change.riskLevel === 'medium' ? 'bg-amber-100 text-amber-700' :
                                'bg-emerald-100 text-emerald-700'
                              }`}>
                                {change.riskLevel} risk
                              </span>
                            </div>
                            <p className="text-sm text-[#0D3133] mt-1">{change.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Requested by {change.requestedBy} • {change.requestedAt} • {change.impactedServices} services impacted
                            </p>
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

            {/* Recent Decisions */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-[#73847B]" />
                  <CardTitle className="text-base text-[#0D3133]">Recent Decisions</CardTitle>
                </div>
                <CardDescription>Your recent approval decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentDecisions.map((change) => (
                    <div key={change.id} className="flex items-center justify-between p-3 rounded-lg border border-border/30">
                      <div className="flex items-center gap-3">
                        {change.decision === 'approved' ? (
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-[#0D3133]">{change.title}</p>
                          <p className="text-xs text-muted-foreground">{change.id} • {change.decidedBy}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          change.decision === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {change.decision}
                        </span>
                        <span className="text-xs text-muted-foreground">{change.decidedAt}</span>
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
