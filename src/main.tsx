import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './data/store/index.ts'
import { Provider as ReduxProvider } from "react-redux"
import UIThemeProvider from './UI/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <UIThemeProvider>
        <App />
      </UIThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
