import type {  Transaction, CardBrand } from "@/entities/transaction/model/types";


const brands: CardBrand[] = ["Uzcard", "Humo", "Visa", "MasterCard"];


function rand(min: number, max: number) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}


function pick<T>(arr: T[]): T {
return arr[rand(0, arr.length - 1)];
}


export async function fetchTransactionsMock(count = 64): Promise<Transaction[]> {
await new Promise((r) => setTimeout(r, 400));
const now = Date.now();
return Array.from({ length: count }).map((_, i) => {
const card = `${rand(4000, 4999)}${rand(1000, 9999)}${rand(1000, 9999)}${rand(1000, 9999)}`;
return {
id: `${now}-${i}`,
name: `User ${i + 1}`,
email: `user${i + 1}@mail.com`,
cardBrand: pick(brands),
cardNumber: card,
success: Math.random() > 0.12,
date: new Date(now - rand(0, 1000 * 60 * 60 * 24 * 30)).toISOString(),
amountCents: rand(100, 120000),
currency: "USD",
} satisfies Transaction;
});
}
