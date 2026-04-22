'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, UploadCloud, Microscope, Smartphone, Lightbulb, TrendingUp, AlertTriangle } from 'lucide-react'

export default function AuditPage() {
  const [isAuditing, setIsAuditing] = useState(false)
  const [auditComplete, setAuditComplete] = useState(false)
  const [notes, setNotes] = useState('')

  const handleAudit = () => {
    setIsAuditing(true)
    setTimeout(() => {
      setIsAuditing(false)
      setAuditComplete(true)
    }, 2500)
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Product & Dashboard Audit</h1>
        <p className="text-muted-foreground mt-1 text-lg">Critically evaluate UX, growth friction, and SEO indexing risks from screenshots and notes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl">Upload Artifacts</CardTitle>
              <CardDescription>Upload a screenshot of your dashboard or funnel step.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer group">
                <UploadCloud className="w-10 h-10 text-muted-foreground group-hover:text-primary mb-4" />
                <p className="text-sm font-medium">Click to upload dashboard screenshot</p>
                <p className="text-xs text-muted-foreground mt-1">(Supports JPG, PNG up to 5MB)</p>
              </div>

              <div className="space-y-2">
                <Label>Audit Context / Notes</Label>
                <Textarea 
                  placeholder="e.g. This is our main onboarding screen for new agencies."
                  className="min-h-[100px]"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Target Customer</Label>
                <Input placeholder="e.g. Marketing Agencies" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleAudit} className="w-full" disabled={isAuditing}>
                {isAuditing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Running Audit...</> : <><Microscope className="mr-2 w-4 h-4" /> Run Deep Audit</>}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2">
          {!auditComplete ? (
            <div className="h-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-12 text-center bg-muted/5 min-h-[400px]">
              {isAuditing ? (
                <>
                  <Skeleton className="w-full h-12 mb-4" />
                  <Skeleton className="w-[80%] h-32 mb-4" />
                  <p className="text-muted-foreground animate-pulse text-sm">Evaluating user flow and heuristic friction...</p>
                </>
              ) : (
                 <div className="max-w-xs mx-auto">
                    <Microscope className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm font-medium">Your audit results will appear here categorizing bugs, structural SEO risks, and retention opportunities.</p>
                 </div>
              )}
            </div>
          ) : (
            <Card className="glass-card h-full animate-in slide-in-from-right-4 duration-500 border-primary shadow-lg overflow-hidden flex flex-col">
              <CardHeader className="bg-primary/5 border-b pb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Audit Report Generated</CardTitle>
                    <CardDescription>14 issues extrapolated from generic patterns and context notes.</CardDescription>
                  </div>
                  <Badge className="bg-destructive hover:bg-destructive shadow">Score: 62/100 (Needs Work)</Badge>
                </div>
              </CardHeader>
              
              <Tabs defaultValue="ux" className="flex-1">
                <div className="px-6 pt-6 mb-2">
                  <TabsList className="w-full grid-cols-4 hidden md:flex">
                     <TabsTrigger value="ux">UX & Onboarding</TabsTrigger>
                     <TabsTrigger value="seo">SEO & Tech Limits</TabsTrigger>
                     <TabsTrigger value="growth">Growth & Retention</TabsTrigger>
                     <TabsTrigger value="innovation">Feature Innovation</TabsTrigger>
                  </TabsList>
                  {/* mobile fallback */}
                  <TabsList className="w-full flex-wrap h-auto flex md:hidden gap-2">
                     <TabsTrigger value="ux" className="flex-1">UX/UI</TabsTrigger>
                     <TabsTrigger value="seo" className="flex-1">SEO/Tech</TabsTrigger>
                     <TabsTrigger value="growth" className="flex-1">Growth</TabsTrigger>
                  </TabsList>
                </div>

                <div className="px-6 pb-6 h-[400px] overflow-y-auto">
                  <TabsContent value="ux" className="space-y-4 m-0">
                    <AuditIssue 
                      severity="Critical" 
                      title="Onboarding Friction on Step 2"
                      impact="User Drop-off Rate increases by ~40% here."
                      fix="Combine password creation with the final workspace generation step. Remove extra clicks."
                      icon={<AlertTriangle className="w-5 h-5 text-destructive" />}
                    />
                    <AuditIssue 
                      severity="Medium" 
                      title="Vague Empty State"
                      impact="Decreased activation confidence."
                      fix="Provide a 'Load Demo Scenario' button (like this app!) to instantly populate the dashboard."
                      icon={<Smartphone className="w-5 h-5 text-amber-500" />}
                    />
                  </TabsContent>

                  <TabsContent value="seo" className="space-y-4 m-0">
                    <AuditIssue 
                      severity="High" 
                      title="Missing Canonical Tags on Dynamic Routes"
                      impact="Massive duplicate content penalty risk from generative permalinks."
                      fix="Implement metadata dynamic generation in app router layout."
                      icon={<AlertTriangle className="w-5 h-5 text-destructive" />}
                    />
                    <AuditIssue 
                      severity="High" 
                      title="Generative Output is NOT Indexable by Default"
                      impact="Generative components stuck behind React client walls won't rank."
                      fix="Ensure raw HTML static generation for the 'Generated Blogs Library' so Googlebot sees the DOM."
                      icon={<AlertTriangle className="w-5 h-5 text-destructive" />}
                    />
                  </TabsContent>

                  <TabsContent value="growth" className="space-y-4 m-0">
                     <AuditIssue 
                      severity="Medium" 
                      title="Missing Virality Loops"
                      impact="Losing out on word-of-mouth referral traffic."
                      fix="Add a 'Publish & Share via LinkedIn' one-click adaptation tool in the completion screen."
                      icon={<TrendingUp className="w-5 h-5 text-blue-500" />}
                    />
                     <AuditIssue 
                      severity="Low" 
                      title="Upgrade Path Hidden"
                      impact="Lower MRR conversions."
                      fix="Show premium features (like Bulk Generation) grayed out with a lock icon, prompting upgrades."
                      icon={<Lightbulb className="w-5 h-5 text-purple-500" />}
                    />
                  </TabsContent>

                  <TabsContent value="innovation" className="space-y-4 m-0">
                     <div className="p-4 border rounded-xl bg-purple-500/10 border-purple-500/20 text-purple-900 dark:text-purple-300">
                        <h4 className="font-bold mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" /> Product Differentiation Strategy</h4>
                        <p className="text-sm leading-relaxed">Most SEO blog engines generate flat walls of text. To differentiate from standard ChatGPT wrappers, build out **"Snippet Readiness Blocks"** explicitly designed to be captured by Google Search Generative Experience (SGE). Emphasize programmatic visual internal linking instead of just text anchors.</p>
                     </div>
                  </TabsContent>
                </div>
              </Tabs>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

function AuditIssue({ severity, title, impact, fix, icon }: any) {
  const isCritical = severity.toLowerCase() === 'critical' || severity.toLowerCase() === 'high'
  return (
    <div className={`p-4 rounded-xl border-l-4 ${isCritical ? 'border-l-destructive bg-destructive/5' : 'border-l-amber-500 bg-amber-500/5'}`}>
      <div className="flex gap-4">
        <div className="mt-1">{icon}</div>
        <div className="space-y-2 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">{title}</h4>
            <Badge variant="outline" className={isCritical ? 'text-destructive border-destructive' : 'text-amber-500 border-amber-500'}>{severity}</Badge>
          </div>
          <p className="text-sm"><strong className="opacity-80">Impact: </strong>{impact}</p>
          <p className="text-sm"><strong className="opacity-80">Fix: </strong>{fix}</p>
        </div>
      </div>
    </div>
  )
}

function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-muted ${className}`} />
}
