package netckr.shop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    @Column(name = "id")
    @Getter
    @Setter
    private int id;

    @Column(name = "login")
    @Getter
    @Setter
    private String login;

    @Column(name = "password")
    @Getter
    @Setter
    private String password;

    @Column(name = "email")
    @Getter
    @Setter
    private String email;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
