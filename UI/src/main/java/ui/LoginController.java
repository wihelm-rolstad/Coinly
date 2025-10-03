package ui;

import java.io.IOException;

import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import javafx.scene.control.Label;

public class LoginController {

    @FXML
    private TextField emailField;

    @FXML
    private PasswordField passwordField;

    @FXML
    private javafx.scene.control.Button loginButton;

    @FXML
    private Label errorLabel;

   @FXML
private void handleLogin() {
    String email = emailField.getText();
    String password = passwordField.getText();

    if (email.equals("") && password.equals("")) {
        System.out.println("✅ Login successful!");

        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/ui/Overview.fxml"));
            Parent root = loader.load();
            Scene scene = new Scene(root, 800, 600);

            scene.getStylesheets().add(getClass().getResource("/ui/Styles/OverviewStyle.css").toExternalForm());

            Stage stage = (Stage) loginButton.getScene().getWindow();

            stage.setScene(scene);
            stage.show();

        } catch (IOException e) {
            e.printStackTrace();
        }

    } else {
        System.out.println("❌ Invalid credentials.");
        errorLabel.setVisible(true); // show error
    }
}
}