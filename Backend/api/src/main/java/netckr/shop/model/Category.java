package netckr.shop.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @Column(name = "id")
    @GeneratedValue
    @Getter
    @Setter
    private Integer id;

    @Column(name = "title")
    @Getter
    @Setter
    private String title;

}