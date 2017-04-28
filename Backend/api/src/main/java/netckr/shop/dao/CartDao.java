package netckr.shop.dao;


import netckr.shop.model.Customer;
import netckr.shop.json.Order;

public interface CartDao {
    void saveCustomer(Customer customer);

    void saveOrder(Order order);
}
