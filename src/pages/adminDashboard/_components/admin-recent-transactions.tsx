"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const transactions = [
  { id: 1, user: "John Doe", amount: "$1,200", type: "income", date: "2 hours ago" },
  { id: 2, user: "Jane Smith", amount: "$450", type: "expense", date: "4 hours ago" },
  { id: 3, user: "Mike Johnson", amount: "$2,100", type: "income", date: "6 hours ago" },
  { id: 4, user: "Sarah Wilson", amount: "$320", type: "expense", date: "8 hours ago" },
  { id: 5, user: "Tom Brown", amount: "$890", type: "income", date: "10 hours ago" },
]

export function RecentTransactions() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
              <div className="flex-1">
                <p className="font-medium text-foreground">{tx.user}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={tx.type === "income" ? "default" : "secondary"}>{tx.type}</Badge>
                <span className={`font-semibold ${tx.type === "income" ? "text-green-600" : "text-orange-600"}`}>
                  {tx.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
