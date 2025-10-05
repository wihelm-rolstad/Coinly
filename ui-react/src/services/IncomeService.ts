import { apiFetch } from "./api";

export async function getIncomes() {
  return apiFetch("/income");
}

export async function addIncome(income: { incomeName: string; value: number }) {
  return apiFetch("/income", {
    method: "POST",
    body: JSON.stringify(income),
  });
}