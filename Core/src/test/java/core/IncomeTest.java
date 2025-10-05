package core;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class IncomeTest {
    private User user;

    @BeforeEach
    void setUp() {
        user = new User("Alice", "Alice@gmail.com" , "password123");
    }
}
