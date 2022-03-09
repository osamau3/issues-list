import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from "react-query"

import { LandingPage } from './index'

test('render landing page title', () => {
    const queryClient = new QueryClient()

    render(
        <QueryClientProvider client={queryClient}>
            <LandingPage />
        </QueryClientProvider>
        )
    // verify render landing page title
    expect(screen.getByTestId('landingPageTitle')).toBeInTheDocument()
})

test('render landing page description', () => {
    const queryClient = new QueryClient()

    render(
        <QueryClientProvider client={queryClient}>
            <LandingPage />
        </QueryClientProvider>
    )
    // verify render landing page title
    expect(screen.getByTestId('landingPageDesc')).toBeInTheDocument()
})
