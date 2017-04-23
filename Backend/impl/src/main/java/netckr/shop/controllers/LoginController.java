package netckr.shop.controllers;

import netckr.shop.json.Login;
import netckr.shop.json.LoginResponse;
import netckr.shop.model.User;
import netckr.shop.service.RoleService;
import netckr.shop.service.UserService;
import netckr.shop.token.TokenGeneration;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    private final static Logger logger = Logger.getLogger(LoginController.class);

    @Autowired
    private TokenGeneration tokenGeneration;

    @Autowired
    private RoleService roleService;
    @Autowired
    private UserService userService;
    private String token;
    private String userRole;
    private final String incorrectLogin = "false";

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public LoginResponse login(@RequestBody Login login) {

        try {
            User currentUser = this.userService.getUserByLogin(login.getLogin());
            if (currentUser != null && currentUser.getPassword().equals(login.getPassword())) {
                userRole = roleService.getUserRole(currentUser.getLogin());
                token = tokenGeneration.getToken(currentUser, userRole);
                logger.info("userRole: "+userRole+", token "+token);
                return new LoginResponse(userRole, token);
            } else {
                logger.info("Incorrect login");
                return new LoginResponse(incorrectLogin);
            }
        } catch (Exception e) {
            logger.error("Exception or incorrect login");
            return new LoginResponse(incorrectLogin);
        }
    }

    @RequestMapping(value = "/logout")
    public boolean logout() {
        this.tokenGeneration.deleteToken();
        logger.info("Token deleted");
        return true;
    }

    @RequestMapping(value = "/verify", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean verifyToken(@RequestBody String token) {
        return this.tokenGeneration.verifyToken(token.replace("\"", ""));
    }
}