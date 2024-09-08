import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Form from './Form.jsx'
import './index.css'
import UseFormData from './useFormData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    <UseFormData />
  </StrictMode>,
)
