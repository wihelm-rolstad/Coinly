package core;

public class Expense {
    private String name;
    private int value;

    public Expense(String name, int value){
        this.name = name;
        this.value = value;
    }

    //GETTERS
    public String getName() {
        return name;
    }
    public int getValue() {
        return value;
    }

    //SETTERS
    public void setName(String name) {
        this.name = name;
    }
    public void setValue(int value) {
        this.value = value;
    }
    
}
