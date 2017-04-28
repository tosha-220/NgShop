package netckr.shop.json;

import lombok.Getter;
import lombok.Setter;

public class Login {
    @Getter
    @Setter
    private String login;
    @Getter
    @Setter
    String password;

    @Override
    public String toString() {
        return "Login{" +
                "login='" + login + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
