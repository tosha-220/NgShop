package netckr.shop.dao;


import netckr.shop.model.Order;
import netckr.shop.model.User;

public interface CartDao {
    void saveCustomer(User user);

    void saveOrder(Order order);
}
