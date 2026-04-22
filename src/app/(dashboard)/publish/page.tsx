'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { seoScoresDemo } from "@/lib/demo-data"
import { Globe, ArrowRight, Loader2, Target } from 'lucide-react'

const platforms = [
  { id: 'medium', name: 'Medium', color: 'bg-black text-white hover:bg-black/80', desc: 'Narrative-driven thought leadership.' },
  { id: 'linkedin', name: 'LinkedIn', color: 'bg-[#0a66c2] text-white hover:bg-[#0a66c2]/80', desc: 'B2B professional engagement.' },
  { id: 'wordpress', name: 'WordPress', color: 'bg-[#21759b] text-white hover:bg-[#21759b]/80', desc: 'Standard technical SEO format.' },
  { id: 'substack', name: 'Substack', color: 'bg-[#ff6719] text-white hover:bg-[#ff6719]/80', desc: 'Direct newsletter formatting.' },
  { id: 'devto', name: 'Dev.to', color: 'bg-gray-800 text-white hover:bg-gray-800/80', desc: 'Developer community markdown.' },
]

export default function PublishPage() {
  const [selectedBlog, setSelectedBlog] = useState(seoScoresDemo[0])
  const [isAdapting, setIsAdapting] = useState(false)
  const [adaptedContent, setAdaptedContent] = useState<any>(null)
  const [activePlatform, setActivePlatform] = useState(platforms[0].id)

  const handleAdapt = (platformId: string) => {
    setActivePlatform(platformId)
    setIsAdapting(true)
    setAdaptedContent(null)
    
    setTimeout(() => {
      // Mock adaptation data
      let adjustedTitle = selectedBlog.title
      let adjustedIntro = ''
      let formattingNote = ''

      if (platformId === 'linkedin') {
         adjustedTitle = `🚨 ${selectedBlog.title} [My thoughts on Martech in 2026]`
         adjustedIntro = `I've been looking at automated SEO content generation tools and frankly, the landscape is changing fast. Here is why you need to switch.`
         formattingNote = 'Short punchy paragraphs. Heavy emojis. Direct engagement questions at the end.'
      } else if (platformId === 'medium') {
         adjustedTitle = `The Future of Agencies: ${selectedBlog.title}`
         adjustedIntro = `In an era where every pixel is measured... content remains king. But what if the king was automated? A deep dive into modern content engineering.`
         formattingNote = 'Narrative hook, long-form flowing paragraphs, embedded pull quotes.'
      } else if (platformId === 'devto') {
         adjustedTitle = `Building SEO automation: My take on ${selectedBlog.title}`
         adjustedIntro = `Hey devs, ever wonder how programmatic SEO works under the hood? Let's break down the semantic clustering.`
         formattingNote = 'Code blocks for schema, markdown headers, casual tone.'
      } else {
         adjustedTitle = selectedBlog.title + ' (Standard Version)'
         adjustedIntro = `Standard SEO optimized introduction for broad indexing.`
         formattingNote = 'H2, H3 tags respected. Meta descriptions optimized.'
      }

      setAdaptedContent({
        platform: platformId,
        title: adjustedTitle,
        intro: adjustedIntro,
        formattingNote,
        tags: platformId === 'linkedin' ? '#SEO #Martech #Startups' : 'seo, automation, marketing'
      })
      setIsAdapting(false)
    }, 1200)
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Publishing Adaptation Center</h1>
        <p className="text-muted-foreground mt-1 text-lg">One click formatting, tone adjustments, and CTA mapping for your approved blogging platforms.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Target Platform</h3>
          <div className="space-y-3">
             {platforms.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleAdapt(p.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${activePlatform === p.id ? 'ring-2 ring-primary border-primary shadow-sm bg-primary/5' : 'hover:bg-muted'}`}
                >
                   <div className="font-bold">{p.name}</div>
                   <div className="text-xs text-muted-foreground mt-1">{p.desc}</div>
                </button>
             ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card className="glass-card h-full min-h-[500px] flex flex-col shadow-lg border-primary/20">
            <CardHeader className="border-b bg-muted/20 pb-6">
              <div className="flex justify-between items-start">
                <div>
                   <CardDescription className="mb-2">Currently Adapting Source Asset:</CardDescription>
                   <CardTitle className="text-lg">{selectedBlog.title}</CardTitle>
                </div>
                 <Badge variant="outline" className="border-primary text-primary">Ready for Adaptation</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0 flex flex-col justify-center relative bg-muted/5">
              {isAdapting ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm z-10">
                   <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
                   <p className="font-medium">Reprompting AI for {platforms.find(p => p.id === activePlatform)?.name} tone and structure...</p>
                </div>
              ) : null}

              {adaptedContent ? (
                <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4">
                   <div className="p-4 bg-muted/30 border rounded-lg flex items-start gap-4">
                      <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-sm mb-1">AI Adaptation Rule Applied</div>
                        <div className="text-sm text-muted-foreground">{adaptedContent.formattingNote}</div>
                      </div>
                   </div>

                   <div className="border bg-background shadow-xl rounded-lg p-8 max-w-2xl mx-auto space-y-6">
                      <h1 className="text-3xl font-extrabold leading-tight">{adaptedContent.title}</h1>
                      <div className="text-sm text-muted-foreground border-b pb-4 flex gap-4">
                         <span>By Demo User</span>
                         <span>•</span>
                         <span>Just now</span>
                      </div>
                      <p className="text-lg leading-relaxed">{adaptedContent.intro}</p>
                      
                      <div className="w-full h-32 bg-muted/50 rounded-lg border-2 border-dashed flex items-center justify-center text-muted-foreground text-sm">
                        [ Original Content Body Translated into {platforms.find(p => p.id === activePlatform)?.name} Native Formatting ]
                      </div>

                      <div className="pt-4 border-t text-sm font-medium text-blue-500">
                         Tags: {adaptedContent.tags}
                      </div>
                   </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 opacity-50">
                   <Globe className="w-16 h-16 text-muted-foreground mb-4" />
                   <p className="font-medium text-lg">Select a platform on the left to adapt the content.</p>
                   <p className="text-sm">We will apply NLP heuristics to modify paragraph length, headline voice, and CTA strength.</p>
                </div>
              )}
            </CardContent>
            {adaptedContent && (
              <CardFooter className="border-t p-6 bg-muted/10 justify-between items-center">
                 <Button variant="outline">Regenerate Adaptation</Button>
                 <Button className={platforms.find(p => p.id === activePlatform)?.color}>
                    Publish to {platforms.find(p => p.id === activePlatform)?.name} Directly <ArrowRight className="w-4 h-4 ml-2" />
                 </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
