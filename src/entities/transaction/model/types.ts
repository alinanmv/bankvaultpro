export type CardBrand = "Uzcard" | "Humo" | "Visa" | "MasterCard" | "Other";

export interface Transaction {
  id: string;
  name: string;
  email: string;
  cardBrand: CardBrand;
  cardNumber: string; // raw digits
  success: boolean;
  date: string; // ISO
  amountCents: number;
  currency: string; // e.g. "USD"
}
