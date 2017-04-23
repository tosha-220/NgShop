package netckr.shop.model;

import javax.persistence.*;

@Entity
@Table(name = "user_role")
public class UserRoles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private int roleId;

    @Column(name = "login")
    private String login;

    @Column(name = "role")
    private String role;

//    @ManyToMany(mappedBy = "roles")
//    private List<User> users;

//    public List<User> getUsers() {
//        return users;
//    }
//
//    public void setUsers(List<User> users) {
//        this.users = users;
//    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public UserRoles(String login, String role) {
        this.login = login;
        this.role = role;
    }

    public UserRoles() {
    }

    @Override
    public String toString() {
        return "Roles{" +
                "roleId=" + roleId +
                ", login='" + login + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
