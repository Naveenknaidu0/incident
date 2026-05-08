"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useSidebar } from "@/contexts/sidebar-context"
import {
  LayoutDashboard,
  AlertCircle,
  FolderOpen,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  Eye,
  Bug,
  Phone,
  Calendar,
  Bell,
  Siren,
  Users,
  MessageSquare,
  FileText,
  ListTodo,
  Timer,
  ArrowUpRight,
  Zap,
  BookOpen,
  Database,
  GitBranch,
  Layers,
  Brain,
  Lightbulb,
  Wrench,
  BarChart3,
  TrendingUp,
  PieChart,
  FileEdit,
  FormInput,
  Megaphone,
  ScrollText,
  Settings,
  Shield,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plus,
  Package,
  UserCheck,
  Activity,
  Repeat,
  ClipboardCheck,
  ShoppingCart,
  Inbox,
  CheckSquare,
  Truck,
  Link2,
  Lock,
  Target,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  icon: React.ElementType
  href: string
  badge?: number
  children?: NavItem[]
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navigation: NavSection[] = [
  {
    title: "HOME",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/" },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      { 
        label: "Incident Management", 
        icon: AlertCircle, 
        href: "/operations/incidents",
        children: [
          { label: "Incident Dashboard", icon: LayoutDashboard, href: "/operations/incidents" },
          { label: "Create Incident", icon: Plus, href: "/operations/incidents/create" },
          { label: "All Incidents", icon: AlertCircle, href: "/operations/incidents/all", badge: 847 },
          { label: "Open", icon: FolderOpen, href: "/operations/incidents/open", badge: 42 },
          { label: "In Progress", icon: Clock, href: "/operations/incidents/in-progress", badge: 18 },
          { label: "Resolved", icon: CheckCircle, href: "/operations/incidents/resolved", badge: 156 },
          { label: "Closed", icon: XCircle, href: "/operations/incidents/closed", badge: 1243 },
          { label: "Escalated", icon: ArrowUpRight, href: "/operations/incidents/escalated", badge: 5 },
          { label: "VIP Incidents", icon: Star, href: "/operations/incidents/vip", badge: 3 },
          { label: "Watchlist", icon: Eye, href: "/operations/incidents/watchlist", badge: 7 },
          { label: "SLA Operations", icon: Timer, href: "/operations/incidents/sla", badge: 23 },
          { label: "Escalation Center", icon: AlertTriangle, href: "/operations/incidents/escalations", badge: 6 },
          { label: "SLA Policies", icon: FileText, href: "/operations/incidents/sla-policies" },
          { label: "Breach Analytics", icon: BarChart3, href: "/operations/incidents/breach-analytics" },
          { label: "Automation Rules", icon: Zap, href: "/operations/incidents/automation" },
          { label: "Runbooks", icon: BookOpen, href: "/operations/incidents/runbooks" },
        ]
      },
      { 
        label: "Major Incident Management", 
        icon: Siren, 
        href: "/operations/major-incidents",
        children: [
          { label: "Major Incidents", icon: Siren, href: "/operations/major-incidents", badge: 2 },
          { label: "War Room", icon: Users, href: "/operations/major-incidents/war-room" },
          { label: "Communication Center", icon: MessageSquare, href: "/operations/major-incidents/communications" },
          { label: "Stakeholders", icon: Users, href: "/operations/major-incidents/stakeholders" },
          { label: "Broadcast Center", icon: Megaphone, href: "/operations/major-incidents/broadcast" },
          { label: "PIR Reports", icon: FileText, href: "/operations/major-incidents/pir-reports" },
        ]
      },
      { 
        label: "Problem Management", 
        icon: Bug, 
        href: "/operations/problems",
        children: [
          { label: "Problem Dashboard", icon: AlertTriangle, href: "/operations/problems" },
          { label: "Root Cause Analysis", icon: Target, href: "/operations/problems/rca" },
          { label: "Known Errors", icon: Bug, href: "/operations/problems/known-errors" },
          { label: "Permanent Fixes", icon: Wrench, href: "/operations/problems/fixes" },
          { label: "Learnings", icon: Lightbulb, href: "/operations/problems/learnings" },
        ]
      },
      { 
        label: "Change Management", 
        icon: GitBranch, 
        href: "/operations/changes",
        children: [
          { label: "Change Dashboard", icon: LayoutDashboard, href: "/operations/changes" },
          { label: "Change Requests", icon: FileText, href: "/operations/changes/requests" },
          { label: "Change Approvals", icon: CheckSquare, href: "/operations/changes/approvals" },
          { label: "CAB Management", icon: Users, href: "/operations/changes/cab" },
          { label: "Release Calendar", icon: Calendar, href: "/operations/changes/calendar" },
        ]
      },
      { 
        label: "Service Requests", 
        icon: ShoppingCart, 
        href: "/operations/requests",
        children: [
          { label: "Service Catalog", icon: Layers, href: "/operations/requests/catalog" },
          { label: "Requests", icon: Inbox, href: "/operations/requests" },
          { label: "Approvals", icon: CheckSquare, href: "/operations/requests/approvals" },
          { label: "Fulfillment", icon: Truck, href: "/operations/requests/fulfillment" },
          { label: "Request Analytics", icon: BarChart3, href: "/operations/requests/analytics" },
        ]
      },
    ],
  },
  {
    title: "ASSETS",
    items: [
      { label: "Asset Inventory", icon: Package, href: "/assets/inventory" },
      { label: "Asset Ownership", icon: UserCheck, href: "/assets/ownership" },
      { label: "Asset Lifecycle", icon: Activity, href: "/assets/lifecycle" },
    ],
  },
  {
    title: "ANALYTICS",
    items: [
      { label: "Dashboard Analytics", icon: BarChart3, href: "/analytics" },
      { label: "Standard Reports", icon: FileText, href: "/analytics/reports" },
      { label: "Custom Reports", icon: PieChart, href: "/analytics/custom-reports" },
      { label: "Agent Performance", icon: TrendingUp, href: "/analytics/agent-performance" },
    ],
  },
  {
    title: "PLATFORM",
    items: [
      { label: "Integrations", icon: Link2, href: "/platform/integrations" },
      { label: "Audit Logs", icon: ScrollText, href: "/platform/audit" },
      { label: "Compliance", icon: Shield, href: "/platform/compliance" },
      { label: "Access Visibility", icon: Lock, href: "/platform/access" },
      { label: "Settings", icon: Settings, href: "/platform/settings" },
    ],
  },
]

