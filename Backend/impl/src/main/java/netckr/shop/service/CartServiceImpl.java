package netckr.shop.service;

import netckr.shop.dao.CartDao;
import netckr.shop.model.Customer;
import netckr.shop.json.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartDao cartDao;

    @Transactional
    @Override
    public void saveCustomer(Customer customer) {
        this.cartDao.saveCustomer(customer);
    }

    @Transactional
    @Override
    public void saveOrder(Order order) {
        this.cartDao.saveOrder(order);
    }

}
