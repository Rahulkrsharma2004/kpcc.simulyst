"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, MessageSquare, Users, MapPin, ArrowUp, ArrowDown, Heart, Share } from "lucide-react"

export function BJPTracker() {
  const postSentimentData = [
    { source: "BJP Official", positive: 15, negative: 45, neutral: 40 },
    { source: "BJP Leaders", positive: 20, negative: 50, neutral: 30 },
    { source: "Party Accounts", positive: 10, negative: 60, neutral: 30 },
  ]

  const kpccMentions = [
    { target: "KPCC", count: 127, trend: "up" },
    { target: "Siddaramaiah", count: 89, trend: "up" },
    { target: "DK Shivakumar", count: 76, trend: "down" },
    { target: "Guarantee Schemes", count: 156, trend: "up" },
  ]

  const attackTopics = [
    { keyword: "Corruption", mentions: 234, trend: "up", intensity: 85 },
    { keyword: "Farmer Schemes", mentions: 189, trend: "up", intensity: 72 },
    { keyword: "Power Cuts", mentions: 167, trend: "down", intensity: 68 },
    { keyword: "Unemployment", mentions: 145, trend: "up", intensity: 61 },
    { keyword: "Price Rise", mentions: 123, trend: "down", intensity: 55 },
  ]

  const viralPosts = [
    {
      author: "@BJP4Karnataka",
      content: "KPCC's promises vs reality - where are the jobs they promised?",
      engagement: { likes: 2340, retweets: 890, comments: 456 },
      sentiment: "negative",
    },
    {
      author: "@BSBommai",
      content: "Siddaramaiah's corruption scandals continue to surface...",
      engagement: { likes: 1890, retweets: 670, comments: 234 },
      sentiment: "negative",
    },
  ]

  const leaderBreakdown = [
    { leader: "BS Bommai", posts: 45, engagement: 12500, focus: "Economic policies" },
    { leader: "Tejasvi Surya", posts: 38, engagement: 18900, focus: "Youth issues" },
    { leader: "CT Ravi", posts: 29, engagement: 8700, focus: "Rural development" },
    { leader: "Shobha Karandlaje", posts: 22, engagement: 6800, focus: "Women's issues" },
  ]

  const regionalSpread = [
    { region: "Bengaluru", intensity: 85, focus: "Urban issues" },
    { region: "Mysuru", intensity: 72, focus: "Tourism impact" },
    { region: "Kalaburagi", intensity: 68, focus: "Agricultural policies" },
    { region: "Hubli-Dharwad", intensity: 55, focus: "Industrial development" },
  ]

  return (
    <div className="space-y-6">
      {/* Post Sentiment by Source */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Post Sentiment by Source
          </CardTitle>
          <CardDescription>
            Positive / Negative / Neutral breakdown of BJP posts, leaders, and official accounts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {postSentimentData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.source}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.positive + item.negative + item.neutral} posts
                  </span>
                </div>
                <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
                  <div
                    className="bg-green-500"
                    style={{ width: `${(item.positive / (item.positive + item.negative + item.neutral)) * 100}%` }}
                  />
                  <div
                    className="bg-red-500"
                    style={{ width: `${(item.negative / (item.positive + item.negative + item.neutral)) * 100}%` }}
                  />
                  <div
                    className="bg-gray-400"
                    style={{ width: `${(item.neutral / (item.positive + item.negative + item.neutral)) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span className="text-green-600">Positive: {item.positive}%</span>
                  <span className="text-red-600">Negative: {item.negative}%</span>
                  <span className="text-gray-600">Neutral: {item.neutral}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Mentions of KPCC/Leaders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Mentions of KPCC/Leaders
            </CardTitle>
            <CardDescription>Count of times KPCC, leaders, or schemes are mentioned</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {kpccMentions.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{item.target}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{item.count}</Badge>
                    {item.trend === "up" ? (
                      <ArrowUp className="h-4 w-4 text-red-500" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trending Attack Topics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Trending Attack Topics
            </CardTitle>
            <CardDescription>Top 5 keywords BJP is pushing against KPCC</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {attackTopics.map((topic, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{topic.keyword}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{topic.mentions}</Badge>
                      {topic.trend === "up" ? (
                        <ArrowUp className="h-4 w-4 text-red-500" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </div>
                  <Progress value={topic.intensity} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Viral Opposition Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Top Viral Opposition Posts
          </CardTitle>
          <CardDescription>BJP posts with highest engagement (likes, retweets, shares)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {viralPosts.map((post, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-blue-600">{post.author}</span>
                  <Badge variant={post.sentiment === "negative" ? "destructive" : "secondary"}>{post.sentiment}</Badge>
                </div>
                <p className="text-sm">{post.content}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {post.engagement.likes.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Share className="h-4 w-4" />
                    {post.engagement.retweets.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {post.engagement.comments.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Leader-Wise Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Leader-Wise Breakdown
            </CardTitle>
            <CardDescription>Which BJP leaders are most vocal on KPCC</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderBreakdown.map((leader, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{leader.leader}</span>
                    <Badge variant="outline">{leader.posts} posts</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Focus: {leader.focus}</span>
                      <span>{leader.engagement.toLocaleString()} engagement</span>
                    </div>
                  </div>
                  <Progress value={(leader.engagement / 20000) * 100} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geographic Spread */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Geographic Spread (Regional Breakdown)
            </CardTitle>
            <CardDescription>Where the attacks are focused (Bengaluru, Mysuru, Kalaburagi)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalSpread.map((region, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{region.region}</span>
                    <Badge variant="outline">{region.intensity}% intensity</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Focus: {region.focus}</div>
                  <Progress value={region.intensity} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
