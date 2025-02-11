import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PageFactionBasic from './pages/faction/Basic.tsx'
import PageFactionMembers from './pages/faction/Members.tsx'
import LayoutUnauthenticated from './layouts/Unauthenticated.tsx'
import LayoutAuthenticated from './layouts/Authenticated.tsx'
import PageLogin from './pages/Login.tsx'
import PageHome from './pages/Home.tsx'
import { ApiKeyProvider } from './context/api-key-context.tsx'

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ApiKeyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutUnauthenticated />}>
              <Route path="" element={<PageHome />} />
              <Route path="login" element={<PageLogin />} />
            </Route>
            <Route path="/app" element={<LayoutAuthenticated />} >
              <Route path="basic" element={<PageFactionBasic />} />
              <Route path="members" element={<PageFactionMembers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiKeyProvider>
    </QueryClientProvider>
  </StrictMode>,
)
