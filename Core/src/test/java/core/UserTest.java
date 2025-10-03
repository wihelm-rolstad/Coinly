package core;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    private User user;

    @BeforeEach
    void setUp() {
        user = new User("Alice", "Alice@gmail.com" , "password123");
    }

    @Test
    void testAllGetters() {
        assertEquals("Alice", user.getUsername());
        assertEquals("Alice@gmail.com", user.getUserEmail());
        assertEquals("password123", user.getUserPassword());    
    }
}