import { LayoutDashboard } from 'lucide-react'
import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg">
          <LayoutDashboard className="h-5 w-5" />
          <span className="font-semibold">dashboard.web</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; dashboard.web -{' '}
          {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
