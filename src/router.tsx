import { createBrowserRouter } from 'react-router'

import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { NotFound } from './pages/not-found'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/sign-in', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  { path: '*', element: <NotFound /> },
])
