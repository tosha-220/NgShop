package netckr.shop.service;

import netckr.shop.dao.RoleDao;
import netckr.shop.model.UserRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDao roleDao;

    @Transactional
    @Override
    public void addUserRole(UserRoles role) {

    }

    @Transactional
    @Override
    public String getUserRole(String login) {
        return this.roleDao.getUserRole(login);
    }
}
