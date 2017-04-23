package netckr.shop.json;

import netckr.shop.model.Product;

public class Cart {
    private Product item;
    private int sum;
    private int quantity;

    @Override
    public String toString() {
        return "Cart{" +
                "item=" + item +
                ", sum=" + sum +
                ", quantity=" + quantity +
                '}';
    }

    public int getSum() {
        return sum;
    }

    public void setSum(int sum) {
        this.sum = sum;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Product getItem() {
        return item;
    }

    public void setItem(Product item) {
        this.item = item;
    }
}
