import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
// import { QueryClientProvider } from '@tanstack/react-query'
// import { QueryClientProvider } from '@tanstack/react-query'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
// import { Helmet } from 'react-helmet'
// import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
    </QueryClientProvider>
    </AuthProvider>
    </HelmetProvider>
    
  </React.StrictMode>,
)
