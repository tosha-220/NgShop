package netckr.shop.service;

import netckr.shop.model.UserRoles;


public interface RoleService {
    void addUserRole(UserRoles role);

    String getUserRole(String login);
}
