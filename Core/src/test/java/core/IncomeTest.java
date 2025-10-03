package core;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class IncomeTest {
    private User user;

    @BeforeEach
    void setUp() {
        user = new User("Alice", "Alice@gmail.com" , "password123");
    }

    @Test
    void testAddIncome() {
        Income income = new Income("Salary", 5000, "Job", true);
        income.addIncome(user);
        assert(user.getIncomes().contains(income));
    }
}
