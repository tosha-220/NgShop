package netckr.shop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue
    @Column(name = "id")
    @Getter
    @Setter
    private int id;

    @Column(name = "name")
    @Getter
    @Setter
    private String name;

    @Column(name = "email")
    @Getter
    @Setter
    private String email;

    @Column(name = "address")
    @Getter
    @Setter
    private String address;

    @Column(name = "mobile")
    @Getter
    @Setter
    private String mobile;

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
