package netckr.shop.service;

import netckr.shop.dao.CartDao;
import netckr.shop.model.Order;
import netckr.shop.model.User;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;


public class CartServiceImpl implements CartService {
    @Autowired
    private CartDao cartDao;

    @Transactional
    @Override
    public void saveCustomer(User user) {
        this.cartDao.saveCustomer(user);
    }

    @Transactional
    @Override
    public void saveOrder(Order order) {
        this.cartDao.saveOrder(order);
    }

}
