import { create } from "zustand";
import type { Transaction } from "./types";
import { fetchTransactionsMock } from "@/shared/api/transactions";

interface TxState {
  items: Transaction[];
  isLoading: boolean;
  error: string | null;
  load: (count?: number) => Promise<void>;
}

export const useTxStore = create<TxState>((set) => ({
  items: [],
  isLoading: false,
  error: null,
  async load(count = 64) {
    set({ isLoading: true, error: null });
    try {
      const data = await fetchTransactionsMock(count);
      set({ items: data, isLoading: false });
    } catch (e: any) {
      set({ error: e?.message ?? "Failed to load", isLoading: false });
    }
  },
}));
