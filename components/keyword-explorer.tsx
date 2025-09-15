"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ExternalLink } from "lucide-react"

export function KeywordExplorer() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<any[]>([])

  const handleSearch = () => {
    // Mock search results
    setResults([
      {
        keyword: searchTerm || "power cuts",
        sentiment: "negative",
        mentions: 340,
        sources: ["X", "Facebook", "News"],
        topPost: "Frequent power cuts affecting daily life in Bangalore",
      },
    ])
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Search for keywords (e.g., 'power cuts', 'Anna Bhagya')"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button onClick={handleSearch} size="sm">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((result, index) => (
            <div key={index} className="p-3 rounded-lg border bg-card/50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">"{result.keyword}"</h4>
                <Badge variant={result.sentiment === "positive" ? "default" : "destructive"}>{result.sentiment}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{result.topPost}</p>
              <div className="flex items-center justify-between text-xs">
                <span>
                  {result.mentions} mentions across {result.sources.join(", ")}
                </span>
                <Button variant="ghost" size="sm" className="h-6 px-2">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
