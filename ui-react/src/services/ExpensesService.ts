// src/services/ExpenseService.ts
import { apiFetch } from "./api";

export async function addExpense(expense: { expenseName: string; value: number }) {
  return apiFetch("/expense", {
    method: "POST",
    body: JSON.stringify(expense),
  });
}

export async function getExpenses() {
  return apiFetch("/expense", {
    method: "GET",
  });
}