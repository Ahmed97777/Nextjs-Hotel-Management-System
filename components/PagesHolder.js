"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function PagesHolder({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div
        className="bg-gray-50 px-[4.8rem] row-start-2 pt-16 pb-[6.4rem]" /*Content*/
      >
        {children}
      </div>
    </QueryClientProvider>
  );
}
