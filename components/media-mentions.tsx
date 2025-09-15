"use client"

const mediaData = [
  { source: "The Hindu", mentions: 45, sentiment: "positive" },
  { source: "Deccan Herald", mentions: 38, sentiment: "neutral" },
  { source: "Times of India", mentions: 32, sentiment: "positive" },
  { source: "Indian Express", mentions: 28, sentiment: "neutral" },
  { source: "News18", mentions: 25, sentiment: "negative" },
  { source: "TV9", mentions: 22, sentiment: "positive" },
]

export function MediaMentions() {
  return (
    <div className="space-y-3">
      {mediaData.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="font-medium text-sm">{item.source}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{item.mentions} mentions</span>
            <div
              className={`w-2 h-2 rounded-full ${
                item.sentiment === "positive"
                  ? "bg-green-500"
                  : item.sentiment === "negative"
                    ? "bg-red-500"
                    : "bg-yellow-500"
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}
