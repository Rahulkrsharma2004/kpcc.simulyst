import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Shield, Wrench, Bot } from "lucide-react"

interface DashboardTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function DashboardTabs({ activeTab, onTabChange }: DashboardTabsProps) {
  return (
    <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 lg:w-fit lg:grid-cols-5">
      <TabsTrigger
        value="overview"
        className="flex items-center gap-2 cursor-pointer rounded-md transition hover:border hover:border-muted-foreground hover:shadow-sm"
      >
        <BarChart3 className="h-4 w-4" />
        Overview
      </TabsTrigger>

      <TabsTrigger
        value="bjp"
        className="flex items-center gap-2 cursor-pointer rounded-md transition hover:border hover:border-muted-foreground hover:shadow-sm"
      >
        <TrendingUp className="h-4 w-4" />
        BJP Tracker
      </TabsTrigger>

      <TabsTrigger
        value="guarantees"
        className="flex items-center gap-2 cursor-pointer rounded-md transition hover:border hover:border-muted-foreground hover:shadow-sm"
      >
        <Shield className="h-4 w-4" />
        Guarantees
      </TabsTrigger>

      <TabsTrigger
        value="tools"
        className="flex items-center gap-2 cursor-pointer rounded-md transition hover:border hover:border-muted-foreground hover:shadow-sm"
      >
        <Wrench className="h-4 w-4" />
        Tools
      </TabsTrigger>

      <TabsTrigger
        value="chat"
        className="flex items-center gap-2 cursor-pointer rounded-md transition hover:border hover:border-muted-foreground hover:shadow-sm"
      >
        <Bot className="h-4 w-4" />
        AI Chat
      </TabsTrigger>
    </TabsList>
  )
}
