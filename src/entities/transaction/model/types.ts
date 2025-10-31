export type CardBrand = "Uzcard" | "Humo" | "Visa" | "MasterCard" | "Other";


export interface Transaction {
id: string;
name: string;
email: string;
cardBrand: CardBrand;
cardNumber: string; 
success: boolean;
date: string; 
amountCents: number;
currency: string; 
}