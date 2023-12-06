"use client";

import { PropsWithChildren, createContext, useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "app/_trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

interface ContextData {}

const URL =
    process.env.NODE_ENV === "production" ? "https://template-beyourahi.vercel.app" : "https://localhost:3000/api/trpc";

export const Context = createContext<ContextData>({} as ContextData);

export const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => trpc.createClient({ links: [httpBatchLink({ url: URL })] }));

    return (
        <Context.Provider value={{}}>
            <ClerkProvider>
                <trpc.Provider client={trpcClient} queryClient={queryClient}>
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                </trpc.Provider>
            </ClerkProvider>
        </Context.Provider>
    );
};
