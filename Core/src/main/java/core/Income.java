package core;

public class Income {
    private String incomeName;
    private int value;
    private String incomeType;
    private boolean isRecurring;

    public Income(String incomeName, int value, String incomeType, boolean isRecurring) {
        this.incomeName = incomeName;
        this.value = value;
        this.incomeType = incomeType;
        this.isRecurring = isRecurring;
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

    public void setIncomeType(String incomeType) {
        this.incomeType = incomeType;
    }   

    public void setRecurring(boolean isRecurring) {
        this.isRecurring = isRecurring;
    }

    // Getters
    public String getIncomeName() {
        return incomeName;
    }

    public int getValue() {
        return value;
    }

    public String getIncomeType() {
        return incomeType;
    }

    public boolean isRecurring() {
        return isRecurring;
    }
}
