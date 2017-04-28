package netckr.shop.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "goods")
public
@NoArgsConstructor
class Product {
    @Id
    @Column(name = "product_id")
    @GeneratedValue
    @Getter
    @Setter
    private Integer id;

    @Column(name = "category_id")
    @Getter
    @Setter
    private Integer categoryId;

    @Column(name = "title")
    @Getter
    @Setter
    private String title;

    @Column(name = "price")
    @Getter
    @Setter
    private int price;

    @Column(name = "description")
    @Getter
    @Setter
    private String description;

    @Column(name = "imageUrl")
    @Getter
    @Setter
    private String imageUrl;

    public Product(Integer categoryId, String title, int price, String description, String imageUrl) {
        this.categoryId = categoryId;
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", categoryId=" + categoryId +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}