import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './data/store/index.ts'
import { Provider as ReduxProvider } from "react-redux"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import UIThemeProvider from './UI/ThemeProvider.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <UIThemeProvider>
          <App />
        </UIThemeProvider>
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
