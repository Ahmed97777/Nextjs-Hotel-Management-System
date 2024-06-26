"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
    },
  },
});

export default function PagesHolder({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div
        className="bg-gray-50 px-[4.8rem] row-start-2 pt-16 overflow-auto pb-[6.4rem]" /*Parent*/
      >
        <div
          className="max-w-[70rem] my-0 mx-auto flex flex-col gap-6" /*Container of Content */
        >
          {children}
        </div>
      </div>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "rgb(55 65 81)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
