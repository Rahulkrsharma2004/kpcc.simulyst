"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Shield, Search, Database, FileText, Link, CheckCircle, AlertTriangle, ExternalLink, Globe } from "lucide-react"

export function ToolsDropdown() {
  const [factCheckUrl, setFactCheckUrl] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [verificationResults, setVerificationResults] = useState<any[]>([])

  const handleFactCheck = () => {
    // Simulate fact-checking process
    const mockResults = [
      {
        source: "Alt News",
        status: "verified",
        url: "https://altnews.in/fact-check-example",
        summary: "Claim verified as accurate",
      },
      {
        source: "The Wire",
        status: "false",
        url: "https://thewire.in/fact-check-example",
        summary: "Claim found to be misleading",
      },
    ]
    setVerificationResults(mockResults)
  }

  const handleRepositorySearch = () => {
    // Simulate repository search
    console.log("Searching repository for:", searchQuery)
  }

  return (
    <div className="space-y-6">
      {/* Fact Checker Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Fact Checker
          </CardTitle>
          <CardDescription>Verify claims and posts against trusted fact-checking sources</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter URL or claim to fact-check..."
              value={factCheckUrl}
              onChange={(e) => setFactCheckUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleFactCheck} className="shrink-0">
              <Shield className="h-4 w-4 mr-2" />
              Verify
            </Button>
          </div>

          {verificationResults.length > 0 && (
            <div className="space-y-3">
              <Separator />
              <h4 className="font-medium">Verification Results:</h4>
              {verificationResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {result.status === "verified" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    )}
                    <div>
                      <p className="font-medium">{result.source}</p>
                      <p className="text-sm text-muted-foreground">{result.summary}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={result.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Repository Search Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Search Repository
          </CardTitle>
          <CardDescription>Search through historical data and archived content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Search posts, mentions, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleRepositorySearch} className="shrink-0">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            Search across {new Intl.NumberFormat().format(125000)}+ archived posts and mentions
          </div>
        </CardContent>
      </Card>

      {/* Quick Links Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5 text-primary" />
            Quick Links
          </CardTitle>
          <CardDescription>Fast access to external verification and news sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="https://altnews.in" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-2" />
                Alt News
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://thewire.in" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-2" />
                The Wire
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://washingtonpost.com" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-2" />
                Washington Post
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://factcheck.org" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-2" />
                FactCheck.org
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Export Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Data Export
          </CardTitle>
          <CardDescription>Export dashboard data for external analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Export JSON
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
