package netckr.shop.dao;

import netckr.shop.model.UserRoles;

public interface RoleDao {
    void addUserRole(UserRoles role);

    String getUserRole(String login);
}

