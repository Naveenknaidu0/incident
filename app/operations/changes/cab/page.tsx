"use client"

import { AppShell } from "@/components/layout/app-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Calendar,
  Clock,
  Video,
  FileText,
  Plus,
} from "lucide-react"

const upcomingMeetings = [
  { id: "CAB-001", title: "Weekly CAB Review", date: "Jan 29, 2024", time: "10:00 AM", duration: "1h", attendees: 8, pendingChanges: 5 },
  { id: "CAB-002", title: "Emergency CAB - Critical Changes", date: "Jan 27, 2024", time: "2:00 PM", duration: "30m", attendees: 4, pendingChanges: 2 },
  { id: "CAB-003", title: "Monthly Infrastructure Review", date: "Feb 05, 2024", time: "11:00 AM", duration: "2h", attendees: 12, pendingChanges: 8 },
]

const cabMembers = [
  { name: "Sarah Chen", role: "CAB Chair", department: "IT Operations" },
  { name: "Mike Johnson", role: "Technical Lead", department: "Engineering" },
  { name: "Emily Davis", role: "Security Lead", department: "Security" },
  { name: "James Wilson", role: "Infrastructure Lead", department: "Infrastructure" },
  { name: "Lisa Brown", role: "Business Rep", department: "Business Operations" },
]

export default function CABManagementPage() {
  return (
    <AppShell>
      <div className="flex h-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-[#0D3133]">CAB Management</h1>
              <p className="text-sm text-muted-foreground">Change Advisory Board meetings and governance</p>
            </div>
            <Button size="sm" className="gap-2 bg-[#0D3133] hover:bg-[#0D3133]/90">
              <Plus className="h-4 w-4" />
              Schedule Meeting
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Upcoming Meetings */}
            <Card className="col-span-2 border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#E69F50]" />
                  <CardTitle className="text-base text-[#0D3133]">Upcoming CAB Meetings</CardTitle>
                </div>
                <CardDescription>Scheduled Change Advisory Board sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting) => (
                    <div key={meeting.id} className="p-4 rounded-lg border border-border/50 hover:border-[#E69F50]/30 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#0D3133]">{meeting.title}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {meeting.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {meeting.time} ({meeting.duration})
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {meeting.attendees} attendees
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-xs rounded-full bg-amber-100 text-amber-700">
                            {meeting.pendingChanges} changes
                          </span>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Video className="h-4 w-4" />
                            Join
                          </Button>
                          <Button variant="outline" size="sm" className="gap-1">
                            <FileText className="h-4 w-4" />
                            Agenda
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CAB Members */}
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#73847B]" />
                  <CardTitle className="text-base text-[#0D3133]">CAB Members</CardTitle>
                </div>
                <CardDescription>Board composition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cabMembers.map((member) => (
                    <div key={member.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="h-8 w-8 rounded-full bg-[#0D3133]/10 flex items-center justify-center text-sm font-medium text-[#0D3133]">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0D3133]">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
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
