"use client";
import {
  createPraxTransport,
  isPraxConnected,
  requestPraxConnection,
} from "@penumbra-zone/client/prax";
import { TransportProvider } from "@connectrpc/connect-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

const queryClient = new QueryClient();
const praxTransport = createPraxTransport();

export const PraxQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => void (isPraxConnected() || requestPraxConnection()));
  return (
    <TransportProvider transport={praxTransport}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TransportProvider>
  );
};
