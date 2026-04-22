import Link from 'next/link'
import { ReactNode } from 'react'
import {
  LayoutDashboard,
  Cpu,
  FileText,
  BarChart,
  Settings,
  Globe,
  MonitorCheck
} from 'lucide-react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const currentPath = '/dashboard' // we'll use a dynamic one with usePathname later
  
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Blog Engine', href: '/engine', icon: Cpu },
    { name: 'Generated Blogs', href: '/blogs', icon: FileText },
    { name: 'Product Audit', href: '/audit', icon: MonitorCheck },
    { name: 'Publishing', href: '/publish', icon: Globe },
    { name: 'Reports', href: '/reports', icon: BarChart },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-muted/20">
      <aside className="w-64 border-r bg-background flex flex-col">
        <div className="p-6 border-b flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">B</div>
          <span className="text-xl font-bold">Blogy</span>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                currentPath === item.href
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t text-sm text-muted-foreground">
          <div className="flex items-center space-x-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              D
            </div>
            <span>Demo User</span>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
