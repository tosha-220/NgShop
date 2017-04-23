package netckr.shop.json;


public class LoginResponse {
    private String roleUser;
    private String token;

    public LoginResponse(String roleUser, String token) {
        this.roleUser = roleUser;
        this.token = token;
    }

    public LoginResponse(String token) {
        this.token = token;
    }

    public String getRoleUser() {
        return roleUser;
    }

    public void setRoleUser(String roleUser) {
        this.roleUser = roleUser;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
