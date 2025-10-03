package ui;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class App extends Application {

    @Override
    public void start(Stage stage) throws Exception {
        System.out.println("Looking for FXML: " + getClass().getResource("/ui/Login.fxml"));
        
        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/ui/Login.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 400, 200);
        scene.getStylesheets().add(getClass().getResource("/ui/Styles/LoginStyle.css").toExternalForm());
    
        stage.setTitle("Login Screen");
        stage.setScene(scene);
        stage.setResizable(false);  
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}