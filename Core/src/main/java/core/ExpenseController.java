package core;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/expense")
@CrossOrigin(origins = "http://localhost:5173")
public class ExpenseController {
     private final List<Expense> expenses = new ArrayList<>();

    @GetMapping
    public List<Expense> getExpenses() {
        return expenses;
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        expenses.add(expense);
        return expense;
    }
}
