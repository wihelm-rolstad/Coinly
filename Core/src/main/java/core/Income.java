package core;

public class Income {
    private String incomeName;
    private int value;

    public Income(String incomeName, int value) {
        this.incomeName = incomeName;
        this.value = value;
    }

    public void addIncome(User user){
        user.getIncomes().add(this);
    }

    //SETTERS
    public void setIncomeName(String incomeName) {
        this.incomeName = incomeName;
    }

    public void setValue(int value) {
        this.value = value;
    }  

    // Getters
    public String getIncomeName() {
        return incomeName;
    }

    public int getValue() {
        return value;
    }
}
