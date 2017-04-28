package netckr.shop.json;

import lombok.Getter;
import lombok.Setter;
import netckr.shop.model.Product;

public class Cart {
    @Getter
    @Setter
    private Product item;
    @Getter
    @Setter
    private int sum;
    @Getter
    @Setter
    private int quantity;

    @Override
    public String toString() {
        return "Cart{" +
                "item=" + item +
                ", sum=" + sum +
                ", quantity=" + quantity +
                '}';
    }
}
