import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider
        storageKey="dashboardweb-theme"
        defaultTheme="dark"
      >
        <Helmet titleTemplate="%s | dashboard.web" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
