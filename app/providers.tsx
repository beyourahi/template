"use client";

import { PropsWithChildren, createContext, useState } from "react";
import { trpc } from "app/_trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { NextUIProvider } from "@nextui-org/react";

interface ContextData {}

const URL =
    process.env.NODE_ENV === "production" ? "https://template-beyourahi.vercel.app" : "http://localhost:3000/api/trpc";

export const Context = createContext<ContextData>({} as ContextData);

export const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => trpc.createClient({ links: [httpBatchLink({ url: URL })] }));

    return (
        <Context.Provider value={{}}>
            <trpc.Provider client={trpcClient} queryClient={queryClient}>
                <QueryClientProvider client={queryClient}>
                    <NextUIProvider>{children}</NextUIProvider>
                </QueryClientProvider>
            </trpc.Provider>
        </Context.Provider>
    );
};
