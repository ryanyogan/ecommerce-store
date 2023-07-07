import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards/featured`;

export async function getFeaturedBillboard(): Promise<Billboard> {
  const res = await fetch(URL);
  return res.json();
}
