'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { Activity, Target, PenTool, TrendingUp, Search, Zap, CheckCircle2, AlertTriangle } from 'lucide-react'
import { seoScoresDemo, keywordClustersDemo, auditIssuesDemo } from "@/lib/demo-data"

const trafficData = [
  { name: 'Mon', traffic: 400 },
  { name: 'Tue', traffic: 300 },
  { name: 'Wed', traffic: 550 },
  { name: 'Thu', traffic: 450 },
  { name: 'Fri', traffic: 700 },
  { name: 'Sat', traffic: 600 },
  { name: 'Sun', traffic: 800 },
]

export default function DashboardOverview() {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2 text-lg">Your high-level metrics across AI Blogs, SEO validation, and Product UX.</p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card border-l-4 border-l-primary shadow-sm hover:-translate-y-1 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Blogs Generated</CardTitle>
            <PenTool className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">128</div>
            <p className="text-xs text-muted-foreground mt-1">+14 this week</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-l-4 border-l-blue-500 shadow-sm hover:-translate-y-1 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Avg SEO Score</CardTitle>
            <Target className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">92/100</div>
            <p className="text-xs text-muted-foreground mt-1">+2% from last month</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-l-4 border-l-amber-500 shadow-sm hover:-translate-y-1 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Audit Issues Found</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{auditIssuesDemo.length}</div>
            <p className="text-xs text-muted-foreground mt-1">2 critical UX bugs</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-l-4 border-l-green-500 shadow-sm hover:-translate-y-1 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Snippet Readiness</CardTitle>
            <Zap className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground mt-1">High conversion potential</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
        {/* Chart */}
        <Card className="glass-card col-span-1 lg:col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle>Projected Traffic Growth</CardTitle>
            <CardDescription>Based on generative AI content and SERP gap closures.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip />
                <Line type="monotone" dataKey="traffic" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Keyword Clusters */}
        <Card className="glass-card col-span-1 lg:col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle>Top Keyword Clusters</CardTitle>
            <CardDescription>Highest opportunity segments identified.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {keywordClustersDemo.slice(0, 4).map((cluster, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none flex items-center gap-2">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      {cluster.clusterName}
                    </p>
                    <p className="text-xs text-muted-foreground ml-6">Vol: {cluster.searchVolume} • {cluster.intent}</p>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                    cluster.difficulty === 'Hard' ? 'bg-red-100 text-red-700' :
                    cluster.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {cluster.difficulty}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card shadow-sm">
          <CardHeader>
            <CardTitle>Recent Seeded Blogs</CardTitle>
            <CardDescription>Latest AI-generated articles ready for review.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {seoScoresDemo.map((blog) => (
                <div key={blog.id} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h4 className="font-semibold text-sm line-clamp-1">{blog.title}</h4>
                    <p className="text-xs text-muted-foreground">Score: {blog.score}/100 • AI Detect: {blog.aiDetection}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-sm">
          <CardHeader>
            <CardTitle>Urgent Product Audit Issues</CardTitle>
            <CardDescription>Fixes needed to improve onboarding & SEO.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
              {auditIssuesDemo.slice(0, 3).map((issue) => (
                <div key={issue.id} className="flex flex-col gap-1 p-3 rounded-lg border-l-4 border-l-destructive bg-muted/10">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">{issue.title}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">
                      {issue.category}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Impact: {issue.impact} • Fix: {issue.fix}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
