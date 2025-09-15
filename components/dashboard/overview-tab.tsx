import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SentimentChart } from "@/components/sentiment-chart"
import { TrendingTopics } from "@/components/trending-topics"
import { ViralPosts } from "@/components/viral-posts"
import { RegionalBreakdown } from "@/components/regional-breakdown"
import { MediaMentions } from "@/components/media-mentions"
import { KeywordExplorer } from "@/components/keyword-explorer"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { TrendingUp, MessageSquare, MapPin, Newspaper, Search } from "lucide-react"
import { format } from "date-fns"
import type { FilterState } from "@/types/dashboard"

interface OverviewTabProps {
  filters: FilterState
}

export function OverviewTab({ filters }: OverviewTabProps) {
  const dateRangeText =
    filters.dateFrom && filters.dateTo
      ? `(${format(filters.dateFrom, "MMM dd")} - ${format(filters.dateTo, "MMM dd")})`
      : "(Select date range)"

  return (
    <div className="space-y-6">
      {/* Top Row - Sentiment & Trending */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Public Sentiment Trend
            </CardTitle>
            <CardDescription>Daily sentiment analysis around KPCC {dateRangeText}</CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorBoundary>
              <SentimentChart timeframe="custom" filters={filters} />
            </ErrorBoundary>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Top 5 Trending Topics
            </CardTitle>
            <CardDescription>Keywords and issues rising/falling in mentions</CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorBoundary>
              <TrendingTopics filters={filters} />
            </ErrorBoundary>
          </CardContent>
        </Card>
      </div>

      {/* Second Row - Viral Posts & Regional */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Viral Post Highlights</CardTitle>
            <CardDescription>Most engaging positive and negative posts today</CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorBoundary>
              <ViralPosts filters={filters} />
            </ErrorBoundary>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Regional Breakdown
            </CardTitle>
            <CardDescription>Sentiment analysis by Karnataka districts</CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorBoundary>
              <RegionalBreakdown />
            </ErrorBoundary>
          </CardContent>
        </Card>
      </div>

      {/* Third Row - Media & Keyword Explorer */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-primary" />
              Media Mentions Dashboard
            </CardTitle>
            <CardDescription>Coverage from newspapers, journalists, and influencers</CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorBoundary>
              <MediaMentions />
            </ErrorBoundary>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Keyword Explorer
            </CardTitle>
            <CardDescription>Search any term to see sentiment and mentions</CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorBoundary>
              <KeywordExplorer />
            </ErrorBoundary>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
