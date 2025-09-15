"use client"

import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardFilters } from "@/components/dashboard/dashboard-filters"
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs"
import { OverviewTab } from "@/components/dashboard/overview-tab"
import { GuaranteeTracker } from "@/components/guarantee-tracker"
import { ChatWindow } from "@/components/chat-window"
import { ToolsDropdown } from "@/components/tools-dropdown"
import { BJPTracker } from "@/components/bjp-tracker"
import { useDashboardState } from "@/hooks/use-dashboard-state"
import { Shield, Bot, Wrench } from "lucide-react"

export default function KPCCDashboard() {
  const { state, updateFilters, setActiveTab } = useDashboardState()

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardFilters filters={state.filters} onFiltersChange={updateFilters} />

      <div className="container mx-auto px-4 py-6">
        <Tabs value={state.activeTab} onValueChange={setActiveTab} className="space-y-6">
          <DashboardTabs activeTab={state.activeTab} onTabChange={setActiveTab} />

          <TabsContent value="overview" className="space-y-6">
            <OverviewTab filters={state.filters} />
          </TabsContent>

          <TabsContent value="bjp" className="space-y-6">
            <BJPTracker />
          </TabsContent>

          <TabsContent value="guarantees" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Guarantee Scheme Tracker
                </CardTitle>
                <CardDescription>
                  Track sentiment around flagship guarantees (Anna Bhagya, Gruha Lakshmi, Shakti, etc.)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GuaranteeTracker />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Dashboard Tools
                </CardTitle>
                <CardDescription>
                  Utility tools for fact-checking, data search, and external verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ToolsDropdown />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  AI-Powered Q&A
                </CardTitle>
                <CardDescription>
                  Ask questions about sentiment trends, specific topics, or get data insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChatWindow />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
