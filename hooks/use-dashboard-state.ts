"use client"

import { useState, useCallback } from "react"
import type { DashboardState, FilterState } from "@/types/dashboard"

const initialFilters: FilterState = {
  source: "all",
  region: "all",
  dateFrom: undefined,
  dateTo: undefined,
}

const initialState: DashboardState = {
  filters: initialFilters,
  activeTab: "overview",
  loading: false,
  error: undefined,
}

export function useDashboardState() {
  const [state, setState] = useState<DashboardState>(initialState)

  const updateFilters = useCallback((newFilters: Partial<FilterState>) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...newFilters },
    }))
  }, [])

  const setActiveTab = useCallback((tab: string) => {
    setState((prev) => ({ ...prev, activeTab: tab }))
  }, [])

  const setLoading = useCallback((loading: boolean) => {
    setState((prev) => ({ ...prev, loading }))
  }, [])

  const setError = useCallback((error?: string) => {
    setState((prev) => ({ ...prev, error }))
  }, [])

  const resetFilters = useCallback(() => {
    setState((prev) => ({ ...prev, filters: initialFilters }))
  }, [])

  return {
    state,
    updateFilters,
    setActiveTab,
    setLoading,
    setError,
    resetFilters,
  }
}
