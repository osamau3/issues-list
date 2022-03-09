import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from "react-query"

import { IssueDetails } from './index'

test('render error message if no data', () => {
    const queryClient = new QueryClient()

    render(
        <QueryClientProvider client={queryClient}>
            <IssueDetails />
        </QueryClientProvider>
        )
    // verify page content fallback error message
    expect(screen.getByText(/Something went wrong please try again later/i)).toBeInTheDocument()
})
