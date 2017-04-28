package netckr.shop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "order")
public class OrderTable {
    @Id
    @GeneratedValue
    @Column(name = "id")
    @Getter
    @Setter
    private int id;

    @Column(name = "title")
    @Getter
    @Setter
    private String title;

    @Column(name = "price")
    @Getter
    @Setter
    private int price;

    @Column(name = "quantity")
    @Getter
    @Setter
    private int quantity;

    @Column(name = "sum")
    @Getter
    @Setter
    private int sum;

    @Column(name = "userId")
    @Getter
    @Setter
    private int userId;

    @Column(name = "totalSum")
    @Getter
    @Setter
    private int totalSum;
}
