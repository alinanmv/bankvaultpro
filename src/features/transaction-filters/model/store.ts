import { create } from "zustand";
import type { CardBrand } from "@/entities/transaction/model/types";

interface FilterState {
  q: string; // name/email search
  brand: CardBrand | "All";
  success: "All" | "Success" | "Failed";
  setQ: (q: string) => void;
  setBrand: (b: FilterState["brand"]) => void;
  setSuccess: (s: FilterState["success"]) => void;
  reset: () => void;
}

export const useTxFilters = create<FilterState>((set) => ({
  q: "",
  brand: "All",
  success: "All",
  setQ: (q) => set({ q }),
  setBrand: (brand) => set({ brand }),
  setSuccess: (success) => set({ success }),
  reset: () => set({ q: "", brand: "All", success: "All" }),
}));
