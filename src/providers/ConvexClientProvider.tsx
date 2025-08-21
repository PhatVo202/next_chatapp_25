// "use client"
// import { ClerkProvider, useAuth } from '@clerk/nextjs'
// import { ConvexReactClient } from 'convex/react'
// import { ConvexProviderWithClerk } from 'convex/react-clerk'
// import React from 'react'

// type Props = {
//     children: React.ReactNode
// }

// const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || ""

// const convex = new ConvexReactClient(CONVEX_URL)

// const ConvexClientProvider = ({ children }: Props) => {
//     return (
//         <ClerkProvider>
//             <ConvexProviderWithClerk useAuth={useAuth} client={convex}>{children}</ConvexProviderWithClerk>
//         </ClerkProvider>
//     )
// }

// export default ConvexClientProvider

'use client'

import { ReactNode } from 'react'
import { Authenticated, AuthLoading, ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { useAuth } from '@clerk/nextjs'
import LoadingLogo from '@/components/shared/LoadingLogo'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
    return (
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <Authenticated> {children}</Authenticated>
            <AuthLoading><LoadingLogo /></AuthLoading>
        </ConvexProviderWithClerk>
    )
}