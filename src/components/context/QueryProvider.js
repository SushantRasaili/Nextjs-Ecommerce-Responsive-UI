"use client";

import { QueryClient,QueryClientProvider } from 'react-query'



const QueryProvider = ({children}) => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <div>
    {children}
    </div>
    </QueryClientProvider>
  )
}

export default QueryProvider;