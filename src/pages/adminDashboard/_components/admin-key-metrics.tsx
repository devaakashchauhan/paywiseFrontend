"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"

const metrics = [
  {
    title: "Total Users",
    value: "2,543",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Total Transactions",
    value: "18,492",
    change: "+8.2%",
    icon: Activity,
    color: "text-green-500",
  },
  {
    title: "Total Income",
    value: "$524,890",
    change: "+23.1%",
    icon: TrendingUp,
    color: "text-emerald-500",
  },
  {
    title: "Total Expenses",
    value: "$312,450",
    change: "+5.4%",
    icon: DollarSign,
    color: "text-orange-500",
  },
]

export function AdminKeyMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <Icon className={`w-4 h-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <p className="text-xs text-green-600 mt-1">{metric.change} from last month</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
