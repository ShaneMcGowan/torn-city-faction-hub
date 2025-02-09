import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageHome from './pages/Home.tsx'
import { BrowserRouter, Route, Routes } from "react-router"
import PageLogin from './pages/Login.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PageBasic from './pages/Basic.tsx'
import { UserProvider } from './context/user-context.tsx'

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/login" element={<PageLogin />} />
            <Route path="/basic" element={<PageBasic />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>,
)
