import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from "react-query"

import { IssuesList } from './index'

test('render loading state for list', () => {
    const queryClient = new QueryClient()

    render(
        <QueryClientProvider client={queryClient}>
            <IssuesList />
        </QueryClientProvider>
    )
    // verify render loading state for list
    expect(screen.getByTestId('loadingState')).toBeInTheDocument()
})

test('render search area for list', () => {
    const queryClient = new QueryClient()

    render(
        <QueryClientProvider client={queryClient}>
            <IssuesList />
        </QueryClientProvider>
        )
    // verify render search area for list
    expect(screen.getByTestId('search')).toBeInTheDocument()
})

test('default status filter is All', () => {
    const queryClient = new QueryClient()

    render(
        <QueryClientProvider client={queryClient}>
            <IssuesList />
        </QueryClientProvider>
    )
    // verify render loading state for list
    expect(screen.getByTestId('allStatusFilter')).toBeDisabled()
})


