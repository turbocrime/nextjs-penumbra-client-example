"use client";
import { addressByIndex } from "@buf/penumbra-zone_penumbra.connectrpc_query-es/penumbra/view/v1/view-ViewService_connectquery";
import { useQuery } from "@connectrpc/connect-query";
import { bech32mAddress } from "@penumbra-zone/bech32m/penumbra";

export const PraxAddress = ({ account }: { account?: number }) => {
  const { data } = useQuery(addressByIndex, { addressIndex: { account } });
  return data?.address && bech32mAddress(data.address);
};
