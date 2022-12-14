import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import APIContextProvider from '@context/APIContext'
import AuthContextProvider from '@context/AuthContext'

import App from '@/App'

import '@styles/global.scss'
import '@assets/icons/all.min.css'
import '@assets/icons/svg-with-js.min.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <AnimatePresence mode="wait">
        <BrowserRouter>
            <APIContextProvider>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </APIContextProvider>
        </BrowserRouter>
    </AnimatePresence>,
)
