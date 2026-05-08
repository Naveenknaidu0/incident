"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  FileText,
  Download,
  Clock,
} from "lucide-react"

const complianceFrameworks = [
  { name: "SOC 2 Type II", status: "compliant", lastAudit: "Dec 15, 2023", nextAudit: "Jun 15, 2024", controls: 87, passing: 87 },
  { name: "ISO 27001", status: "compliant", lastAudit: "Nov 20, 2023", nextAudit: "Nov 20, 2024", controls: 114, passing: 112 },
  { name: "GDPR", status: "partial", lastAudit: "Jan 10, 2024", nextAudit: "Jul 10, 2024", controls: 45, passing: 42 },
  { name: "HIPAA", status: "compliant", lastAudit: "Oct 05, 2023", nextAudit: "Oct 05, 2024", controls: 54, passing: 54 },
]

const recentActions = [
  { action: "Data Retention Policy Updated", framework: "GDPR", date: "2d ago", status: "completed" },
  { action: "Access Control Review", framework: "SOC 2", date: "5d ago", status: "completed" },
  { action: "Encryption Standards Audit", framework: "ISO 27001", date: "1w ago", status: "completed" },
]

export default function CompliancePage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">Compliance</h1>
              <p className="text-sm text-muted-foreground">Regulatory compliance and framework management</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Frameworks */}
            <div className="grid grid-cols-2 gap-4">
              {complianceFrameworks.map((framework) => (
                <Card key={framework.name} className="border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          framework.status === 'compliant' ? 'bg-emerald-100' : 'bg-amber-100'
                        }`}>
                          <Shield className={`h-5 w-5 ${
                            framework.status === 'compliant' ? 'text-emerald-600' : 'text-amber-600'
                          }`} />
                        </div>
                        <div>
                          <CardTitle className="text-base text-[#0D3133]">{framework.name}</CardTitle>
                          <CardDescription>Last audit: {framework.lastAudit}</CardDescription>
                        </div>
                      </div>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        framework.status === 'compliant' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {framework.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Controls Passing</span>
                        <span className="text-[#0D3133] font-medium">{framework.passing}/{framework.controls}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            framework.passing === framework.controls ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${(framework.passing / framework.controls) * 100}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Next audit: {framework.nextAudit}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Actions */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#73847B]" />
                  <CardTitle className="text-base text-[#0D3133]">Recent Compliance Actions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActions.map((action, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border/30">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <div>
                          <p className="text-sm font-medium text-[#0D3133]">{action.action}</p>
                          <p className="text-xs text-muted-foreground">{action.framework}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{action.date}</span>
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
