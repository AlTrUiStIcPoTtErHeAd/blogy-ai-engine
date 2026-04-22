'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { seoScoresDemo } from "@/lib/demo-data"
import { FileText, Eye, Edit3, Trash2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      <div className="flex justify-between items-center bg-muted/30 p-6 rounded-xl border">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Generated Blogs Library</h1>
          <p className="text-muted-foreground">Manage your AI-generated assets, view scores, or push to publishing.</p>
        </div>
        <Link href="/engine">
          <Button className="h-12 px-6">Generate New Blog</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {seoScoresDemo.map((blog) => (
          <Card key={blog.id} className="flex flex-col hover:border-primary/50 transition-colors shadow-sm">
            <CardHeader className="pb-4">
               <div className="flex justify-between items-start mb-2">
                 <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">SEO Score: {blog.score}</Badge>
                 <span className="text-xs text-muted-foreground">Updated 2h ago</span>
               </div>
              <CardTitle className="text-xl leading-bold line-clamp-2" title={blog.title}>{blog.title}</CardTitle>
              <CardDescription className="line-clamp-1 mt-2">Keywords: {blog.keywords}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm mt-2 p-4 bg-muted/20 rounded-lg">
                <div>
                  <div className="text-muted-foreground mb-1">Snippet Ready</div>
                  <div className="font-semibold text-green-600">{blog.snippetReady ? 'Yes (H2+List)' : 'No'}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Humanizer Engine</div>
                  <div className="font-semibold text-blue-600">{blog.naturalness}/100</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-3 border-t pt-6 bg-muted/5">
              <Button variant="outline" className="w-full"><Edit3 className="w-4 h-4 mr-2" /> Quick Edit</Button>
              <Link href="/publish" className="w-full">
                <Button className="w-full">Adapt & Publish <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
