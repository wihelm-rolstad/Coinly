package core;

import java.util.ArrayList;

public class User {
    private int userID;
    private String username;
    private String useremail;
    private String userPassword;
    private ArrayList<Income> incomes = new ArrayList<>();

    public User(String username, String useremail, String userPassword) {
        this.userID = generateUserID();
        this.username = username;
        this.useremail = useremail;
        this.userPassword = userPassword;
    }

    private int generateUserID(){
        return (int) (Math.random() * 10000);
    }

    
    //SETTERS
    public void setUserName(String username){
        this.username = username;
    }

    public void setUserEmail(String useremail){
        this.useremail = useremail;
    }

    public void setUserPassword(String userPassword){
        this.userPassword = userPassword;
    }
    
    //GETTERS
    public int getUserID(){
        return userID;
    }

    public String getUsername(){
        return username;
    }

    public String getUserEmail(){
        return useremail;
    }

    public String getUserPassword(){
        return userPassword;
    }

    public ArrayList<Income> getIncomes() {
        return incomes;
    }
}

