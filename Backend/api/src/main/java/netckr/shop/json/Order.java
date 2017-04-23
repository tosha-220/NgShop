package netckr.shop.json;


import netckr.shop.model.Customer;

import java.util.Arrays;

public class Order {
    private Cart cart[];
    private Customer customer;
    private int totalSum;

    public Cart[] getCart() {
        return cart;
    }

    public void setCart(Cart[] cart) {
        this.cart = cart;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public int getTotalSum() {
        return totalSum;
    }

    public void setTotalSum(int totalSum) {
        this.totalSum = totalSum;
    }

    @Override
    public String toString() {
        return "Order{" +
                "cart=" + Arrays.toString(cart) +
                ", customer=" + customer +
                ", totalSum=" + totalSum +
                '}';
    }
}
