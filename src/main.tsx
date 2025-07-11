import { StrictMode } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from '@/components/ui/provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
    <App />
    </Provider>
  </StrictMode>,
)
