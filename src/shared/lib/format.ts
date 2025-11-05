export function maskCard(card: string): string {
  const digits = card.replace(/\D/g, "");
  if (digits.length < 12) return "•••• •••• •••• ••••";
  const start = digits.slice(0, 4);
  const end = digits.slice(-4);
  return `${start} •••• •••• ${end}`;
}

export function formatAmount(cents: number, currency: string = "USD") {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  }).format(cents / 100);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleString();
}
