import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Overview from './Overview.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Overview />
    </BrowserRouter>
  </StrictMode>,
)
