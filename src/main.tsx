import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EnquiryModalProvider } from './components/EnquiryModalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EnquiryModalProvider>
      <App />
    </EnquiryModalProvider>
  </StrictMode>,
)
