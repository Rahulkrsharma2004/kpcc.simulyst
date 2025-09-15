"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown } from "lucide-react"

const guaranteeSchemes = [
  {
    name: "Anna Bhagya",
    sentiment: 78,
    mentions: 1250,
    trend: "up",
    description: "Free rice distribution scheme",
  },
  {
    name: "Gruha Lakshmi",
    sentiment: 72,
    mentions: 980,
    trend: "up",
    description: "Financial assistance to women heads of families",
  },
  {
    name: "Shakti",
    sentiment: 68,
    mentions: 750,
    trend: "up",
    description: "Free bus travel for women",
  },
  {
    name: "Yuva Nidhi",
    sentiment: 45,
    mentions: 420,
    trend: "down",
    description: "Unemployment allowance for graduates",
  },
]

export function GuaranteeTracker() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {guaranteeSchemes.map((scheme) => (
        <Card key={scheme.name}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center justify-between">
              {scheme.name}
              {scheme.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
            </CardTitle>
            <p className="text-xs text-muted-foreground">{scheme.description}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Sentiment Score</span>
                <span className="font-medium">{scheme.sentiment}%</span>
              </div>
              <Progress value={scheme.sentiment} className="h-2" />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Mentions: {scheme.mentions.toLocaleString()}</span>
              <span className={scheme.trend === "up" ? "text-green-600" : "text-red-600"}>
                {scheme.trend === "up" ? "↗" : "↘"} Trending {scheme.trend}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
