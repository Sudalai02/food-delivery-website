import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextPrvoider from './Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <StoreContextPrvoider>
        <App />
    </StoreContextPrvoider>
    </BrowserRouter>
)
