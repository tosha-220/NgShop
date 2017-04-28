package netckr.shop.service;

import netckr.shop.dao.UserDao;
import netckr.shop.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Transactional
    @Override
    public User getUserByLogin(String login) {
        return this.userDao.getUserByLogin(login);
    }
}
