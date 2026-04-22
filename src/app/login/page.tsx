import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
        <CardHeader className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-2">
            B
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to Blogy</CardTitle>
          <CardDescription>
            Sign in to automate your SEO strategy or access the hackathon demo mode.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="name@company.com" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" disabled />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" disabled>Sign In</Button>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          <Link href="/dashboard" className="w-full">
            <Button variant="outline" className="w-full font-bold border-primary text-primary hover:bg-primary/10">
              Access Hackathon Demo
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
