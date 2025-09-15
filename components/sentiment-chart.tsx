"use client"

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  Legend,
} from "recharts"
import { useSentimentData } from "@/hooks/use-sentiment-data"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import type { FilterState } from "@/types/dashboard"

interface SentimentChartProps {
  timeframe: string
  filters?: FilterState
}

export function SentimentChart({
  timeframe,
  filters = { source: "all", region: "all" },
}: SentimentChartProps) {
  const { data, loading, error } = useSentimentData(filters)

  if (loading) {
    return (
      <div className="h-80 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="date" className="text-xs" />
          <YAxis
            className="text-xs"
            label={{ value: "% of Posts", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            formatter={(value: number, name: string) => [
              `${value}%`,
              name.charAt(0).toUpperCase() + name.slice(1),
            ]}
          />
          <Legend />

          {/* Positive → Green */}
          <Line
            type="monotone"
            dataKey="positive"
            stroke="green"
            strokeWidth={4}
            dot={{ fill: "green", strokeWidth: 2, r: 4 }}
            name="Positive"
          />

          {/* Negative → Red */}
          <Line
            type="monotone"
            dataKey="negative"
            stroke="red"
            strokeWidth={4}
            dot={{ fill: "red", strokeWidth: 2, r: 4 }}
            name="Negative"
          />

          {/* Neutral → Gray */}
          <Line
            type="monotone"
            dataKey="neutral"
            stroke="gray"
            strokeWidth={4}
            dot={{ fill: "gray", strokeWidth: 2, r: 4 }}
            name="Neutral"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
