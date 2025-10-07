// src/services/IncomeService.ts
import { apiFetch } from "./api";

export async function addIncome(income: { incomeName: string; value: number }) {
  return apiFetch("/income", {
    method: "POST",
    body: JSON.stringify(income),
  });
}

export async function getIncomes() {
  return apiFetch("/income", {
    method: "GET",
  });
}