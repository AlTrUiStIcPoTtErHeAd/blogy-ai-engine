'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, FileJson, FileText, Download, Printer } from 'lucide-react'

export default function ReportsPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Exports</h1>
          <p className="text-muted-foreground mt-1 text-lg">Generate presentation-ready metrics summaries for stakeholders and judges.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" onClick={handlePrint}><Printer className="w-4 h-4 mr-2" /> Print PDF</Button>
           <Button><Download className="w-4 h-4 mr-2" /> Export All Data</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart className="w-5 h-5 text-primary" /> SEO Performance</CardTitle>
            <CardDescription>Export aggregate scores, AI detection rates, and snippet eligibility across all generated content.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start"><FileText className="w-4 h-4 mr-2" /> Download PDF Report</Button>
              <Button variant="outline" className="w-full justify-start"><FileJson className="w-4 h-4 mr-2" /> Download Raw JSON</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart className="w-5 h-5 text-blue-500" /> Audit Issues</CardTitle>
            <CardDescription>Export the list of identified UX friction points, SEO crawl issues, and growth opportunities.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start"><FileText className="w-4 h-4 mr-2" /> Download PDF Report</Button>
              <Button variant="outline" className="w-full justify-start"><FileJson className="w-4 h-4 mr-2" /> Download CSV Export</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart className="w-5 h-5 text-purple-500" /> Platform Adaptation</CardTitle>
            <CardDescription>Export the alternative versions of your blogs formatted for Medium, Substack, LinkedIn, etc.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start"><FileText className="w-4 h-4 mr-2" /> Export .zip (Markdown)</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="border rounded-xl p-8 text-center bg-muted/20 print:block hidden">
        <h2 className="text-2xl font-bold">Hackathon Judges Print Wrapper</h2>
        <p className="text-muted-foreground">When printing, this wrapper displays a specialized print-friendly layout demonstrating the platform's ability to cleanly compile offline reports.</p>
      </div>
    </div>
  )
}
