package netckr.shop.service;

import netckr.shop.model.Order;
import netckr.shop.model.User;

public interface CartService {
    void saveCustomer(User user);

    void saveOrder(Order order);
}
