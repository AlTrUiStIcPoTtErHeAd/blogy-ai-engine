'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Loader2, CheckCircle2, Bot, LayoutTemplate, Link2, Target, Type, Sparkles, FileText, CheckSquare, ShieldAlert } from 'lucide-react'
import { seoScoresDemo } from "@/lib/demo-data"

const TOTAL_STEPS = 5

export default function EngineWorkspace() {
  const [step, setStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)

  const [keyword, setKeyword] = useState('')
  const [audience, setAudience] = useState('')

  const handleNextStep = () => {
    setIsGenerating(true)
    setProgress(0)
    
    // Mock generation delay
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsGenerating(false)
          setStep((s) => s + 1)
          return 100
        }
        return prev + 25
      })
    }, 600)
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Blog Engine Workspace</h1>
          <p className="text-muted-foreground mt-1 text-lg">Generate high-ranking, GEO-optimized, conversion-focused blogs.</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-primary border-primary">Step {step} of {TOTAL_STEPS}</Badge>
        </div>
      </div>

      <Progress value={(step / TOTAL_STEPS) * 100} className="w-full h-2" />

      {step === 1 && (
        <Card className="animate-in slide-in-from-bottom-4 duration-500">
          <CardHeader>
            <CardTitle>1. Define Strategy & Keywords</CardTitle>
            <CardDescription>Input your primary targets. Engine automatically deduces intent and builds clusters.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label>Primary Keyword</Label>
                <Input placeholder="e.g. AI Blog Automation Tool" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
              </div>
              <div className="space-y-3">
                <Label>Target Audience</Label>
                <Input placeholder="e.g. Agency Owners, Startups" value={audience} onChange={(e) => setAudience(e.target.value)} />
              </div>
              <div className="space-y-3">
                <Label>Tone of Voice</Label>
                <Select defaultValue="authoritative">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="authoritative">Authoritative & Premium</SelectItem>
                    <SelectItem value="conversational">Conversational</SelectItem>
                    <SelectItem value="technical">Highly Technical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label>Market / GEO</Label>
                <Select defaultValue="global">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="global">Global (US Focus)</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t pt-6">
            <Button onClick={handleNextStep} disabled={isGenerating || !keyword}>
              {isGenerating ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing Intent...</> : 'Analyze Intent & Clusters'}
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card className="animate-in slide-in-from-bottom-4 duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Target className="w-5 h-5 text-primary" /> 2. Keyword Intent & Clustering Results</CardTitle>
            <CardDescription>Engine extrapolated sub-clusters from "{keyword}".</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Detected Intent</h4>
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 font-medium flex items-center gap-3">
                <Target className="w-5 h-5" /> Commercial Investigation
              </div>
              <p className="text-sm text-muted-foreground">The blog needs a strong comparative product narrative and a free trial CTA.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Discovered Clusters</h4>
              <div className="space-y-2">
                {['Best automation for WordPress', 'Cheapest SEO content generators', 'AI detection bypass tools'].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm p-2 rounded-md bg-muted/50 border">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={() => setStep(1)} disabled={isGenerating}>Back</Button>
            <Button onClick={handleNextStep} disabled={isGenerating}>
              {isGenerating ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Running SERP Gap...</> : 'Analyze SERP Gaps & Build Prompt'}
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 3 && (
        <Card className="animate-in slide-in-from-bottom-4 duration-500">
          <CardHeader>
             <CardTitle className="flex items-center gap-2"><LayoutTemplate className="w-5 h-5 text-purple-500" /> 3. SERP Gap & Prompt Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="prompt">
              <TabsList className="mb-6">
                <TabsTrigger value="prompt">Prompt Architecture</TabsTrigger>
                <TabsTrigger value="serp">SERP Benchmarks</TabsTrigger>
              </TabsList>
              <TabsContent value="prompt" className="space-y-4">
                 <div className="p-4 bg-slate-900 rounded-xl overflow-x-auto text-sm text-slate-300 font-mono">
<pre>{`[SYSTEM]
You are an expert SEO architect.
[TASK]
Write a 2000-word blog for: ${keyword}.
[SEO RULES]
- Add Semantic Entities: programmatic SEO, CMS publishing.
- Format for Gen-AI Engine optimization (GEO).`}</pre>
                 </div>
              </TabsContent>
              <TabsContent value="serp" className="space-y-4">
                <div className="p-4 border rounded-xl bg-muted/20">
                  <h4 className="font-bold text-red-500 mb-2">Missing Content Gap</h4>
                  <p className="text-sm text-muted-foreground">Rank #1 lacks an interactive comparison table. We will insert one.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={() => setStep(2)} disabled={isGenerating}>Back</Button>
            <Button onClick={handleNextStep} disabled={isGenerating}>
              {isGenerating ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Outline...</> : 'Generate Content Outline'}
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 4 && (
        <Card className="animate-in slide-in-from-bottom-4 duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-indigo-500" /> 4. SEO-Optimized Outline</CardTitle>
            <CardDescription>You can modify the heading structure before final generation.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 pl-4 border-l-2 border-muted">
              <div className="relative">
                <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full border-2 border-indigo-500 bg-background" />
                <h3 className="font-bold text-lg">H1: {keyword || 'Blogy – Best AI Blog Automation Tool'}</h3>
                <p className="text-sm text-muted-foreground">[Direct Answer / GEO block placed here]</p>
              </div>
              <div className="relative pt-4">
                <div className="absolute -left-[22px] top-5 w-3 h-3 rounded-full border-2 border-muted bg-background" />
                <h4 className="font-semibold text-md">H2: Introduction to Blog Automation</h4>
              </div>
              <div className="relative pt-4">
                <div className="absolute -left-[22px] top-5 w-3 h-3 rounded-full border-2 border-muted bg-background" />
                <h4 className="font-semibold text-md">H2: How {keyword} works vs Traditional Agencies</h4>
                <div className="pl-6 pt-2 space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">H3: SERP Analysis Integration</p>
                  <p className="text-sm text-muted-foreground font-medium">H3: Programmatic Content Scaling</p>
                </div>
              </div>
              <div className="relative pt-4">
                <div className="absolute -left-[22px] top-5 w-3 h-3 rounded-full border-2 border-muted bg-background" />
                <h4 className="font-semibold text-md">H2: Frequently Asked Questions</h4>
                <p className="text-sm text-muted-foreground">[FAQ Schema built here]</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={() => setStep(3)} disabled={isGenerating}>Back</Button>
            <Button onClick={handleNextStep} disabled={isGenerating}>
              {isGenerating ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Writing Full Draft...</> : 'Generate Full Draft'}
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 5 && (
        <Card className="animate-in slide-in-from-bottom-4 duration-500 border-primary">
          <CardHeader className="bg-primary/5 border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2"><CheckSquare className="w-5 h-5 text-primary" /> 5. Final Draft & SEO Validation</CardTitle>
                <CardDescription>Blog successfully generated. Review scores below.</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-4xl font-extrabold text-primary">94<span className="text-xl text-muted-foreground">/100</span></div>
                <div className="text-xs font-medium uppercase tracking-wider text-primary">SEO Score</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="content">
              <TabsList className="mb-6 w-full justify-start overflow-x-auto">
                <TabsTrigger value="content">Content Preview</TabsTrigger>
                <TabsTrigger value="seo">SEO Validation</TabsTrigger>
                <TabsTrigger value="ai">Naturalness & AI Detection</TabsTrigger>
                <TabsTrigger value="geo">GEO Readiness</TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="prose dark:prose-invert max-w-none">
                <h1>{keyword || 'Blogy – Best AI Blog Automation Tool'}</h1>
                <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-l-primary my-4">
                  <strong>TL;DR:</strong> An automated blog engine bridges the gap between semantic keyword clustering and high-ranking content creation, slashing agency costs by up to 80% while preserving brand authority.
                </div>
                <h2>Introduction to Blog Automation</h2>
                <p>Content marketing in 2026 relies on semantic keyword clustering and programmatic structures. The old way of hiring agencies for static, unvalidated content is both expensive and fraught with indexing risks...</p>
                <div className="p-4 bg-blue-500/10 border-blue-500/30 border rounded-lg flex items-center justify-between my-8">
                  <div className="text-sm">
                    <strong>Internal Link Suggestion:</strong> Link to <a href="#" className="underline text-blue-500">How Blogy Disrupts Martech</a>
                  </div>
                  <Link2 className="w-4 h-4 text-blue-500" />
                </div>
                <h2>Features Comparison vs Legacy Tools</h2>
                <table className="w-full">
                  <thead><tr><th>Feature</th><th>Legacy Tools</th><th>Blogy Engine</th></tr></thead>
                  <tbody>
                    <tr><td>Clustering</td><td>Manual</td><td>Automated</td></tr>
                    <tr><td>SERP Analysis</td><td>Separate Tool</td><td>Integrated</td></tr>
                  </tbody>
                </table>
              </TabsContent>

              <TabsContent value="seo" className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg text-center"><div className="text-2xl font-bold text-green-500">100%</div><div className="text-xs text-muted-foreground mt-1">Keyword Placement</div></div>
                  <div className="p-4 border rounded-lg text-center"><div className="text-2xl font-bold text-green-500">92%</div><div className="text-xs text-muted-foreground mt-1">Heading Structure</div></div>
                  <div className="p-4 border rounded-lg text-center"><div className="text-2xl font-bold text-amber-500">85%</div><div className="text-xs text-muted-foreground mt-1">Internal Linking</div></div>
                  <div className="p-4 border rounded-lg text-center"><div className="text-2xl font-bold text-green-500">High</div><div className="text-xs text-muted-foreground mt-1">Snippet Readiness</div></div>
                </div>
              </TabsContent>

              <TabsContent value="ai" className="space-y-4">
                <div className="flex items-center gap-4 bg-red-500/10 text-red-700 p-4 rounded-lg border border-red-500/20">
                  <ShieldAlert className="w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold">AI Detection Risk: 5%</h4>
                    <p className="text-sm">Content is highly humanized. Naturalness score is 92/100. High variance in sentence length detected.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="geo" className="space-y-4">
                <div className="p-4 border rounded-lg bg-green-500/10 border-green-500/20">
                  <h4 className="font-bold text-green-700">Answer Engine Ready <CheckCircle2 className="inline w-4 h-4" /></h4>
                  <p className="text-sm text-green-700/80 mt-1">The inclusion of the TL;DR block and structured tables satisfies Gemini/GPT/Claude citation retrieval requirements.</p>
                </div>
              </TabsContent>

            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-primary/20 bg-primary/5 pt-6 rounded-b-xl">
             <Button variant="outline" onClick={() => setStep(4)}>Modify Outline</Button>
             <div className="space-x-4">
               <Button variant="secondary" className="bg-background">Save to Library</Button>
               <Button>Send to Publishing Adaptation</Button>
             </div>
          </CardFooter>
        </Card>
      )}

    </div>
  )
}
