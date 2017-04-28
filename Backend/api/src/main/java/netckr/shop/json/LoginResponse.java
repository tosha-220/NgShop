package netckr.shop.json;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public
@AllArgsConstructor
class LoginResponse {
    @Getter
    @Setter
    private String roleUser;
    @Getter
    @Setter
    private String token;

    public LoginResponse(String token) {
        this.token = token;
    }
}
