"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, MessageCircle, Share, ExternalLink, AlertCircle } from "lucide-react"
import { useViralPosts } from "@/hooks/use-viral-posts"
import { formatDistanceToNow } from "date-fns"
import type { FilterState, ViralPost, Platform } from "@/types/dashboard"

interface ViralPostsProps {
  filters?: FilterState
}

function PlatformBadge({ platform }: { platform: Platform }) {
  const platformLabels: Record<Platform, string> = {
    x: "X",
    instagram: "Instagram",
    facebook: "Facebook",
    youtube: "YouTube",
    newspapers: "News",
  }

  return (
    <Badge variant="outline" className="text-xs">
      {platformLabels[platform]}
    </Badge>
  )
}

function PostCard({ post }: { post: ViralPost }) {
  const borderColor = post.sentiment === "positive" ? "border-l-green-500" : "border-l-red-500"
  const badgeVariant = post.sentiment === "positive" ? "default" : "destructive"

  return (
    <Card className={`border-l-4 ${borderColor}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <Badge variant={badgeVariant} className="text-xs">
            {post.sentiment === "positive" ? "Positive" : "Negative"}
          </Badge>
          <PlatformBadge platform={post.platform} />
        </div>

        <p className="text-sm mb-3 text-pretty">{post.content}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {post.engagement.likes.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              {post.engagement.comments}
            </span>
            <span className="flex items-center gap-1">
              <Share className="h-3 w-3" />
              {post.engagement.shares}
            </span>
          </div>
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
            <ExternalLink className="h-3 w-3 mr-1" />
            View
          </Button>
        </div>

        <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
          <span>Source: {post.author}</span>
          <span>{formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export function ViralPosts({ filters = { source: "all", region: "all" } }: ViralPostsProps) {
  const { data, loading, error } = useViralPosts(filters)

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <Card key={i} className="border-l-4">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-12" />
              </div>
              <Skeleton className="h-12 w-full mb-3" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <Skeleton className="h-6 w-12" />
              </div>
            </CardContent>
          </Card>
        ))}
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
    <div className="space-y-4">
      {data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
