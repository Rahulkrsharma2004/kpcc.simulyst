"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

const factChecks = [
  {
    claim: "KPCC announces new employment scheme for youth",
    status: "verified",
    source: "Alt News",
    url: "#",
  },
  {
    claim: "Opposition claims about guarantee scheme funding",
    status: "partially-true",
    source: "The Wire",
    url: "#",
  },
  {
    claim: "Viral video about infrastructure project",
    status: "false",
    source: "Washington Post Fact Checker",
    url: "#",
  },
]

export function FactCheckIntegration() {
  return (
    <div className="space-y-4">
      {factChecks.map((check, index) => (
        <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
          <div className="flex items-center gap-3">
            {check.status === "verified" && <CheckCircle className="h-4 w-4 text-green-500" />}
            {check.status === "partially-true" && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
            {check.status === "false" && <XCircle className="h-4 w-4 text-red-500" />}
            <div>
              <p className="text-sm font-medium text-pretty">{check.claim}</p>
              <p className="text-xs text-muted-foreground">Source: {check.source}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={
                check.status === "verified"
                  ? "default"
                  : check.status === "partially-true"
                    ? "secondary"
                    : "destructive"
              }
              className="text-xs"
            >
              {check.status.replace("-", " ")}
            </Badge>
            <Button variant="ghost" size="sm" className="h-6 px-2">
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
