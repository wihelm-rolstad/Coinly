package core;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/income")
@CrossOrigin(origins = "http://localhost:5173") // allow frontend calls
public class IncomeController {

    private final List<Income> incomes = new ArrayList<>();

    @GetMapping
    public List<Income> getIncomes() {
        return incomes;
    }

    @PostMapping
    public Income addIncome(@RequestBody Income income) {
        incomes.add(income);
        return income;
    }
}