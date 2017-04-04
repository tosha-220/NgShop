package netckr.shop.model;


import java.util.Arrays;

public class Order {
    private Cart cart[];
    private User user;
    private int totalSum;

    public Cart[] getCart() {
        return cart;
    }

    public void setCart(Cart[] cart) {
        this.cart = cart;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
                ", user=" + user +
                ", totalSum=" + totalSum +
                '}';
    }
}
