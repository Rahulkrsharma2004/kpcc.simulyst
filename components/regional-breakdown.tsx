"use client"

const regionData = [
  { region: "Bangalore Urban", positive: 75, negative: 15, neutral: 10 },
  { region: "Mysore", positive: 68, negative: 20, neutral: 12 },
  { region: "Hubli-Dharwad", positive: 72, negative: 18, neutral: 10 },
  { region: "Mangalore", positive: 70, negative: 22, neutral: 8 },
  { region: "Belgaum", positive: 65, negative: 25, neutral: 10 },
]

export function RegionalBreakdown() {
  return (
    <div className="space-y-4">
      {regionData.map((region) => (
        <div key={region.region} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{region.region}</span>
            <span className="text-xs text-muted-foreground">{region.positive}% positive</span>
          </div>
          <div className="flex gap-1">
            <div className="flex-1 bg-muted rounded-full overflow-hidden">
              <div className="flex h-2">
                <div className="bg-green-500" style={{ width: `${region.positive}%` }} />
                <div className="bg-gray-400" style={{ width: `${region.neutral}%` }} />
                <div className="bg-red-500" style={{ width: `${region.negative}%` }} />
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Positive: {region.positive}%</span>
            <span>Neutral: {region.neutral}%</span>
            <span>Negative: {region.negative}%</span>
          </div>
        </div>
      ))}
    </div>
  )
}
