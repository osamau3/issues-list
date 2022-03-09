import * as React from "react"
import { Routes, Route } from "react-router-dom"
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import './App.css';
import { IssueDetails } from './Issues'
import { LandingPage } from './LandingPage'

const queryClient = new QueryClient()


function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="issues/:id" element={<IssueDetails />} />
          </Routes>
      </QueryClientProvider>
  )
}

export default App;
