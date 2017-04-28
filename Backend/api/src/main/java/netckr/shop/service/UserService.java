package netckr.shop.service;


import netckr.shop.model.User;

public interface UserService {
    User getUserByLogin(String login);
}
