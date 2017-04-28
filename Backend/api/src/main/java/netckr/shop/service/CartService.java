package netckr.shop.service;

import netckr.shop.model.Customer;
import netckr.shop.json.Order;

public interface CartService {
    void saveCustomer(Customer customer);

    void saveOrder(Order order);
}
