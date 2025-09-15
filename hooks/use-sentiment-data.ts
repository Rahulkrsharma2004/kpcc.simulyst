"use client"

import { useState, useEffect, useCallback } from "react"
import type { SentimentData, FilterState } from "@/types/dashboard"

// Mock data generator for demonstration
const generateMockSentimentData = (filters: FilterState): SentimentData[] => {
  const data: SentimentData[] = []
  const startDate = filters.dateFrom || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  const endDate = filters.dateTo || new Date()

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    data.push({
      date: d.toISOString().split("T")[0],
      positive: Math.floor(Math.random() * 20) + 40,
      negative: Math.floor(Math.random() * 20) + 10,
      neutral: Math.floor(Math.random() * 10) + 25,
    })
  }

  return data
}

export function useSentimentData(filters: FilterState) {
  const [data, setData] = useState<SentimentData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(undefined)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      const mockData = generateMockSentimentData(filters)
      setData(mockData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch sentiment data")
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}
