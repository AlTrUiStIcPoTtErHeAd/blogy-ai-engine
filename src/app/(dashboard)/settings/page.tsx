'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Save } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Project Settings</h1>
        <p className="text-muted-foreground mt-1 text-lg">Configure global thresholds, connected providers, and demo overrides.</p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>AI Provider Configuration</CardTitle>
            <CardDescription>Manage your API keys for generative engine workflows.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="openai">OpenAI API Key</Label>
              <Input id="openai" type="password" defaultValue="sk-*********************************" />
              <p className="text-xs text-muted-foreground">Used for structural drafting and semantic clustering. Currently overridden by Hackathon Mock Layer.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="anthropic">Anthropic API Key</Label>
              <Input id="anthropic" type="password" defaultValue="sk-ant-*****************************" />
              <p className="text-xs text-muted-foreground">Used for Claude-based naturalness and conversational persona layering.</p>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-6 bg-muted/10">
            <Button><Save className="w-4 h-4 mr-2" /> Save Providers</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Global Workflow Defaults</CardTitle>
            <CardDescription>Set the default variables applied to new Generator tasks.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Default Market GEO</Label>
                <Input defaultValue="India" />
              </div>
              <div className="space-y-2">
                <Label>Target Competitor Count</Label>
                <Input defaultValue="10" type="number" />
              </div>
            </div>
            <div className="flex items-center justify-between border rounded-lg p-4">
               <div className="space-y-0.5">
                  <Label>Strict AI Detection Avoidance</Label>
                  <p className="text-sm text-muted-foreground">Prioritizes sentence variance over density correctness.</p>
               </div>
               <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between border rounded-lg p-4">
               <div className="space-y-0.5">
                  <Label>Hackathon Demo Mode Enabled</Label>
                  <p className="text-sm text-muted-foreground">Force-seeds deterministic mock data instead of live API billing.</p>
               </div>
               <Switch defaultChecked disabled />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
