package netckr.shop.json;

import lombok.Getter;
import lombok.Setter;
import netckr.shop.model.Customer;

import java.util.Arrays;

public class Order {
    @Getter
    @Setter
    private Cart cart[];

    @Getter
    @Setter
    private Customer customer;

    @Getter
    @Setter
    private int totalSum;

    @Override
    public String toString() {
        return "Order{" +
                "cart=" + Arrays.toString(cart) +
                ", customer=" + customer +
                ", totalSum=" + totalSum +
                '}';
    }
}
