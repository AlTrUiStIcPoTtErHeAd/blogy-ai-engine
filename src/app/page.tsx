import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, BarChart, PenTool, Search } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <header className="px-6 py-4 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">B</div>
          <span className="text-xl font-bold tracking-tight">Blogy</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</Link>
          <Link href="#audit" className="text-muted-foreground hover:text-foreground transition-colors">Product Audit</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="font-semibold text-muted-foreground hover:text-foreground">Log In</Button>
          </Link>
          <Link href="/login">
            <Button className="font-semibold shadow-md">Get Started</Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 text-center max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-4">
            Hackathon Edition v1.0 Live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">AI Blog Engine</span> & Growth Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover keyword intent, generate SEO-optimized content, and audit your digital product—all in one place. No more switching between 5 different tools for organic growth.
          </p>
          <div className="flex justify-center items-center gap-4 pt-4">
            <Link href="/login">
              <Button size="lg" className="h-12 px-8 text-lg font-bold shadow-lg">
                Enter Demo Workspace <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <div className="flex justify-center flex-wrap gap-8 py-10 opacity-70">
            <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="w-5 h-5 text-primary" /> Keyword Clustering</div>
            <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="w-5 h-5 text-primary" /> Multi-prompts Architecture</div>
            <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="w-5 h-5 text-primary" /> UX & SEO Auditing</div>
          </div>
        </section>

        {/* Feature Cards */}
        <section id="features" className="py-20 bg-muted/30 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Three Pillars of Growth</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Blogy solves all three parts of the hackathon problem statement seamlessly through intelligent agent flows.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-primary shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <PenTool className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle>AI Blog Engine Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  Convert keyword intent into high-ranking, GEO-optimized, conversion-focused blogs using our structured prompt sequencing. Complete with semantic validation and snippet readiness.
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-500 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <Search className="text-blue-500 w-6 h-6" />
                  </div>
                  <CardTitle>Product & Dashboard Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  Critically evaluate product dashboards from a UX, growth, and technical perspective. Identify onboarding friction, conversion gaps, and architectural indexing risks.
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-purple-500 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <BarChart className="text-purple-500 w-6 h-6" />
                  </div>
                  <CardTitle>SEO & Platform Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  Generate publication-ready content and instantly audit it for readability, AI-detection risks, density compliance. See instant adaptation previews for 5+ major platforms.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t text-sm text-muted-foreground bg-background">
        <p>&copy; {new Date().getFullYear()} Blogy Hackathon Submission. All rights reserved.</p>
      </footer>
    </div>
  )
}
