import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router'

import { Toaster } from 'sonner'

import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | dashboard.web" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
