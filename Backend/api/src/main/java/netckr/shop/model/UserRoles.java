package netckr.shop.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "user_role")
public
@NoArgsConstructor
class UserRoles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    @Getter
    @Setter
    private int roleId;

    @Column(name = "login")
    @Getter
    @Setter
    private String login;

    @Column(name = "role")
    @Getter
    @Setter
    private String role;

    @Override
    public String toString() {
        return "Roles{" +
                "roleId=" + roleId +
                ", login='" + login + '\'' +
                ", role='" + role + '\'' +
                '}';
    }

    public UserRoles(String login, String role) {
        this.login = login;
        this.role = role;
    }
}