function NavItemComponent({ item, isCollapsed, isActive, depth = 0 }: { item: NavItem; isCollapsed: boolean; isActive: boolean; depth?: number }) {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-sidebar-accent",
        isActive
          ? "bg-sidebar-accent text-sidebar-primary"
          : "text-sidebar-foreground/80 hover:text-sidebar-foreground",
        depth > 0 && "pl-9 text-[13px]"
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <AnimatePresence mode="wait">
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="flex-1 truncate"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
      {!isCollapsed && item.badge !== undefined && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="ml-auto rounded-full bg-sidebar-primary px-2 py-0.5 text-xs font-medium text-sidebar-primary-foreground"
        >
          {item.badge}
        </motion.span>
      )}
    </Link>
  )
}

function ModuleNavItem({ item, isCollapsed, pathname }: { item: NavItem; isCollapsed: boolean; pathname: string }) {
  const [isExpanded, setIsExpanded] = useState(() => {
    // Auto-expand if current path is within this module
    return pathname.startsWith(item.href)
  })
  const Icon = item.icon
  const hasChildren = item.children && item.children.length > 0
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

  if (!hasChildren) {
    return (
      <NavItemComponent item={item} isCollapsed={isCollapsed} isActive={pathname === item.href} />
    )
  }

  return (
    <div className="space-y-0.5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "hover:bg-sidebar-accent",
          isActive
            ? "bg-sidebar-accent/50 text-sidebar-primary"
            : "text-sidebar-foreground/80 hover:text-sidebar-foreground"
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {!isCollapsed && (
          <>
            <span className="flex-1 truncate text-left">{item.label}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 0 : -90 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-3 w-3" />
            </motion.div>
          </>
        )}
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && !isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-0.5 overflow-hidden border-l border-sidebar-border ml-5 pl-2"
          >
            {item.children?.map((child) => (
              <NavItemComponent
                key={child.href}
                item={child}
                isCollapsed={isCollapsed}
                isActive={pathname === child.href}
                depth={1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function NavSectionComponent({ section, isCollapsed, pathname }: { section: NavSection; isCollapsed: boolean; pathname: string }) {
  const [isOpen, setIsOpen] = useState(true)

  // Check if current section has an active item
  const hasActiveItem = section.items.some((item) => {
    if (pathname === item.href || pathname.startsWith(item.href + "/")) return true
    if (item.children) {
      return item.children.some((child) => pathname === child.href || pathname.startsWith(child.href + "/"))
    }
    return false
  })

  return (
    <div className="space-y-1">
      {section.title && !isCollapsed && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
            hasActiveItem
              ? "text-sidebar-foreground/70"
              : "text-sidebar-foreground/50 hover:text-sidebar-foreground/70"
          )}
        >
          <span>{section.title}</span>
          <motion.div
            animate={{ rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-3 w-3" />
          </motion.div>
        </button>
      )}
      <AnimatePresence initial={false}>
        {(isOpen || isCollapsed) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-0.5 overflow-hidden"
          >
            {section.items.map((item) => (
              <ModuleNavItem
                key={item.href}
                item={item}
                isCollapsed={isCollapsed}
                pathname={pathname}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar()
  const pathname = usePathname()

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 64 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-sidebar-border bg-sidebar"
    >
      {/* Logo Area */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-sidebar-border px-4">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
                <Siren className="h-4 w-4 text-sidebar-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-sidebar-foreground">
                IncidentOps
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        {isCollapsed && (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary mx-auto">
            <Siren className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-4 overflow-y-auto px-2 py-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-sidebar-border hover:scrollbar-thumb-sidebar-foreground/20">
        {navigation.map((section, idx) => (
          <NavSectionComponent
            key={section.title || idx}
            section={section}
            isCollapsed={isCollapsed}
            pathname={pathname}
          />
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="shrink-0 border-t border-sidebar-border p-2">
        <button
          onClick={toggleSidebar}
          className="flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </motion.aside>
  )
}
