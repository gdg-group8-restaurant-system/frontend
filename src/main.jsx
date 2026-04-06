import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Food from './Food.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Food />
  </StrictMode>,
)
