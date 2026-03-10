import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router'

import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | dashboard.web" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
