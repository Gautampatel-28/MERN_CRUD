import ReactDOM from 'react-dom/client'
import './index.css'  
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider, useSnackbar } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>,
)
