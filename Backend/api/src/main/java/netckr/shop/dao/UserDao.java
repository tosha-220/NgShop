package netckr.shop.dao;


import netckr.shop.model.User;

public interface UserDao {
    User getUserByLogin(String login);

}
